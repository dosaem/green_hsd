document.addEventListener("DOMContentLoaded", function(event) {
  let regiBtn = document.getElementById("regiBtn");
  regiBtn.addEventListener("click", form_check());
  let uid = document.getElementById("uid");
  uid.addEventListener("keyup", getCont(this.value));

  function form_check() {
    var sm = document.getElementById("inputForm");
    console.log(sm);
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var uname = document.getElementById("uname");
    var tel = document.getElementById("tel");

    if (!uid.value) {
      uid.focus();
      return false;
    }
    if (!pwd.value) {
      pwd.focus();
      return false;
    }
    if (!uname.value) {
      uanme.focus();
      return false;
    }

    sm.submit();
  }

  function getCont(uid) {
    console.log("hi");
    var xhttp = new XMLHttpRequest();
    // 아이디를 체크할 php 페이지에 체크 하려하는 id 값을 파라미터로 전송
    xhttp.open("GET", "id_check_aj.php?uid=" + uid, false);

    xhttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == "4" && xhttp.status == 200) {
        if (xhttp.status == 500 || xhttp.status == 404 || xhttp.status == 403)
          alert(xhttp.status);
        else {
          // id_check_url.php 페이지에서 넘겨온 문자를 확인 하기 위하여 알림창으로 출력
          // 차후 주석 처리 하면 되는 부분이며 페이지에서 넘어오는 값중 개행값이 없도록 처리
          var txt = xhttp.responseText;
          txt = txt.replace(/\n/g, ""); //행바꿈제거
          txt = txt.replace(/\r/g, ""); //엔터제거
          txt = txt.replace(/\s+/, ""); //왼쪽 공백제거
          txt = txt.replace(/\s+$/g, ""); //오른쪽 공백제거
          //alert('id_check.php 페이지에서 반환된 값 : '+txt+'\r필드에서 입력 받은 값 : ' + id);

          var dp = document.getElementById("rst");

          if (txt == "Y") {
            dp.innerHTML = "이미 가입된 아이디입니다.";
            dp.className = "redText";
          } else {
            dp.innerHTML = "사용할 수 있는 아이디입니다.";
            dp.className = "blueText";
          }
        }
      }
    };
    xhttp.send();
  }
});
