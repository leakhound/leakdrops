fetch('messages.json')
    .then(response => response.json())
    .then(data => {
        const messagesContainer = document.getElementById('messages-container');
        data.forEach((message, index) => {
            const modifiedContent = message.content.replace(/<@1231666839466283051>/g, 'leakhound');
            
            const messageBox = document.createElement('div');
            messageBox.classList.add('message');
            messageBox.innerHTML = `
                <p><strong>Author:</strong> ${message.author}</p>
                <p><strong>Content:</strong> ${modifiedContent}</p>
            `;
            messagesContainer.appendChild(messageBox);

            // Add animation delay for each message box
            messageBox.style.animationDelay = `${index * 0.1}s`;
        });
    })
    .catch(error => console.error('Error fetching messages:', error));
