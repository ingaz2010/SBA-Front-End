class Person{
    constructor(fname, lname, address, city, state, zip){
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}
// Child
class Child extends Person{
    constructor(fname, lname, address, city, state, zip, dob,gender, program, fullday) {
        super(fname, lname, address, city, state, zip);
        this.dob = dob;
        this.gender = gender;
        this.program = program;
        this.fullday = fullday;
        // this.mother = new Mother();
        // this.father = new Father();
    }
    //joins Parent objects (mother and father)
    addParents( mother, father){
        this.mother = mother;
        this.father = father;
}
}

//Parent class for mother and father objects
class Parent extends Person{
    constructor(fname, lname, address, city, state, zip, phone, email) {
        super(fname,lname, address, city, state, zip);
        this.phone = phone;
        this.email = email;
    }
}

// Program class. we will instantiate 3 programs: toddlers, 3-K and PRE-K and they will have a list of kids attending those programs
class Program {
    constructor(name, payment) {
       this.name = name;
       this.payment = payment;
       this.children = []; //empty array to be filled with child objects
    }
    //add a child to the program
    addChild(child){
        this.children.push(child);
    }
    deleteChild(child){
        let index = this.children.indexOf(child);
        this.children.splice(index, 1);
    }
}

//create program objects for each program
let toddlerProgram = new Program("Toddlers", 1200);
let threekProgram = new Program("3-K", 900);
let prekProgram = new Program("PRE-K", 800);

//when button register is clicked, this function is called
// gets info from input to fill new Child object, mother and father objects
function registerChild(){
    child = new Child();
    child.fname = document.getElementById('fname').value;
    child.lname = document.getElementById('lname').value;
    child.gender = document.getElementById('gender').value;
    child.dob = document.getElementById('dob').value;
    child.address = document.getElementById('addressLine1').value;
    child.city = document.getElementById('city').value;
    child.state = document.getElementById('state').value;
    child.zip = document.getElementById('zipcode').value;
    child.program = document.getElementById('forprogram').value;
    child.fullday = document.getElementById('extday');

    mother = new Parent();
    mother.fname = document.getElementById('mname').value;
    mother.lname = document.getElementById('mlname').value;
    mother.address = document.getElementById('maddressLine1').value;
    mother.city = document.getElementById('mcity').value;
    mother.state = document.getElementById('mstate').value;
    mother.zip = document.getElementById('mzipcode').value;
    mother.phone = document.getElementById('mphone').value;
    mother.email = document.getElementById('memail').value;

    father = new Parent();
    father.fname = document.getElementById('fathername').value;
    father.lname = document.getElementById('flname').value;
    father.address = document.getElementById('faddressLine1').value;
    father.city = document.getElementById('fcity').value;
    father.state = document.getElementById('fstate').value;
    father.zip = document.getElementById('fzipcode').value;
    father.phone = document.getElementById('fphone').value;
    father.email = document.getElementById('femail').value;

    //connect parents to the Child
    child.addParents(mother, father);

    //using if statement we decide which program's array of attending kids we will join new Child object
    //using input program information we compare it to the program names
    if(child.program == 'toddler'){
        toddlerProgram.addChild(child);
    } else if(child.program == '3k'){
        threekProgram.addChild(child);
    } else{
        prekProgram.addChild(child);
    }

    event.preventDefault();
    //concatenate information for dispalying in the table
    let address = child.address + " " + child.city + " " + child.state + " " + child.zip;
    let motherName = mother.fname +" " + mother.lname;

    //create table row
    let newTableRow = document.createElement('tr');

    //creating nodes for each column and insert information
    let countNode = document.createElement('td');
    if(child.program == 'toddler'){
       countNode.innerHTML = toddlerProgram.children.length;
    } else if(child.program == '3k'){
        countNode.innerHTML = threekProgram.children.length;
    } else{
        countNode.innerHTML = prekProgram.children.length;
    }
    newTableRow.append(countNode); //append node to the new row

    //repeat same process for each column
    let fnameNode = document.createElement('td');
    fnameNode.innerHTML = child.fname;
    newTableRow.append(fnameNode);

    let lnameNode = document.createElement('td');
    lnameNode.innerHTML = child.lname;
    newTableRow.append(lnameNode);

    let dobNode = document.createElement('td');
    dobNode.innerHTML = child.dob;
    newTableRow.append(dobNode);

    let addressNode = document.createElement('td');
    addressNode.innerHTML = address;
    newTableRow.append(addressNode);

    let parentNameNode = document.createElement('td');
    parentNameNode.innerHTML = motherName;
    newTableRow.append(parentNameNode);

    let contactPhoneNode = document.createElement('td');
    contactPhoneNode.innerHTML = mother.phone;
    newTableRow.append(contactPhoneNode);

    let emailNode = document.createElement('td');
    emailNode.innerHTML = mother.email;
    newTableRow.append(emailNode);

    //payment amount determined based on the program. using if statement we decide what amount we insert
    let paymentNode = document.createElement('td');
    if(child.program == 'toddler'){
        paymentNode.innerHTML = toddlerProgram.payment;
    } else if(child.program == '3k'){
        paymentNode.innerHTML = threekProgram.payment;
    } else{
        paymentNode.innerHTML = prekProgram.payment;
    }
    newTableRow.append(paymentNode);

    //using if statement evaluate to which table (each table represents a program) we append the row
    if(child.program == "toddler"){
        document.getElementById('toddlesTable').appendChild(newTableRow);
    }
    else if(child.program == "3k"){
        document.getElementById('threeYOTable').appendChild(newTableRow);
    }else{
        document.getElementById('fourYOTable').appendChild(newTableRow);
    }


}

