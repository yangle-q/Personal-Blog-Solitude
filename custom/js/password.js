document.getElementById("passwordForm").addEventListener("submit", function(event) {

    event.preventDefault();


    var password = document.getElementById("password").value;


    if (password === "ylmeteorite") {


        document.getElementById("content").style.display = "block";


        document.getElementById("passwordForm").style.display = "none";


    } else {


        alert("密码不对哦~ 不知道别来捣乱!");


    }


});

