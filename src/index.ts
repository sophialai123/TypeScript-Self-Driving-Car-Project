import { getObstacleEvents } from './computer-vision';

/* there are going to be three “sections” of code: a section for types, a section for classes, and a section for execution. */


//a section for types
interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void //method to Car type return nothing
}

interface AutonomousCarProps {
  isRunning?: boolean;
  //type member named steeringControl of type Steering.
  steeringControl: Steering;
}


//index signature to allow this type to 
//have any string as each key, value is boolean
interface Events {
  [event: string]: boolean;
}


// allow all controls for our cars 
//must have an .execute() method.
interface Control {
  execute: (command: string) => void;
}


// copy all the type members of Control
// using the extends keyword.
interface Steering extends Control {
  turn: (direction: string) => void;

}


//a section for classes
class Car implements AutonomousCar {
  //declare a property without any value.
  isRunning;
  steeringControl;


  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl

  }


  respond(events: Events) {
    if (!this.isRunning) {
      return console.log("The car is off")
    }
    Object.keys(events).forEach(eventKey => {
      if (!events[eventKey]) { return }


      if (eventKey === "ObstacleLeft") {
        this.steeringControl.turn("right")
      }
      if (eventKey === "ObstacleRight") {
        this.steeringControl.turn("left")
      }
    })

  }
}

//create a class that handles steering
class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`)
  }
  turn(direction: string) {
    this.execute(`turn ${direction}`)

  }
}


//a section for execution
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering }); //pass class as argument
//pass a function call as an argument
autonomousCar.respond(getObstacleEvents())


