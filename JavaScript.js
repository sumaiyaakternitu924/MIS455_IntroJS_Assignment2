function calculate () {
    var userName = document.getElementById("nameBox").value ; 
    var yourID = document.getElementById("yourID").value ; 
    var YourEmail = document.getElementById("email").value ; 
    var PhoneNumber = document.getElementById("number").value ; 
    var dateofBirth = document.getElementById("birth date").value ; 
    
    if (userName === "" || yourID === "" || YourEmail === "" || PhoneNumber === "" || dateofBirth === "") {
        document.getElementById("content").innerHTML = "<h4>Your registration is error. Please fill in all the required fields.</h4>";
    } 

    else {
        document.getElementById("content").innerHTML = `
            <h4>Hello ${userName} <br>
            Your ID is: ${yourID}  <br>
            Your Email is: ${YourEmail} <br>
            Your Phone Number is: ${PhoneNumber} <br>
            Your Date of Birth is: ${dateofBirth} <br><br><br>
            
            Your registration is successful</h4>`;
    }

    
}

    
     
