function Animal (name , moveBy){
    this.name = name
    this.moveBy = moveBy
}

Animal.prototype.movement = function(){
    return `Hello , I am ${this.name} and I move by ${this.moveBy}`
}

let bird = new Animal('Eagle' , 'Flying')
console.log(Animal.prototype)
console.log(bird.__proto__)
console.log(bird.name)
console.log(bird.moveBy)
console.log(bird.movement())


class Person {
    talk (){
        return 'Talking'
    }
}

const me = new Person()
console.log(me.talk())  // Talking

class SuperHuman extends Person{
    fly (){
        return 'Flying'
    }
}

const you = new SuperHuman()
console.log(you.fly())
console.log(you.talk())   // Talking


const player = {
    role (){
        return 'MidFielder'
    }
}
const teamPlayer = Object.create(player)
teamPlayer.role=function(){return "Striker"}

console.log(player.role())      // MidFielder
console.log(teamPlayer.role())  // Striker