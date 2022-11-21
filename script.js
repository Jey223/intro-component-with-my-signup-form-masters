document.getElementById("firstname").addEventListener("keyup", changeFirstname);
document.getElementById("lastname").addEventListener("keyup", changeLastname);
document.getElementById("email").addEventListener("keyup", changeEmail);
document.getElementById("password").addEventListener("keyup", changePassword);




function validateForm(){

    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let counter = 0;


    if(fname == ""){
        
        document.getElementById("icon1").style.display = "block";
        document.getElementById("firstname_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").style.marginBottom = "24px"

        document.getElementById("firstname").placeholder = "";

    }
    else{

        counter++;
    }


    if(lname == ""){

       document.getElementById("icon2").style.display = "block";
       document.getElementById("lastname_input_border").style.borderColor = "hsl(0, 100%, 74%)";
       document.getElementById("p2").style.display = "block";
       document.getElementById("p2").style.marginBottom = "24px"

       document.getElementById("lastname").placeholder = "";


    }
    else{

        counter++;
    }

    let regex = /^([a-z A-Z 0-9 \._]+)@([a-z A-Z]+).([a-z A-Z]{2,4})(.[a-z]{2,4})?$/;


    if(email == "" || !(regex.test(email))){
        
       document.getElementById("icon3").style.display = "block";
       document.getElementById("email_input_border").style.borderColor = "hsl(0, 100%, 74%)";
       document.getElementById("p3").style.display = "block";
       document.getElementById("p3").style.marginBottom = "24px"

       document.getElementById("email").placeholder = "";
       document.getElementById("email").placeholder = "email@example.com";
    //    document.querySelector('#email').style.setProperty('::placeholder','red');
    //    document.getElementById("email").plceholderColor = "hsl(0, 100%, 74%)";

    }
    else{

        counter++;
    }

    
    if(password == ""){

        document.getElementById("icon4").style.display = "block";
        document.getElementById("password_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p4").style.display = "block";
        document.getElementById("p4").style.marginBottom = "20px"
 
        document.getElementById("password").placeholder = "";

        document.getElementById("eye-cursor").style.display = "none";
 
 
     }
     else{
 
         counter++;
     }

    if(counter == 4){
        return true;
    }
    else{
        return false;
    } 
}



function changeFirstname(){
    let FirstName = document.getElementById("firstname").value;


    if (FirstName == ""){
        document.getElementById("icon1").style.display = "block";
        document.getElementById("firstname_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").style.marginBottom = "24px"

        document.getElementById("firstname").placeholder = "";

    }
    else{
        document.getElementById("icon1").style.display = "none";
        document.getElementById("firstname_input_border").style.borderColor = "rgba(229, 231, 235, 1)";
        document.getElementById("p1").style.display = "none";

    }
}

function changeLastname(){
    let LastName = document.getElementById("lastname").value;


    if (LastName == ""){
        document.getElementById("icon2").style.display = "block";
        document.getElementById("lastname_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p2").style.display = "block";
        document.getElementById("p2").style.marginBottom = "24px"

        document.getElementById("lastname").placeholder = "";

    }
    else{
        document.getElementById("icon2").style.display = "none";
        document.getElementById("lastname_input_border").style.borderColor = "rgba(229, 231, 235, 1)";
        document.getElementById("p2").style.display = "none";

    }
}


function changeEmail(){
    let Email = document.getElementById("email").value;


    if (Email == ""){
        document.getElementById("icon3").style.display = "block";
        document.getElementById("email_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p3").style.marginBottom = "24px"

        document.getElementById("email").placeholder = "";
       document.getElementById("email").placeholder = "email@example/com";


    }
    else{
        document.getElementById("icon3").style.display = "none";
        document.getElementById("email_input_border").style.borderColor = "rgba(229, 231, 235, 1)";
        document.getElementById("p3").style.display = "none";

    }
}


function changePassword(){
    let Password = document.getElementById("password").value;


    if (Password == ""){
        document.getElementById("icon4").style.display = "block";
        document.getElementById("password_input_border").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("p4").style.display = "block";
        document.getElementById("p4").style.marginBottom = "24px";
        document.getElementById("eye-cursor").style.display = "none";

        document.getElementById("password").placeholder = "";


    }
    else{
        document.getElementById("icon4").style.display = "none";
        document.getElementById("password_input_border").style.borderColor = "rgba(229, 231, 235, 1)";
        document.getElementById("p4").style.display = "none";
        document.getElementById("eye-cursor").style.display = "block";
        document.getElementById("eye-cursor").style.display = "flex";



    }
}


let passwordToggle = document.querySelector('#eye-cursor');

passwordToggle.addEventListener('click', function(){
    let password = document.querySelector('#password')

    if (password.type === 'password') {
        password.type = 'text';
        document.querySelector('#eye-slash').style.display = "none";
    }
    else{
        password.type = 'password';
        document.querySelector('#eye-slash').style.display = "block";
    }

    password.focus();

})
