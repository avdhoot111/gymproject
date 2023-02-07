
var student = {
    age: 15,
    firstName: 'shahrukh',
    lastName : 'khan',
    field : 'screenplay',
    
    role : function() {
    console.log(this.firstName + ' is playing a lead role');
    },
    
    canVote : function() {
        this.age > 18 ? console.log(this.firstName + ' can vote') : console.log(this.firstName + ' cannot vote');
        }
}


function studentConstructor(){
    
}

studentConstructor.prototype = student;

var newStudent = new studentConstructor();

console.log(newStudent.field);
newStudent.role();





