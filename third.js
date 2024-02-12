function Dude (name){
    this.name = name;
}

Dude.prototype.details = function (){
    return 'Hello , my name is  ' + this.name ; 
}

const  john = new Dude('John');
console.log(john.details()); // Hello, my name is John
console.log(john.__proto__)
console.log(Dude.prototype)
console.log(Dude.__proto__)

const me = new Object()
console.log(me)
me.jump = function (){
    return 'Jumping'

}

console.log(me.jump())
console.log(me.__proto__ === Object.prototype )
//Object.create creates a new object with the specified prototype object and properties object. If the properties object is not provided, JavaScript will create an empty object for it.

const they = Object.create(me)
console.log(they.jump())
console.log(they.__proto__===me)