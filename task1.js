export class Player {

  name;

  constructor(name) {
    this.name = name;
    
  }

  get name(){
    return this.name;
  }

  set name(value){
    this.name = value;
  }
}

const esteban = new Player("Esteban")

console.log(esteban)