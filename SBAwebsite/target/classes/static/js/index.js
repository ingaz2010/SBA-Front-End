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

class Child extends Person{
    constructor(fname, lname, address, city, state, zip, dob,gender, program, fullday) {
        super(fname, lname, address, city, state, zip);
        this.dob = dob;
        this.gender = gender;
        this.program = program;
        this.fullday = fullday;
        this.mother = new Parent(fname, lname, address, city, state, zip, phone, email);
        this.father = new Parent(fname, lname, address, city, state, zip, phone, email);
    }
}

class Parent extends Person{
    constructor(fname, lname, address, city, state, zip, phone, email) {
        super(fname,lname, address, city, state, zip);
        this.phone = phone;
        this.email = email;
    }
}

class Program {
    constructor(name, payment) {
       this.name = name;
       this.payment = payment;
       this.children = [];
    }
    addChild(child){
        this.childer.push(child);
    }
    deleteChild(child){
        let index = this.children.indexOf(child);
        this.children.splice(index, 1);
    }
}

//create program objects for each program
let kidsAttendingDaycare = [];
let kidId = 0;

//onClick we need to get information form registration form and create child object
function onClick(id, action){
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

onClick('newChild', () => {
    kidsAttendingDaycare.push(new Child(kidId++, getValue(fname), getValue(lname),getValue(address),
        getValue(city), getValue(state), getValue(zip), getValue(dob), getValue(gender), getValue(program),
        getValue(fullday)));
})