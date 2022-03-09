//make animal class with name, age, color, legs, and different methods
//make dog and cat class from the animal class

class Animal{
    constructor(name, classification, age, color, legs){
        this.name = name
        this.classification = classification
        this.age = age
        this.color = color
        this.legs = legs
        this.skills = []
    }
    set setSkill(newSkill){
        this.skills.push(newSkill)
    }
    
    get getInfo(){
        return `${this.name} is a ${this.classification} who is ${this.age} years old. He is a ${this.color} color, has ${this.legs} legs, and has skills including: ${this.skills}. His current mood is: ${Animal.energyLevel()}`
    }

    static energyLevel(){
        const differentEnergyLevels = ['do not poke the bear', 'asleep', 'nearly conscious', 'awake', 'playing', 'waiting to pounce', 'wants pets', 'the bestest boi ever', 'eyeing your lunch', 'ready to turn you into lunch', 'a cheetah on 15 cups of espresso']
        let index = Math.floor(Math.random()*differentEnergyLevels.length)
        return differentEnergyLevels[index] // this gives undefined somethimes and idk why
    }
}

const yungmoney = new Animal('yungmoney', 'octopus', '14', 'variable', 8)
console.log(yungmoney)
yungmoney.setSkill = 'inking'
yungmoney.setSkill = 'trickery'
yungmoney.setSkill = 'shenanigans'
//yungmoney.energyLevel
console.log(yungmoney.getInfo)

class Dog extends Animal{
    constructor(name, classification, age, color, legs, speed){
        super(name, classification, age, color, legs)
        this.speed = speed
    }
    makeNoise(){
        console.log('whoof')
    }
    set setSpeed(newSpeed){
        this.speed = newSpeed
    }
    getSpeed(){
        console.log(`${this.name}'s speed is: ${this.speed}`)
    }
}
const Gomez = new Dog('Gomez', 'labrador', 3, 'yellow', 4, )
Gomez.setSkill = 'fetching'
Gomez.setSkill = 'killing chickens'
console.log(Gomez.getInfo)
Gomez.setSpeed = "very ... very fast"
Gomez.getSpeed()