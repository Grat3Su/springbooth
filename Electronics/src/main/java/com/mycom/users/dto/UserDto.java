package com.mycom.users.dto;
public class UserDto {
	    private String loginId;

	    private String password;
	    private String passwordCheck;

	    private String nickname;

	    // 비밀번호 암호화 X
	    public User toEntity() {
	        return User.builder()
	                .loginId(this.loginId)
	                .password(this.password)
	                .nickname(this.nickname)
	                .role(UserRole.USER)
	                .build();
	    }

	    // 비밀번호 암호화
	    public User toEntity(String encodedPassword) {
	        return User.builder()
	                .loginId(this.loginId)
	                .password(encodedPassword)
	                .nickname(this.nickname)
	                .role(UserRole.USER)
	                .build();
	    }
}
