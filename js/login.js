function form_check(frm) {
  var uid = document.getElementById("uid");
  var pwd = document.getElementById("pwd");

  if (!uid.value) {
    alert("아이디를 입력하세요.");
    uid.focus();
    return false;
  }
  if (!pwd.value) {
    alert("비밀번호를 입력하세요.");
    pwd.focus();
    return false;
  }

  frm.submit();
}
