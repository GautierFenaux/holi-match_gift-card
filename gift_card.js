// let hoveredDivs = document.getElementsByClassName('gift_card')
// let hoveredDivSize = hoveredDivs[0].offsetHeight.toString() + 'px'



//   hoveredDivs[0].addEventListener('mouseover', (e) => {
//     hoveredDivs[1].style.height = hoveredDivSize
//     hoveredDivs[0].style.height = '100%'
//   })
//   hoveredDivs[0].addEventListener('mouseleave', (e) => {
//     hoveredDivs[0].style.height = hoveredDivs[1].offsetHeight.toString() + 'px'
//   })

//   hoveredDivs[1].addEventListener('mouseover', (e) => {
//     hoveredDivs[1].style.height = '100%'
//     hoveredDivs[0].style.height = hoveredDivSize
//   })
//   hoveredDivs[1].addEventListener('mouseleave', (e) => {
//     hoveredDivs[1].style.height = hoveredDivs[0].offsetHeight.toString() + 'px'
//   })







const steps = document.querySelectorAll('.functioning-steps');

steps.forEach(step => {
    

    var getCumulativeOffset = function (step) {
        var curLeft, curTop;
        curLeft = curTop = 0;
        if (step.offsetParent) {
            do {
                curLeft += step.offsetLeft;
                curTop  += step.offsetTop;
            } while (step = step.offsetParent);
        return {
            x : curLeft,
            y : curTop
        };
        }
    };

    let stepAbsolutePosition = getCumulativeOffset(step)
    const stepRelativePosition = Math.round(step.getBoundingClientRect().top + window.scrollY)
    console.log(stepRelativePosition)

    window.addEventListener('scroll', () => {
        if (window.scrollY >= stepRelativePosition) {
            step.style.animationName = 'animation-functioning'
        }
                
        // console.log(stepRelativePosition)
        // if (window.scrollY >= stepAbsolutePosition.y -400) {
        //     // step.style.visibility = 'visible';
        //     // step.addAttribute('visibility')
        //     // step.style.visibility = 'hidden'
        //     step.style.animationName = 'animation-functioning'
        //     // step.style.visibility = 'visible'
        // }
    })
});




// let elementsArray = document.querySelectorAll('.functioning-steps');
// console.log(elementsArray);
// window.addEventListener('scroll', fadeIn ); 
// function fadeIn() {
//     for (var i = 0; i < elementsArray.length; i++) {
//         var elem = elementsArray[i]
//         var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
//         if (distInView < 0) {
//             elem.classList.add("inView");
//         } else {
//             elem.classList.remove("inView");
//         }
//     }
// }
// fadeIn();




// let stepsPosition = steps.getBoundingClientRect().top + steps.scrollTop







