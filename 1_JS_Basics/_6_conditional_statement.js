let password = "Sani@123";

if(password.length===8){
    console.log("Password is valid");
}
else if (password.length<=8){
    console.log("Password is too short");
}
else if(password.length >= 8){
    console.log("Too long password , it must be of 8 characters.");
}
else{
    console.log("please provide password");
}