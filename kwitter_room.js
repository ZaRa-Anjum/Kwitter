
var firebaseConfig = {
  apiKey: "AIzaSyBtFtsBPNro-9g-8-W-B9Gv8n-MLEc3wGk",
  authDomain: "kwitter-f92c8.firebaseapp.com",
  databaseURL: "https://kwitter-f92c8-default-rtdb.firebaseio.com",
  projectId: "kwitter-f92c8",
  storageBucket: "kwitter-f92c8.appspot.com",
  messagingSenderId: "562359439328",
  appId: "1:562359439328:web:44b29e16556e40c3d42585"
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

function getData()
 {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
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

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}


