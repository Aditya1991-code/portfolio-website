console.log("Hi welcome to Adi Akkapeddi's profile")
function menuToggle() {
    var x = document.getElementById('adinavtoggle');
    if (x.className === 'adinav') {
      x.className += ' responsive';
    } else {
      x.className = 'adinav';
    }
  }
  
  let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
