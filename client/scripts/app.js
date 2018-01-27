// YOUR CODE HERE:
// test upstream

// url http://parse.sfm8.hackreactor.com/chatterbox/classes/messages

// let object = {
//   userName: 
//   text:
//   roomname:


  
// }



let app = {
  someMessage: undefined,
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  init: () => {
    app.fetch();
  },
  send: (message) => {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: url,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: () => {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server,  // ?? why would this be undefined
      type: 'GET',
      // data: message,
      contentType: 'application/json',
      success: function (data) { //success is the callback inside the async fetch()
        app.someMessage = data;
        app.someMessage.results.forEach((msg) => app.renderMessage(msg));
        console.log('chatterbox: Message received');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message', data);
      }
    });
  },
  clearMessages: () => {
    $('#chats').empty();
  },
  renderMessage: (message) => {
    // temp div
    let tempDiv = '<div class="postcardDiv"></div>';
    // add name div and message div to the temp div
    $('#chats').append(tempDiv);

    let userName = message['username'];
    let usernameDiv = '<div class="username">' + userName + '</div>';
    $('.postcardDiv').append(usernameDiv);
    $( ".username" ).click(function() {
      app.handleUsernameClick();
    }); 
    let text = message['text'];
    let roomname = message['roomname'];


    // debugger;
    let currentRooms = $('#roomSelect').children();
    var matchedRoom = false;
    // if (roomname === 'lobby') {debugger}
    // currentRooms.each((room) => {
    for (var x = 0; x < currentRooms.length; x++) {
      if (currentRooms[x].value === roomname || roomname === undefined) {
        matchedRoom = true;
      }

    }
    if (!matchedRoom) {
      app.renderRoom(roomname);
    }    

    // if (isRoomThere === 0) {
    //   app.renderRoom(roomname);
    // }
    $('.postcardDiv').append('<div class="text">' + text + '</div>');
    
    // console.log($('#roomSelect').children($('#' + roomName ])));

    return text;
  },
  renderRoom: (roomName) => {
    $('#roomSelect').append('<option id="' + roomName +'">' + roomName + '</option>');
  },
  handleUsernameClick: () => {
    console.log('clicked!');
  }
};
let username = window.location.search.slice(10);
let messageText = $('input').val();

// let message = {
//   username: username,
//   messageText: messageText
    //roomName; roomName;
// };

// TODO -might give an error in the future
console.log($('input').val());
//

console.log(username);
const url = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';

// GET the messages from URL @ line 4
// create the node from the messages
// append the txt node onto DOM

// separate functions as the callback when use ONCLICK 'submit' button

// ajax exampe
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });