// // // Simulating loading messages from the server
// // let messages = [
// //     { id: 1, text: "Orientation is given by God. You change the world", likes: 10, dislikes: 2, comments: [] },
// //     { id: 2, text: "Message 2", likes: 5, dislikes: 1, comments: [] },
// //     { id: 3, text: "Message 3", likes: 8, dislikes: 0, comments: [] }
// //   ];
  
// //   function loadMessages() {
// //     const messagesContainer = document.querySelector('.messages');
// //     messagesContainer.innerHTML = '';
  
// //     messages.forEach(message => {
// //       const messageElement = document.createElement('div');
// //       messageElement.classList.add('message');
// //       messageElement.innerHTML = `
// //         <p>${message.text}</p>
// //         <div class="actions">
// //           <button class="like-button">Like (${message.likes})</button>
// //           <button class="dislike-button">Dislike (${message.dislikes})</button>
// //           <button class="comment-button">Comment</button>
// //         </div>
// //       `;
  
// //       messagesContainer.appendChild(messageElement);
// //     });
// //   }
  
// //   // Event listener for sending a message
// //   document.getElementById('send-button').addEventListener('click', function() {
// //     const messageInput = document.getElementById('message-input');
// //     const messageText = messageInput.value.trim();
  
// //     if (messageText !== '') {
// //       // Add the new message to the messages array
// //       const newMessage = {
// //         id: messages.length + 1,
// //         text: messageText,
// //         likes: 0,
// //         dislikes: 0,
// //         comments: []
// //       };
// //       messages.unshift(newMessage);
  
// //       // Clear the input field
// //       messageInput.value = '';
  
// //       // Reload messages after sending
// //       loadMessages();
// //     }
// //   });
  
// //   // Initial load of messages
// //   loadMessages();


// // Simulating loading messages from the server
// let messages = [
//     { id: 1, text: "Orientation is given by God. You change the world", likes: 10, dislikes: 2, comments: [] },
//     { id: 2, text: "Message 2", likes: 5, dislikes: 1, comments: [] },
//     { id: 3, text: "Message 3", likes: 8, dislikes: 0, comments: [] }
//   ];
  
//   function loadMessages() {
//     const messagesContainer = document.querySelector('.messages');
//     messagesContainer.innerHTML = '';
  
//     messages.forEach(message => {
//       const messageElement = document.createElement('div');
//       messageElement.classList.add('message');
//       messageElement.dataset.id = message.id; // Add the dataset.id attribute
//       messageElement.innerHTML = `
//         <p>${message.text}</p>
//         <div class="actions">
//           <button class="like-button">Like (${message.likes})</button>
//           <button class="dislike-button">Dislike (${message.dislikes})</button>
//           <button class="comment-button">Comment</button>
//         </div>
//       `;
  
//       messagesContainer.appendChild(messageElement);
//     });
//   }
  
//   // Event listener for liking a message
//   document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('like-button')) {
//       const messageId = parseInt(event.target.parentNode.parentNode.dataset.id);
//       const messageIndex = messages.findIndex(message => message.id === messageId);
  
//       if (messageIndex !== -1) { // Check if the message exists
//         const message = messages[messageIndex];
  
//         if (!message.liked) {
//           message.likes++;
//           message.liked = true;
//         } else {
//           message.likes--;
//           message.liked = false;
//         }
  
//         loadMessages();
//       }
//     }
//   });
  
//   // Event listener for disliking a message
//   document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('dislike-button')) {
//       const messageId = parseInt(event.target.parentNode.parentNode.dataset.id);
//       const messageIndex = messages.findIndex(message => message.id === messageId);
  
//       if (messageIndex !== -1) { // Check if the message exists
//         const message = messages[messageIndex];
  
//         if (!message.disliked) {
//           message.dislikes++;
//           message.disliked = true;
//         } else {
//           message.dislikes--;
//           message.disliked = false;
//         }
  
