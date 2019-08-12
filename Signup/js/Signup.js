function SubmitForm(){

    let fName = document.getElementById("fName-input");
    let lName = document.getElementById("lName-input");
    let email = document.getElementById("email-input");
    let age = document.getElementById("age-input");
    let password = document.getElementById("password-input");
    let conPassword = document.getElementById("conPassword-input");

    if (VerifyForm(fName.value,lName.value,email.value,age.value,password.value,conPassword.value)==true){
        let arrSubmission = [fName.value,lName.value,email.value,age.value,password.value,conPassword.value];
        alert("Sign Up Successful");
        document.getElementById("signup").reset();
    }




}

function VerifyForm(vfName,vlName,vEmail,vAge,vPassword,vconPassword){

    if (vfName==""){
        alert("Please Enter Your First Name");
        return false;
    } else if (vlName==""){
        alert("Please Enter Your Last Name");
        return false;
    } else if (vEmail==""){
        alert("Please Enter Your Email");
        return false;
    } else if (!vEmail.includes("@")){
        alert("Please Enter a Valid Email");
        return false;
    } else if (vAge == ""){
        alert("Please Enter Your Age");
        return false;
    } else if (isNaN(vAge)){
        alert("Please Enter Your Age as a Number");
        return false;
    } else if (vPassword==""){
        alert("Please Enter Your Password");
        return false;
    } else if (checkPassword(vPassword,vconPassword)==false){
        alert("Passwords DO NOT Match");
        return false;
    } else {
        return true
    }
}

function checkPassword(pass,confirm){

    if (pass === confirm){
        return true
    } else {
        return false
    }
}

function showPassword(){
    let p = document.getElementById("password-input");
    let cp = document.getElementById("conPassword-input")
    if (p.type === "password" && cp.type === "password") {
        p.type = "text";
        cp.type = "text";
    } else {
        p.type = "password";
        cp.type = "password";
    }
}
