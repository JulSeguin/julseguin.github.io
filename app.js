const invisibleDiv = document.getElementById("logIn");
const pCreation = document.createElement("p");
const submit = document.getElementById("submit");
const pw = document.getElementById("password");
const light = document.getElementById("borderLight");
const imgLight = document.getElementById("light");
const imgEscapeRooom = document.getElementsByClassName("img");

let connect = false;

light.addEventListener("click", function(event){
    if(connect){
        imgLight.src = "images/lightOn.png";
        light.style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(250, 250, 250)";
        light.appendChild(imgLight);
        connect = false
    }
    else{
        imgLight.src = "images/lightOff.png";
        light.style.backgroundColor = "rgb(150, 150, 150)";
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(100, 100, 100)";
        light.appendChild(imgLight); 
        connect = true
    }
})

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
