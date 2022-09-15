let spans = document.getElementsByTagName('span')
let inputs = document.getElementsByClassName('input-form')
const html = document.querySelector("html");




var options = {
  root: null,
  rootMargin: '0px',
  threshold:  1
}

var observer = new IntersectionObserver(handleIntersect, options);

let steps = document.getElementsByClassName('functioning-steps')
let stepOne = document.querySelector('.wrapper-step-one')

function handleIntersect(entries, observer) {
  entries.forEach((entry, i) => {
    
    if(!entry.isIntersecting) {
      return;
    }

    if (entries[i].target.id % 2 == 0) {
      entries[i].target.style.animationName = 'animation-functioning-right'
    } 
    else {
      entries[i].target.style.animationName = 'animation-functioning-left'
    }
  });
}

Array.prototype.forEach.call(steps, step => {
  observer.observe(step);
});


const inputDate = document.getElementById('date')
const webKits = ['input[type=date]::-webkit-datetime-edit', 
'input[type=date]::-webkit-datetime-edit-fields-wrapper',
'input[type=date]::-webkit-datetime-edit-text',
'input[type=date]::-webkit-datetime-edit-month-field',
'input[type=date]::-webkit-datetime-edit-day-field',
'input[type=date]::-webkit-datetime-edit-year-field',
'input[type=date]::-webkit-inner-spin-button',
'input[type=date]::-webkit-calendar-picker-indicator'
]



inputDate.addEventListener('focus', (e) => {
  console.log(inputDate.style.webkitDatetimeEdit)
  inputDate.style.webkitDatetimeEdit = "display: inline-block";
  inputDate.style.webkitDatetimeEditFieldsWrapper = "display: inline-block";






  // webKits.forEach((webKit) => {
  //   console.log(inputDate.style.webKit)
  //   inputDate.style.webKit = 'display: inline-block'
  // })
})










// Array.prototype.forEach.call(inputs, (input) => {
//   input.addEventListener('focusin', (e) => {
//     console.log(e.target)
//     if(e.target.value != '') {
//       console.log('has-content')
//       input.classList.add('has-content')
//     } else {
//       input.classList.remove('has-content')
//       console.log('no-content')

//     }
//   })

// })

// Array.prototype.forEach.call(spans, span => {
//   span.addEventListener('click', () => {
//     span.classList.add('transformSpan')
//     span.previousSibling.previousSibling.focus()

//   })
// })

// html.addEventListener("click", (e) => {
//   Array.prototype.forEach.call(spans, span => {
//     if (e.target != span) {
//       span.classList.remove("transformSpan");
//     }
//   })
  
// });



// // JavaScript for label effects only
// $(window).load(function(){
//   $(".col-3 input").val("");
  
//   $(".input-effect input").focusout(function(){
//       if($(this).val() != ""){
//           $(this).addClass("has-content");
//       }else{
//           $(this).removeClass("has-content");
//       }
//   })
// });





