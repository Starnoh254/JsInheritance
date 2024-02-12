function Person (name , age){
    return {
        name ,
        age ,
        greet : function(){
            console.log(`Hello , my name is ${this.name} and I am ${this.age} years old`) 
        }
    }
}

const person1 = Person( "John" ,25) ;
person1.greet() ; // Hello , my name is John and I am 25 years old

person1.name = "Ogwambo"
console.log(person1)