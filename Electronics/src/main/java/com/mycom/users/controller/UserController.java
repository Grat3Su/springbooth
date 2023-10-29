package com.mycom.users.controller;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
@RequiredArgsConstructor
@RequestMapping("/session-login")
public class UserController {

    private final UserService userService;

    @GetMapping(value = {"", "/"})
    public String home(Model model, @SessionAttribute(name = "userId", required = false) Long userId) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        User loginUser = userService.getLoginUser(userId);

        if(loginUser != null) {
            model.addAttribute("nickname", loginUser.getNickname());
        }

        return "home";
    }

    @GetMapping("/join")
    public String joinPage(Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        model.addAttribute("joinRequest", new JoinRequest());
        return "join";
    }

    @PostMapping("/join")
    public String join(@Validated @ModelAttribute JoinRequest joinRequest, BindingResult bindingResult, Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        // loginId �ߺ� üũ
        if(userService.checkLoginIdDuplicate(joinRequest.getLoginId())) {
            bindingResult.addError(new FieldError("joinRequest", "loginId", "�α��� ���̵� �ߺ��˴ϴ�."));
        }
        // �г��� �ߺ� üũ
        if(userService.checkNicknameDuplicate(joinRequest.getNickname())) {
            bindingResult.addError(new FieldError("joinRequest", "nickname", "�г����� �ߺ��˴ϴ�."));
        }
        // password�� passwordCheck�� ������ üũ
        if(!joinRequest.getPassword().equals(joinRequest.getPasswordCheck())) {
            bindingResult.addError(new FieldError("joinRequest", "passwordCheck", "�ٹй�ȣ�� ��ġ���� �ʽ��ϴ�."));
        }

        if(bindingResult.hasErrors()) {
            return "join";
        }

        userService.join(joinRequest);
        return "redirect:/session-login";
    }

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        model.addAttribute("loginRequest", new LoginRequest());
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute LoginRequest loginRequest, BindingResult bindingResult,
                        HttpServletRequest httpServletRequest, Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        User user = userService.login(loginRequest);

        // �α��� ���̵� ��й�ȣ�� Ʋ�� ��� global error return
        if(user == null) {
            bindingResult.reject("loginFail", "�α��� ���̵� �Ǵ� ��й�ȣ�� Ʋ�Ƚ��ϴ�.");
        }

        if(bindingResult.hasErrors()) {
            return "login";
        }

        // �α��� ���� => ���� ����

        // ������ �����ϱ� ���� ������ ���� �ı�
        httpServletRequest.getSession().invalidate();
        HttpSession session = httpServletRequest.getSession(true);  // Session�� ������ ����
        // ���ǿ� userId�� �־���
        session.setAttribute("userId", user.getId());
        session.setMaxInactiveInterval(1800); // Session�� 30�е��� ����

        return "redirect:/session-login";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        HttpSession session = request.getSession(false);  // Session�� ������ null return
        if(session != null) {
            session.invalidate();
        }
        return "redirect:/session-login";
    }

    @GetMapping("/info")
    public String userInfo(@SessionAttribute(name = "userId", required = false) Long userId, Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        User loginUser = userService.getLoginUser(userId);

        if(loginUser == null) {
            return "redirect:/session-login/login";
        }

        model.addAttribute("user", loginUser);
        return "info";
    }

    @GetMapping("/admin")
    public String adminPage(@SessionAttribute(name = "userId", required = false) Long userId, Model model) {
        model.addAttribute("loginType", "session-login");
        model.addAttribute("pageName", "���� �α���");

        User loginUser = userService.getLoginUser(userId);

        if(loginUser == null) {
            return "redirect:/session-login/login";
        }

        if(!loginUser.getRole().equals(UserRole.ADMIN)) {
            return "redirect:/session-login";
        }

        return "admin";
    }
}