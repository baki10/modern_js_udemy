
const clearBtn = document.querySelector('#clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('#task-title');

// click
clearBtn.addEventListener('click', runEvent);
// dblclick
clearBtn.addEventListener('dblclick', runEvent);
// mousedown
clearBtn.addEventListener('mousedown', runEvent);
// mouseup
clearBtn.addEventListener('mouseup', runEvent);
// mouseenter
card.addEventListener('mouseenter', runEvent);
// mouseleave
card.addEventListener('mouseleave', runEvent);
// mouseover
card.addEventListener('mouseover', runEvent);
// mouseout
card.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', changeHeading);


// Event handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);    
}

function changeHeading(e) {
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 10 0)`;
}