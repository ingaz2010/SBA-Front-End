function displayData(event){
    event.preventDefault();
    const form = document.forms['contactUs']
    const  fname = document.getElementById('fname').value;
    const lname = form['lname'].value;
    const email = form['email'].value;
    const  phone = form['phone'].value;
    const reason = form['reason'].value;
    const message = form['message'].value;

    document.getElementById("displayFirstName").textContent = "First Name: " + fname;
    document.getElementById('displayLastName').textContent = 'Last Name: ' + lname;
    document.getElementById('displayEmail').textContent = 'Email: ' + email;
    document.getElementById('displayPhone').textContent = 'Phone Number: ' + phone;
    document.getElementById('displayReason').textContent = 'Reason for contact: ' + reason;
    document.getElementById('displayMessage').textContent = 'Message: ' + message;
}