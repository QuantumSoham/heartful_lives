const messages = [
    {
        text: "This is message 1.",
        id: 1,
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        text: "This is message 2.",
        id: 2,
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        text: "This is message 3.",
        id: 3,
        likes: 0,
        dislikes: 0,
        comments: []
    }
];

const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message");
const postButton = document.getElementById("post");
const deleteButton = document.getElementById("delete");

messages.forEach(message => {
    const messageBox = createMessageBox(message);
    messagesContainer.appendChild(messageBox);
});

postButton.addEventListener("click", () => {
    if (messageInput.value.trim()) {
        const newMessage = {
            text: messageInput.value,
            id: Date.now(),
            likes: 0,
            dislikes: 0,
            comments: []
        };
        messages.push(newMessage);
        messageInput.value = "";
        const messageBox = createMessageBox(newMessage);
        messagesContainer.appendChild(messageBox);
        messageBox.style.transform = "translateY(-100%)";
        messageBox.addEventListener("transitionend", () => {
            messageBox.style.transform = "translateY(0)";
        });
    }
});

function createMessageBox(message) {
    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    messageBox.setAttribute("data-id", message.id);

    const messageText = document.createElement("p");
    messageText.textContent = message.text;
    messageBox.appendChild(messageText);

    const messageActions = document.createElement("div");
    messageActions.classList.add("message-actions");
    messageBox.appendChild(messageActions);

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.addEventListener("click", () => {
        message.likes++;
        renderMessage(message);
    });
    messageActions.appendChild(likeButton);

    const dislikeButton = document.createElement("button");
    dislikeButton.textContent = "Dislike";
    dislikeButton.addEventListener("click", () => {
        message.dislikes++;
        renderMessage(message);
    });
    messageActions.appendChild(dislikeButton);

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.addEventListener("click", () => {
        const comment = prompt("Enter your comment:");
        if (comment) {
            message.comments.push(comment);
            renderMessage(message);
        }
    });
    messageActions.appendChild(commentButton);

    return messageBox;
}
