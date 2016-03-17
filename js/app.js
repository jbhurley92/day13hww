function Lawyer(name, age){
    this.name = name;
    this.age = age;
    return;
}

function Teacher(name, age){
    this.name = name;
    this.age = age;
    return;
}

function Popo(name, age){
    this.name = name;
    this.age = age;
    return;
}

function Engineer(name, age){
    this.name = name;
    this.age = age;

}

function Person(){
    return this;
}
var boss = new Person();
Popo.prototype = boss;
Lawyer.prototype = boss;
Engineer.prototype = boss;
Teacher.prototype = boss;

Person.prototype.introduce = function (){
    console.log(' hello my name is ' + this.name + ' I am ' +this.age+ ' years old ');
};


var people = [];
people.push(new Lawyer('Paul Revere', 66));
people.push(new Engineer('Layla Thomas', 31));
people.push(new Teacher('Rob Ward', 25));
people.push(new Popo('Chris Nubin', 61));

// Should print out all of the "Hello, my name is..." lines.
for (var i = 0; i < people.length; i++) {
  people[i].introduce();
}


//console.log(this.people);   





var Lawyer = new Lawyer('Steve', '69');
var Teacher = new Teacher('Bridget', '25');
var Engineer = new  Engineer('Jacob', '24');
var Popo = new Popo('pig','67');