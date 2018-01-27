// YOUR CODE HERE:
// test upstream

// url http://parse.sfm8.hackreactor.com/chatterbox/classes/messages

// let object = {
//   userName: 
//   text:
//   roomfdname:

// }

let message = {username: 'derp',
              text: 'hi',
              roomname: 'lobby'
  }

let app = {
  someMessage: undefined,
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  room: {},
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
        app.someMessage.results.forEach((msg) => app.helperToFillRoomPropertyMethod(msg));
        console.log('all messages fetched and roomProperty filled');
        // add listener on selector object
        $('#roomSelect').on('change', () => {
          app.clearMessages();
          console.log('Room name re-selected');
          let roomName = $('#roomSelect')[0].value;    
          app.room[roomName].forEach((msg) => app.renderMessage(msg));
          console.log('All messages in current room rendered');
        });
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


    // if (isRoomThere === 0) {
    //   app.renderRoom(roomname);
    // }
    $('.postcardDiv').append('<div class="text">' + text + '</div>');
    
    // console.log($('#roomSelect').children($('#' + roomName ])));

    return text;
  },
  renderRoom: (roomName) => {
    if (roomName === 'Lobby') {
      $('#roomSelect').append('<option id="' + roomName +'" selected>' + roomName + '</option>');
    } else {
      $('#roomSelect').append('<option id="' + roomName +'">' + roomName + '</option>');
    }
  },
  handleUsernameClick: () => {
    console.log('clicked!');
  },

// starting point on day 2

  helperToFillRoomPropertyMethod: (message) => {
    let message_roomName = message.roomname;
    if (app.room[message_roomName]) {
      app.room[message_roomName].push(message);
    } else {
      app.room[message_roomName] = [];
      app.room[message_roomName].push(message);
    }

    let roomname = message['roomname'];
    // add rooms to roomSelect
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