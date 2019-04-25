document.addEventListener("DOMContentLoaded", function(event) {
  let regiBtn = document.querySelector("#regiBtn");
  regiBtn.addEventListener("click", form_check(this.form));

  function form_check(frm) {
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var uname = document.getElementById("uname");
    var tel = document.getElementById("tel");

    // if (idv == 0) {
    //   alert("아이디 중복 검색을 해 주세요.");
    //   uid.focus();
    //   return false;
    // }
    // if (!uid.value)
    //   uid.focus();
    //   return false;
    // }
    // if (!pwd.value) {
    //   pwd.focus();
    //   return false;
    // }
    // if (!uname.value) {
    //   uanme.focus();
    //   return false;
    // }

    frm.submit();
  }
});
