const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_con;

function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  //Guardar molde del suelo en variable 
  ground = new Ground(200,690,600,20);
  //Guardar molde de cuerda en variable 
  rope = new Rope(6,{x:245,y:30});

  //Crear opciones del motor físico para la fruta 
  var fruit_options = {
    density:0.001
  };
  //Creamos cuerpo circular para la fruta 
  fruit = Bodies.circle(300,300,15,fruit_options);
  //Ahora vamos a agregar la fruta al compuesto de nuestra cuerda
  //En nuestro juego la fruta esta creada por multiples rectangulos 
  //por eso se llama compuesto 
  Matter.Composite.add(rope.body,fruit);

  //Guardar molde de restricción en variable 
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  
  //Mostar suelo
  ground.display();
  //Mostrar la cuerda
  rope.display();
  //Asignar figura geometrica a la fruta para mostrarla 
  ellipse(fruit.position.x, fruit.position.y, 15,15);

  Engine.update(engine);
}




