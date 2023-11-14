<template>
  <div class="container">
    <div class="mb-3 mt-5 d-flex justify-content-center">
      <h1 class="display-4">집에 갈래</h1>
    </div>
    <div class="mb-3">
      <h2>Register</h2>
    </div>
    <form novalidate>
      <div class="mb-3">
        <label for="userName">User Name:</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-valid': isUserNameFocusAndValid, 'is-invalid': isUserNameFocusAndInValid }"
          placeholder="Enter userName"
          name="userName"
          v-model="userName"
          @input="validateUserName"
          @focus="isUserNameFocus = true"
          @blur="isUserNameFocus = false"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Invalid.</div>
      </div>
      <div class="mb-3">
        <label for="userPassword">Password:</label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-valid': isUserPasswordFocusAndValid,
            'in-valid': isUserPasswordFocusAndInValid
          }"
          placeholder="Enter password"
          name="userPassword"
          v-model="userPassword"
          @input="validateUserPassword"
          @focus="isUserPasswordFocus = true"
          @blur="isUserPasswordFocus = false"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">
          1개 이상의 특수문자, 대소문자 및 숫자를 포함하고 8자리 이상이여야 합니다.
        </div>
      </div>
      <div class="mb-3">
        <label for="userPassword2">Password Confirm:</label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-valid': isUserPassword2FocusAndValid,
            'is-invalid': isUserPassword2FocusAndInValid
          }"
          placeholder="Confirm password"
          name="userPassword2"
          v-model="userPassword2"
          @input="validateUserPassword2"
          @focus="isUserPassword2Focus = true"
          @blur="isUserPassword2Focus = false"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="mb-3">
        <label for="userEmail">Email:</label>
        <input
          type="text"
          class="form-control"
          :class="{
            'is-valid': isUserEmailFocusAndValid,
            'is-invalid': isUserEmailFocusAndInValid
          }"
          placeholder="Enter email"
          name="userEmail"
          v-model="userEmail"
          @input="validateUserEmail"
          @focus="isUserEmailFocus = ture"
          @blur="isUserEmailFocus = false"
          required
        />
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Invalid.</div>
      </div>

      <div class="form-check form-check-inline" v-for="(code, index) in codeList" :key="index">
        <input
          class="form-check-input"
          name="userClsf"
          :value="code.code"
          type="radio"
          v-model="userClsf"
        />
        <label class="form-check-label">{{ code.codeName }}</label>
      </div>
    </form>
    <div>
      <button @click="register" class="btn btn-primary">가입</button>
    </div>
  </div>

  <!-- {{ isUserNameFocus }}
  {{ isUserPasswordFocus }}
  {{ isUserPassword2Focus }}
  {{ isUserEmailFocus }} -->

  {{ isUserNameValid }}
  {{ isUserPasswordValid }}
  {{ isUserPassword2Valid }}
  {{ isUserEmailValid }}
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/common/axios.js'

const groupCode = '001' //회원종류
const codeList = ref([])
const userClsf = ref('001')

const router = useRouter()
const userName = ref('')
const userPassword = ref('')
const userPassword2 = ref('')
const userEmail = ref('')

//focus
const isUserNameFocus = ref(false)
const isUserPasswordFocus = ref(false)
const isUserPassword2Focus = ref(false)
const isUserEmailFocus = ref(false)

//validate
const isUserNameValid = ref(false)
const isUserPasswordValid = ref(false)
const isUserPassword2Valid = ref(false)
const isUserEmailValid = ref(false)

//focus + valid <= computed
const isUserNameFocusAndValid = computed(() => isUserNameFocus.value && isUserNameValid.value)
const isUserPasswordFocusAndValid = computed(
  () => isUserPasswordFocus.value && isUserPasswordValid.value
)
const isUserPassword2FocusAndValid = computed(
  () => isUserPassword2Focus.value && isUserPassword2Valid.value
)
const isUserEmailFocusAndValid = computed(() => isUserEmailFocus.value && isUserEmailValid.value)

//invalid
const isUserNameFocusAndInValid = computed(() => isUserNameFocus.value && !isUserNameValid.value)
const isUserPasswordFocusAndInValid = computed(
  () => isUserPasswordFocus.value && !isUserPasswordValid.value
)
const isUserPassword2FocusAndInValid = computed(
  () => isUserPassword2Focus.value && !isUserPassword2Valid.value
)
const isUserEmailFocusAndInValid = computed(() => isUserEmailFocus.value && !isUserEmailValid.value)

const validateUserName = () => {
  isUserNameValid.value = userName.value.length > 0 ? true : false
}
const validateUserPassword = () => {
  let patternEngAtListOne = new RegExp(/[0-9a-zA-Z]+/)
  let patternSpeAtListOne = new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/) // + for at least one
  let patternNumAtListOne = new RegExp(/[0-9]+/) // + for at least one

  isUserPasswordValid.value =
    patternEngAtListOne.test(userPassword.value) &&
    patternSpeAtListOne.test(userPassword.value) &&
    patternNumAtListOne.test(userPassword.value) &&
    userPassword.value.length >= 8
      ? true
      : false
}
const validateUserPassword2 = () => {
  isUserPassword2Valid.value = userPassword.value == userPassword2.value ? true : false
}
const validateUserEmail = () => {
  let regexp = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  )
  isUserEmailValid.value = regexp.test(userEmail.value) ? true : false
}

const register = async () => {
  let userObj = {
    userName: userName.value,
    userPassword: userPassword.value,
    userEmail: userEmail.value,
    userClsf: userClsf.value
  }
  try {
    let { data } = await http.post('/users', userObj)
    console.log(data)
    router.push('/ login')
  } catch (error) {
    console.log(error)
  }
}
const getCodeList = async () => {
  let params = {
    groupCode: groupCode // reactive x
  }

  try {
    let { data } = await http.get('/codes', { params })
    console.log(data)
    codeList.value = data
  } catch (error) {
    console.log(error)
  }
}
getCodeList()
</script>
