<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>

  
  var config = {
    apiKey: "AIzaSyDtmzzG3jvXdm1C4lo8HdTV4qJV9ZOgUrc",
    authDomain: "rps-multiplayer-ce9df.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-ce9df.firebaseio.com",
    projectId: "rps-multiplayer-ce9df",
    storageBucket: "",
    messagingSenderId: "501012595309"
  };
  


    firebase.initializeApp(config);
        
    var dataRef = firebase.database();

    var queryURL = "" + text;
    $.ajax({
    url: queryURL,
    method: "GET"
    });

