//Fill with classes for rooms
//Rooms: 020, 120, 214, 216, 220, 222, 224, 226, 230, 301, 302, 306, 308, 310, 312, 314

//Room constructor function
var Room = function(number, floor, capacity) {
  //Fields of Room class
  this.number = number;           //room number
  this.floor = floor;             //room floor
  this.capacity = capacity;       //room capacity
  this.open = "Open";             //room availability, set to true (open) for all rooms until booked
  this.duration_start = "-";      //duration until room becomes available
  this.breakTime = 0;             //duration until break time ends for student in booked room
  this.duartion_end = "-";
}

//"Create" function to create a reservation, set open = "Closed", set duration <= 5 hours (cap on room time)
function createRes(length, roomNum) {
for(var i = 0; i < rooms.length; i++) {
  if(rooms[i].number == roomNum) {
    rooms[i].duration = length;
    rooms[i].open = "Closed";
  }
}
}
//"Cancel" function to cancel a reservation, set open = "Open", reset duration = 0
function cancelRes(roomNum) {
for(var i = 0; i < rooms.length; i++) {
  if(rooms[i].number == roomNum) {
    rooms[i].duration = 0;
    rooms[i].open = "Open";
  }
}
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


function loadRooms() {
  for(var i = 0; i < rooms.length; i++) {
    var info = document.getElementsByClassName('a_room');
    info[i].innerHTML = "Room: " + rooms[i].number + " &emsp;Floor: " + rooms[i].floor + " &emsp;Capacity: " + rooms[i].capacity 
        + " &emsp;Availability: " + rooms[i].open + " &emsp;Reservation Starts: " + rooms[i].duration_start 
        + " &emsp;Reservation Ends: " + rooms[i].duartion_end  + " &emsp;Break time remaining: " +rooms[i].breakTime 
        + "mins" + "&emsp;";
  }
}

loadRooms();


function book_function() {
  var rn = prompt("Which room would you like to book?");
  var tdirs = prompt("Enter reservation start time:");
  var tdire = prompt("Enter reservation end time:");
  for (var i = 0; i < rooms.length; i++) {
    if(rn == rooms[i].number){
      rooms[i].open = "Closed";
      rooms[i].duration_start = tdirs;
      rooms[i].duartion_end = tdire;
    }
    loadRooms();
  }
}

function break_function() {
  var rn = prompt("Which room would you like to add break time for?");
  var tbr = prompt("How long is the break time?");
  for (var i = 0; i < rooms.length; i++) {
    if(rn == rooms[i].number){
      rooms[i].breakTime = tbr;
    }
    loadRooms();
  }
}

function cancel_function() {
  var rn = prompt("Which room would you like to cancel reservation?");
  for (var i = 0; i < rooms.length; i++) {
    if(rn == rooms[i].number){
      rooms[i].duration_start = "-";
      rooms[i].duration_end = "-";
      rooms[i].open = "Open";
      rooms[i].breakTime = 0;
    }
    loadRooms();
  }
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
