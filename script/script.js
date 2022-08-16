const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const container2 = document.querySelector(".container");

sign_up_btn2.addEventListener("click", () => {
  container2.classList.add("sign-up-mode");
});

sign_in_btn2.addEventListener("click", () => {
  container2.classList.remove("sign-up-mode");
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


 function printError2(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


 
function validateForm2() {

    var id = document.Form2.id.value;
    var password2 = document.Form2.password2.value;
     
    var name2Err = idErr =  password2Err = true;
    

    if(id == "") {
        printError2("idErr", "Please enter your email or phone number"); 
         var elem = document.getElementById("id"); 
        
    } else { 
        
        var regex =/^\S+@\S+\.\S+$/;
         var regex2 =/^(013|014|015|016|017|018|019)\d{8}$/;
         var regex3 =/^((\S+@\S+\.\S+)|(013|014|015|016|017|018|019)\d{8})$/;      
        if(regex3.test(id) === false) {
            printError2("idErr", "Please enter a valid  address");
            var elem = document.getElementById("id");
            
        }else{ 
            printError2("idErr", "");
            idErr = false;
             var elem = document.getElementById("id");
        }
    }
 
    if(password2 == "") {
        printError2("password2Err", "Enter password");
        var elem = document.getElementById("password2");
           
    } else if(password2.length<6){
          printError2("password2Err", "Password length must be atleast 6 character"); 
        var elem = document.getElementById("password2");           
    }else {
        printError2("password2Err", "");
        password2Err = false;
        var elem = document.getElementById("password2");      
    }
      
    if((idErr || password2Err ) == true) {
       return false;  
    } 
    if((idErr && password2Err) == false) {  
    Showmsg(); 
      return false; 
    } 

};  


   function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var university = document.Form.university.value;
    var department = document.Form.department.value;
    var password = document.Form.password.value;
    var cpassword = document.Form.cpassword.value;
    var gender = document.Form.gender.value;
    

    var nameErr = emailErr = mobileErr = universityErr = departmentErr = genderErr = passwordErr = cpasswordErr = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        var regex = /^[a-zA-Z-'. \s]+$/;                 
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

          
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        var regex = /^(013|014|015|016|017|018|019)\d{8}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

        }
    }
    
    if(university == "Select") {
        printError("universityErr", "Please select your university");
        var elem = document.getElementById("university");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("universityErr", "");
        universityErr = false;
        var elem = document.getElementById("university");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    if(department == "Select") {
        printError("departmentErr", "Please select your department");
        var elem = document.getElementById("department");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("departmentErr", "");
        departmentErr = false;
        var elem = document.getElementById("department");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if(password == "") {
        printError("passwordErr", "Set password");
        var elem = document.getElementById("password");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else if(password.length<6){
          printError("passwordErr", "Password length must be atleast 6 character"); 
        var elem = document.getElementById("password");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else {
        printError("passwordErr", "");
        passwordErr = false;
        var elem = document.getElementById("password");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
        
    }
    
    if(cpassword == "") {
        printError("cpasswordErr", "Re-type password");
        var elem = document.getElementById("cpassword");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else if(cpassword.length<6){
          printError("cpasswordErr", "Password length must be atleast 6 character"); 
        var elem = document.getElementById("cpassword"); 
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else if(password !== cpassword) {
        printError("cpasswordErr", "Password not match");
        var elem = document.getElementById("cpassword");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("cpasswordErr", "");
        cpasswordErr = false;
        var elem = document.getElementById("cpassword");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

    }
    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4"); 

    }
     

    if((nameErr || emailErr || mobileErr || universityErr || departmentErr || passwordErr || cpasswordErr || genderErr) == true) {
       return false;    
    } 

   

    if((nameErr && emailErr && mobileErr && universityErr && departmentErr && passwordErr && cpasswordErr && genderErr) == false) {
      DataInsert(); 
      swal({
        title: ''+name,       
        text: 'Successfully create your account',
        icon: "success",   
        button: "Done",    
        });
      
    
      return false; 
    }
    function DataInsert(){
        alert("gugu"); 
        var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "demo"   
}) 
con.connect(function(err) {   
if (err) throw err;  
console.log("Connected!");  
var sql = "INSERT INTO `new`(`name`, `email`) VALUES ( 'Ajeet Kumar', 'Allahabad')";   

})
    } 
   
 }; 



