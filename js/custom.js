// CUSTOM JS

// runs filterSelection function to display all initially when page loads
filterSelection("all")

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// filter projects by add/removing show class
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("proj");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// add class to an element
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// remove class from an element
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var categories = document.getElementById("categories");
var btns = categories.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// display image/description of selected icon
var icons = document.querySelectorAll('.icon')
var highlight_img = document.getElementById('proj-image')
var highlight_desc = document.getElementById('proj-desc')
for (let icon of icons) {
  icon.addEventListener("click", function() {
    var proj = icon.closest(".proj");
    switch(proj.id) {
      case "icon-samazon":
        highlight_img.innerHTML = `<a target="_blank" href="images/samazon.jpg"><img src="images/samazon.jpg" alt="Samazon Website"></a>`
        highlight_desc.innerHTML = `
          <h4>Samazon</h4>
          <p>Client-server application which stores and displays products. Users view products
          and are able to create account or login to already existing account. Application is
          created using frameworks including Spring, JPA, and Thymeleaf to dynamically change
          what is displayed depending on currently loggedin user’s information. This project is
          currently hosted on
          <a target="_blank" href="https://warm-fjord-29917.herokuapp.com/">Heroku</a>.</p>`
        break;
      case "icon-dotty":
        highlight_img.innerHTML = `<a target="_blank" href="images/dotty.png"><img src="images/dotty.png" alt="Dotty Android App"></a>`
        highlight_desc.innerHTML = `
          <h4>Dotty</h4>
          <p>An Android application that allows users to play a connect the dots game. Users connect
          similar color dots to score points, aiming to get the highest score in a set move limit.</p>`
        break;
      case "icon-caveRider":
        highlight_img.innerHTML = `<a target="_blank" href="images/caveRider.jpg"><img src="images/caveRider.jpg" alt="Cave Rider Game"></a>`
        highlight_desc.innerHTML = `
          <h4>Cave Rider</h4>
          <p>An endless runner game created in Unity. Players must navigate through a procedurally
          generated cave and dodge hazards to increase their score. The game is playable on
          <a target="_blank" href="https://jlefler.itch.io/mine-ship">itch.io</a>.</p>`
        break;
      case "icon-ripple":
        highlight_img.innerHTML = `<a target="_blank" href="images/ripple.jpg"><img src="images/ripple.jpg" alt="Ripple Website"></a>`
        highlight_desc.innerHTML = `
          <h4>Ripple</h4>
          <p>Client-server application which displays a feed of messages created by users.
          Some features include; creating and posting messages, reading other users’ messages,
          and following other users. Application frameworks including Spring,
          JPA, and Thymeleaf. This project is currently hosted on
          <a target="_blank" href="https://warm-reaches-29739.herokuapp.com/">Heroku</a>.</p>`
        break;
      case "icon-tic":
        highlight_img.innerHTML = `<a target="_blank" href="images/tic.png"><img src="images/tic.png" alt="Tic Tac Toe Android App"></a>`
        highlight_desc.innerHTML = `
          <h4>Tic Tac Toe</h4>
          <p>An Android application that allows users to play Tic Tac Toe. The app is capable of
          one player or two player games.</p>`
        break;
      case "icon-shush":
        highlight_img.innerHTML = `<a target="_blank" href="images/shush.png"><img src="images/shush.png" alt="Shush Android App"></a>`
        highlight_desc.innerHTML = `
          <h4>Shush</h4>
          <p>SHUSH is an Android application that leverages geofences to alter a phone’s volume
          setting. Users are able to specify the geofence’s name, location, radius, volume setting.
          If the user enters or exits one of their geofences, the app will change their phone’s
          volume to its specified setting.</p>`
        break;
      case "icon-zork":
        highlight_img.innerHTML = `<a target="_blank" href="images/zork.jpg"><img src="images/zork.jpg" alt="Zork Game"></a>`
        highlight_desc.innerHTML = `
          <h4>Zork</h4>
          <p>A 3D point and click adventure game based on the classic game Zork. Players navigate
          through an abandoned mansion solving puzzles and finding treasure. This game is currently
          in development and should be released in Fall 2020.</p>`
        break;
      default:
        highlight_img.innerHTML = `<a target="_blank" href="images/samazon.jpg"><img src="images/samazon.jpg" alt="Samazon Website"></a>`
        highlight_desc.innerHTML = `
          <h4>Samazon</h4>
          <p>Client-server application which stores and displays products. Users view products
          and are able to create account or login to already existing account. Application is
          created using frameworks including Spring, JPA, and Thymeleaf to dynamically change
          what is displayed depending on currently loggedin user’s information. This project is
          currently hosted on
          <a target="_blank" href="https://warm-fjord-29917.herokuapp.com/">Heroku</a>.</p>`
        break;
    }
  });
}
