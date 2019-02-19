//Fill with classes for rooms
//Rooms: 020, 120, 214, 216, 220, 222, 224, 226, 230, 301, 302, 306, 308, 310, 312, 314

//Variable declarations
var create_rn, tdirs, tdire, info, break_rn, tbr, cancel_rn;

//Room constructor function
var Room = function(number, floor, capacity) {
  //Fields of Room class
  this.number = number;           //room number
  this.floor = floor;             //room floor
  this.capacity = capacity;       //room capacity
  this.open = "Open";             //room availability, set to true (open) for all rooms until booked
  this.duration_start = "-";      //duration until room becomes available
  this.breakTime = 0;             //duration until break time ends for student in booked room
  this.duration_end = "-";
}


//Declaring each new room
var room020 = new Room("020", "Basement", 6);
var room120 = new Room("120", "First", 4);
var room214 = new Room("214", "Second", 6);
var room216 = new Room("216", "Second", 5);
var room220 = new Room("220", "Second", 6);
var room222 = new Room("222", "Second", 4);
var room224 = new Room("224", "Second", 8);
var room226 = new Room("226", "Second", 4);
var room230 = new Room("230", "Second", 4);
var room301 = new Room("301", "Third", 4);
var room302 = new Room("302", "Third", 6);
var room306 = new Room("306", "Third", 5);
var room308 = new Room("308", "Third", 4);
var room310 = new Room("310", "Third", 4);
var room312 = new Room("312", "Third", 3);
var room314 = new Room("314", "Third", 4);

//Array to store all classes of all rooms
let rooms = [room020, room120, room214, room216, room220, room222, room224, room226, room230, 
          room301, room302, room306, room308, room310, room312, room314];

//Function to render all rooms to screen with appropriate information
//user for loop to print out each room class with all information
function loadRooms() {
  for(var i = 0; i < rooms.length; i++) {
    if(rooms[i].open == "Open") {
      info = document.getElementsByClassName('a_room');     //get each <a> in html file to be able to print
      info[i].innerHTML = "Room: " + rooms[i].number + " &emsp;Floor: " + rooms[i].floor + " &emsp;Capacity: " + rooms[i].capacity 
        + " &emsp;Availability: " + rooms[i].open.fontcolor("green").bold() + " &emsp;Reservation Starts: " + rooms[i].duration_start 
        + " &emsp;Reservation Ends: " + rooms[i].duration_end  + " &emsp;Break time remaining: " +rooms[i].breakTime 
        + "mins" + "&emsp;";
    }
    else{
      info = document.getElementsByClassName('a_room');     //get each <a> in html file to be able to print
      info[i].innerHTML = "Room: " + rooms[i].number + " &emsp;Floor: " + rooms[i].floor + " &emsp;Capacity: " + rooms[i].capacity 
        + " &emsp;Availability: " + rooms[i].open.fontcolor("red").bold() + " &emsp;Reservation Starts: " + rooms[i].duration_start 
        + " &emsp;Reservation Ends: " + rooms[i].duration_end  + " &emsp;Break time remaining: " +rooms[i].breakTime 
        + "mins" + "&emsp;";
    }
  }
}

//Call loadRooms() function to render content to page
loadRooms();     


//Book room function
//Prompts user to specify room to book
//Prompts user for start and end time of reservation
//Loops through rooms to find room to book, updates room info accordingly
function book_function() {
  create_rn = prompt("Which room would you like to book?");
  tdirs = prompt("Enter reservation start time:");
  tdire = prompt("Enter reservation end time:");
  for (var i = 0; i < rooms.length; i++) {
    if(create_rn == rooms[i].number){
      rooms[i].open = "Closed";
      rooms[i].duration_start = tdirs;
      rooms[i].duration_end = tdire;
      break;
    }
  }
  loadRooms();  //Call loadRooms again to render updated info to page
}

//Break time function
//Prompts user to specify room to add break time for
//Prompts user for length of break time
//Loops through rooms to find room, updates room info accordingly
function break_function() {
  break_rn = prompt("Which room would you like to add break time for?");
  tbr = prompt("How long is the break time?");
  for (var i = 0; i < rooms.length; i++) {
    if(break_rn == rooms[i].number){
      rooms[i].breakTime = tbr;
      break;
    }
  }
  loadRooms();
}

//Cancel room reservation function
//Prompts user to specify room to cancel
//Loops through rooms to find room, updates room info accordingly
function cancel_function() {
  cancel_rn = prompt("Which room would you like to cancel reservation?");
  for (var i = 0; i < rooms.length; i++) {
    if(cancel_rn == rooms[i].number){
      rooms[i].duration_start = "-";
      rooms[i].duration_end = "-";
      rooms[i].open = "Open";
      rooms[i].breakTime = 0;
      break;
    }
  }
  loadRooms();
}

// //For loop to loop through array of all Room classes to create and append new 'p' elements to the page
// for (var i = 0; i < rooms.length; i++) {
//   var newp = document.createElement('p');     //declare variable to create a new paragraph element
//   var newb = document.createElement("button");
//   newb.innerHTML = "Book";
//   //New variable that will add relevent info to newp to be printed out, grabbing info from each Room class
//   newp.innerHTML = "Room: " + rooms[i].number + " &emsp;Floor: " + rooms[i].floor + " &emsp;Capacity: " + rooms[i].capacity 
//   + " &emsp;Availability: " + rooms[i].open + " &emsp;Time until available: " + rooms[i].duration 
//   + "mins " + " &emsp;Break time remaining: " +rooms[i].breakTime + "mins";
  
//   var button = function() {
//     newb.addEventListener ("click", function() {
//       document.setI
//       var rb = prompt("What room?");
//       for (var i = 0; i < rooms.length; i++) {
//         if(rooms[i].number === rb) {
//           createRes(40, rooms[i]);
//         }
//       }
//     });
//   }

//   if(rooms[i].floor === "Basement"){                          //check if current room is a basement room
//   var ff = document.getElementById('basement-listings');  //create variable to get respective floor listing section
//   ff.appendChild(newp);                                   //append newp info onto the section listing element to actually add to screen
//   ff.appendChild(newb);
//   button();
//   }
//   else if(rooms[i].floor === "First"){                        //check if current room is a first floor room
//   var ff = document.getElementById('first-listings');     
//   ff.appendChild(newp);
//   ff.appendChild(newb);
//   button();
//   }
//   else if(rooms[i].floor === "Second") {                      //check if current room is a second floor room      
//   var ff = document.getElementById('second-listings');
//   ff.appendChild(newp);
//   ff.appendChild(newb);
//   button();
//   }
//   else {                                                       //check if current room is a third floor room
//   var ff = document.getElementById('third-listings');
//   ff.appendChild(newp);
//   ff.appendChild(newb);
//   button();
//   }
  
// };
