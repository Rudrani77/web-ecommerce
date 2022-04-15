var email = document.getElementById('exampleInputEmail1').value;
var password = document.getElementById('exampleInputPassword1').value;

var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

if (emailcheck.test(email)){
    document.getElementById('erroremail').innerHTML=" ";
}
else{
    document.getElementById('erroremail').innerHTML="Please follow valid email syntax";
    return false;
}



if (passwordcheck.test(password)){
    document.getElementById('errorpassword').innerHTML=" ";
}
else{
    document.getElementById('errorpassword').innerHTML="Please use alphabets,numerics and special characters";
    return false;
}


}