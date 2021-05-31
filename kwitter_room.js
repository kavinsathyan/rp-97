// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVy4dyP5BwL23edtV2g8CnZsTxvD-NudA",
    authDomain: "we-can-chat-in-here.firebaseapp.com",
    databaseURL: "https://we-can-chat-in-here-default-rtdb.firebaseio.com",
    projectId: "we-can-chat-in-here",
    storageBucket: "we-can-chat-in-here.appspot.com",
    messagingSenderId: "458569784854",
    appId: "1:458569784854:web:8cafd98e2489811a2d5f37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - "  + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row 
   });
});


}

getData();


function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
