<!DOCTYPE html>
<html>
<head>
    <title>Chat</title>
    <style>
        #chatbox {
            width: 300px;
            height: 300px;
            border: 1px solid #ccc;
            overflow-y: scroll;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div id="chatbox"></div>
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="message" placeholder="Message">
    <button onclick="sendMessage()">Send</button>

    <script>
        function sendMessage() {
            var name = document.getElementById("name").value;
            var message = document.getElementById("message").value;

            if (name && message) {
                var chatbox = document.getElementById("chatbox");
                chatbox.innerHTML += "<p><strong>" + name + ":</strong> " + message + "</p>";

                // Send the message to the server here (using AJAX, WebSocket, or any other method)

                document.getElementById("message").value = "";
            }
        }
    </script>
</body>
</html>

