export class Player {

  name;
  level;
  currentExp;
  expThreshold;

  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.currentExp = 0;
    this.expThreshold = 10; // límite de experiencia del primer nivel
  }

  get name(){
    return this.name;
  }

  set name(value){
    this.name = value;
  }

  get level(){
    return this.level;
  }

  set level(value){
    this.level = value;
  }

  get currentExp(){
    return this.currentExp;
  }

  set currentExp(value){
    this.currentExp = value;
  }


  info(){
    return `${this.name} has reached Level ${this.level}! and has ${this.currentExp} / ${this.expThreshold} exp points`
  }

  levelUp(){
    this.level += 1
    this.expThreshold = Math.floor(this.expThreshold * 1.1)
  }

  addExp(value){ // funcióon recursiva por si sube muchos puntos de experiencia y supera más de un nivel a la vez
    console.log(`${this.name} gained ${value} exp point(s)`)
    while(value + this.currentExp >= this.expThreshold){
      value -= this.expThreshold
      this.levelUp()
      // console.log(`Subiste de nivel, todavía acumulas ${value} estos puntos de exp para seguir subiendo de nivel`)
    }
    this.currentExp += value
  }
}

const esteban = new Player("Esteban", 1)

console.log(esteban)
console.log(esteban.info())
esteban.addExp(200)
console.log(esteban.info())
esteban.addExp(10)
console.log(esteban.info())
esteban.addExp(1)
console.log(esteban.info())
