// YOUR CODE HERE:
// test upstream

// url http://parse.sfm8.hackreactor.com/chatterbox/classes/messages

// let object = {
//   userName: 
//   text:
//   roomname:


  
// }



let app = {
  init: () => {},
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
      url: undefined,  // ?? why would this be undefined
      type: 'GET',
      data: message,
      contentType: 'application/json',
      success: function (data) {
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
    $('#chats').append('<p> ${JSON.stringify(message)}</p>');
  },
  renderRoom: (roomName) => {
    $('#roomSelect').append('<option>${roomName}</option>');
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