// const EventEmitter = require('events');
// const myEmitter = new EventEmitter(); //creating an instance/object of the EventEmitter class that is myEmitter.
// myEmitter.on('greet', (name) => { //on is a method that listens for the event,eventlistener 
//   console.log(`Hello ${name}! Welcome to node.js event handling.`);
// });
// myEmitter.on('exit', () => {
//   console.log('Exiting the application. Goodbye!');
// });
// myEmitter.emit('greet', 'Avni'); //emit is a method that emits/triggers the event
// myEmitter.emit('exit'); 
// //on and emit are the two main methods of the EventEmitter class. The on method is used to register an event listener for a specific event, while the emit method is used to trigger that event and execute all the registered listeners for that event.
// //events : greet and exit.



const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listener for login event
myEmitter.on('login', (username) => {
    console.log(`${username} has logged in.`);
});

// Listener for logout event
myEmitter.on('logout', (username) => {
    console.log(`${username} has logged out.`);
});

// Trigger login event
myEmitter.emit('login', 'Avni');

// Trigger logout event
myEmitter.emit('logout', 'Avni');