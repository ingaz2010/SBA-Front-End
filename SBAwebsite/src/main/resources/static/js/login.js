class User{
    constructor(username, password, email, name) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
    }
}

let users = []; //array of user objects to add each user when created

//function called when log in button is clicked
//extraxts information user provided and using for loop goes through array if users and compares username and password
function loginUser(){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    for(let i = 0; i < users.length; i++){
        if(username == users[i].username && password == users[i].password){
            window.alert("You have logged in successfully!");
            window.open("http://localhost:63342/SBAwebsite/templates/register.html")
        }
    }

}

//function called when create new user button is clicked
//takes user's information and creates new User object
function createAccount() {
    event.preventDefault();
    let name = document.getElementById('providerName').value;
    let email = document.getElementById('providerEmail').value;
    let username = document.getElementById('new-username').value;
    let password = document.getElementById('new-password').value;
    users.push(new User(username, password, email, name));
    alert("Successfully created account!");
}
//when creating new user input requires to input matching password twice
//this function check if those passwords match
function check(){
    if(document.getElementById('new-password').value ===
        document.getElementById('confirmpassword').value) {
        document.getElementById('message').innerHTML = "match";
    } else {
        document.getElementById('message').innerHTML = "no match";
    }
}