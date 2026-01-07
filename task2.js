export class Player {

  name;
  level;

  constructor(name, level) {
    this.name = name;
    this.level = level;
    
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
}

const esteban = new Player("Esteban", 99)

console.log(esteban)