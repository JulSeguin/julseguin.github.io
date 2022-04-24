const invisibleDiv = document.getElementById("logIn");
const pCreation = document.createElement("p");
const submit = document.getElementById("submit");
const pw = document.getElementById("password");
const img = document.getElementsByClassName("img");
let connect = false;

pw.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        submit.click();
    }
})

function sendData(username, password){ 
    if(connect & username == "Julien" & password == "Salut1"){
        console.log("Working")
        invisibleDiv.style.visibility = "visible";
        pCreation.innerHTML = "You are already connected";
        invisibleDiv.appendChild(pCreation);
    }
    else{
        if(username == "Julien" & password == "Salut1"){
            console.log(`Your username is: ${username} with this password: ${password}`);
            invisibleDiv.style.visibility = "visible";
            pCreation.innerHTML = "You are now connected!";
            invisibleDiv.appendChild(pCreation);
            connect = true;
        }
        else{
            console.log("Not that");
            invisibleDiv.style.visibility = "visible";
            pCreation.innerHTML = "Wrong username or password";
            invisibleDiv.appendChild(pCreation);
        }
    }    
}
