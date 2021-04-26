 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDjrZyr6czJbAxINwyxMKPKPyBbLSMXIcg",
      authDomain: "kwitter-45a6a.firebaseapp.com",
      databaseURL: "https://kwitter-45a6a-default-rtdb.firebaseio.com",
      projectId: "kwitter-45a6a",
      storageBucket: "kwitter-45a6a.appspot.com",
      messagingSenderId: "746946966037",
      appId: "1:746946966037:web:a10a47bd94b9557c16541c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : " Adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
