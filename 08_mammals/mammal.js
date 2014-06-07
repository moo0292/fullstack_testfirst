function Baby(nameInput){
  this.name = "Baby " + nameInput;
}

function BabyCat(colorInput){
  this.name="";
  this.color=colorInput;
}


function Mammal(nameI){
  this.name = nameI;
  this.child = {name:""};
  this.offspring = [];
  this.sayHello = function(){
    return "My name is " + this.name + ", I'm a Mammal";
  }
  this.haveBaby = function(){
    child = new Mammal("Baby " + this.name);
    this.offspring.push(child);
    return child;
  }
}

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;
function Cat(nameI, colorI){
  this.name = nameI;
  this.color = colorI;
  this.haveBaby = function(colorI){
    child = new BabyCat(colorI);
    child.name = "Baby " + nameI;
    this.offspring.push(child);
    return child;
  }
}