function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

function EventClass (title,date,time,venue){
  this.title = title;
  this.date = date;
  this.time = time;
  this.venue = venue;
}

var currentEvents = [];

function createAnEvent(){
  var eventTitle = document.getElementById('event').value;
  var eventDate = document.getElementById('date').value;
  var eventTime = document.getElementById('time').value;
  var eventVenue = document.getElementById('venue').value;

  var myEvent = new Event (eventTitle,eventDate,eventTime,eventVenue);
  currentEvents.push(myEvent);
  displayAvailableEvents();

}

var eventCreatebtn = document.getElementById('eventCreator');
eventCreatebtn.onclick = createAnEvent();

function displayAvailableEvents(){

  var html = "";
  for(var counter = 0; counter < currentEvents.length; counter++){
  html += "<div class="row">
<div class ='col-md-3'><p>" + currentEvents[counter].eventTitle + "</p></div>
<div class ='col-md-3'><p>" + currentEvents[counter].eventDate + "</p></div>
<div class ='col-md-3'><p>" + currentEvents[counter].eventTime + "</p></div>
<div class ='col-md-3'><p>" + currentEvents[counter].eventValue + "</p></div>
</div> "
var insertPoint = document.getElementById('inserthere');
insertPoint.append(html);
}
}


