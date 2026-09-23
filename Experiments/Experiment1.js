//EXP-1 :create a custom EventEmitter that triggers "greet " and "exit"
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



//const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// // Listener for login event
// myEmitter.on('login', (username) => {
//     console.log(`${username} has logged in.`); //backtick
// });// 

// // Listener for logout event
// myEmitter.on('logout', (username) => {
//     console.log(`${username} has logged out.`);
// });

// // Trigger "login" event
// myEmitter.emit('login', 'Avni');

// // Trigger "logout" event
// myEmitter.emit('logout', 'Avni');

// //2.  simulate DOM-like event handling in Node.js using events
// const { EventEmitter } = require('events'); //EventEmitter is parent/base class. 
// class Button extends EventEmitter {} //Button is a child/derived/inherent class of EventEmitter.
// const button = new Button();
// button.on('click', () => console.log('button 1 clicked !'));
// button.on('mouseover', () => console.log('Mouse is over button 1 !')); // () => arrow function 

// button.emit('click');
// button.emit('mouseover');

//3. visualize the event loop using setTimeout ,setimmediate , process.nextTick
// console.log('Hello World!');
// setTimeout(() => {
//     console.log('Timeout has been executed!');
// }, 1000);
// setImmediate(() => {
//     console.log('Immediate has been executed!');
// });
// process.nextTick(() => {
//     console.log('NextTick has been executed!');
// });

//3. Event loop: setTimeout, setImmediate, process.nextTick
console.log("1. Start");

setTimeout(() => {

    console.log("4. setTimeout");

}, 0);

setImmediate(() => {

    console.log("5. setImmediate");

});

process.nextTick(() => {

    console.log("2. process.nextTick");

});

console.log("3. End");