//         loadMessages();
//       }
//     }
//   });
  
//     // Event listener for sending a message
//     document.getElementById('send-button').addEventListener('click', function() {
//         const messageInput = document.getElementById('message-input');
//         const messageText = messageInput.value.trim();
      
//         if (messageText !== '') {
//           // Add the new message to the messages array
//           const newMessage = {
//             id: messages.length + 1,
//             text: messageText,
//             likes: 0,
//             dislikes: 0,
//             comments: []
//           };
//           messages.unshift(newMessage);
      
//           // Clear the input field
//           messageInput.value = '';
      
//           // Reload messages after sending
//           loadMessages();
//         }
//       });

//   // Initial load of messages
//   loadMessages();

// Simulating loading messages from the server
let messages = [
    { id: 1, text: "Orientation is given by God. You change the world", likes: 10, dislikes: 2, comments: [] },
    { id: 2, text: "Message 2", likes: 5, dislikes: 1, comments: [] },
    { id: 3, text: "Message 3", likes: 8, dislikes: 0, comments: [] }
  ];
  
  function loadMessages() {
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.innerHTML = '';
  
    // Sort the messages array by likes in descending order
    messages.sort((a, b) => b.likes - a.likes);
  
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.dataset.id = message.id; // Add the dataset.id attribute
      messageElement.innerHTML = `
        <p>${message.text}</p>
        <div class="actions">
          <button class="like-button">Like (${message.likes})</button>
          <button class="dislike-button">Dislike (${message.dislikes})</button>
          <button class="comment-button">Comment</button>
        </div>
      `;
  
      messagesContainer.appendChild(messageElement);
    });
  }
  
  // Event listener for liking a message
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
      const messageId = parseInt(event.target.parentNode.parentNode.dataset.id);
      const messageIndex = messages.findIndex(message => message.id === messageId);
  
      if (messageIndex !== -1) { // Check if the message exists
        const message = messages[messageIndex];
  
        if (!message.liked) {
          message.likes++;
          message.liked = true;
        } else {
          message.likes--;
          message.liked = false;
        }
  
        // Resort the messages array after updating the likes
        messages.sort((a, b) => b.likes - a.likes);
  
        loadMessages();
      }
    }
  });
  
  // Event listener for disliking a message
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dislike-button')) {
      const messageId = parseInt(event.target.parentNode.parentNode.dataset.id);
      const messageIndex = messages.findIndex(message => message.id === messageId);
  
      if (messageIndex !== -1) { // Check if the message exists
        const message = messages[messageIndex];
  
        if (!message.disliked) {
          message.dislikes++;
          message.disliked = true;
        } else {
          message.dislikes--;
          message.disliked = false;
        }
  
        // Resort the messages array after updating the dislikes
        messages.sort((a, b) => b.likes - a.likes);
  
        loadMessages();
      }
    }
  });
  
  // Event listener for sending a message
  document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
  
    if (messageText !== '') {
      // Add the new message to the messages array
      const newMessage = {
        id: messages.length + 1,
        text: messageText,
        likes: 0,
        dislikes: 0,
        comments: []
      };
      messages.unshift(newMessage);
  
      // Resort the messages array after adding the new message
      messages.sort((a, b) => b.likes - a.likes);
  
      // Clear the input field
      messageInput.value = '';
  
      // Reload messages after sending
      loadMessages();
    }
  });
  
  // Event listener for sending a message
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const messageInput = document.getElementById('message-input');
      const messageText = messageInput.value.trim();
  
      if (messageText !== '') {
        // Add the new message to the messages array
        const newMessage = {
          id: messages.length + 1,
          text: messageText,
          likes: 0,
          dislikes: 0,
          comments: []
        };
        messages.unshift(newMessage);
  
        // Clear the input field
        messageInput.value = '';
  
        // Reload messages after sending
        loadMessages();
      }
    }
  });
  // Initial load of messages
  loadMessages();