document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

$(document).ready(function(){

  $('.parallax').parallax();

});




//Shay's original code showing proof of concept
// var rootElement =

// React.createElement('div', {},
// React.createElement('h2', {}, "Get your family on the same page once and for all!"),
// React.createElement('p', {},"The Ultimate Calendar is an easy-to-use app to keep you and your family organized.",
//     React.createElement('li', {}, "Keep track of chores and errands "),
//     React.createElement('li', {}, "Update your grocery list in real time"),
//     React.createElement('li', {}, "Stay up to date on your family's changing schedule"),
//     React.createElement('li', {}, "Use on any mobile device")
// ),
// )

// ReactDOM.render(rootElement, document.getElementById('homeDiv'));