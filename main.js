function addUser(){
  userid = document.getElementById("username").value;
  localStorage.setItem("userid",  userid);
  window.location = "Kwitter_room.html";
}