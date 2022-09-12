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


Array.prototype.forEach.call(spans, span => {
  span.addEventListener('click', (e) => {
    span.classList.add('transformSpan')
    span.previousSibling.previousSibling.focus()
  })
})

html.addEventListener("click", (e) => {
  Array.prototype.forEach.call(spans, span => {
    if (e.target != span) {
      span.classList.remove("transformSpan");
    }
  })
  
});





