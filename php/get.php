<?php 
$conn = mysqli_connect($localhost,$dosaem90,$gkstoa1234);

if(mysqli_connect_errno($conn)) {
    echo "db연결실패:" . mysqli_connect_error();
}else {
    echo "db연결 성공";
}
?>