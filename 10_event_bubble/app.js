// event bubbling
document.querySelector('.card-title')
    .addEventListener('click', onClick('card title'));

document.querySelector('.card-content')
    .addEventListener('click', onClick('card content'));

document.querySelector('.card')
    .addEventListener('click', onClick('card'));

document.querySelector('.container')
    .addEventListener('click', onClick('container'));

function onClick(clickedElement) {
    return function () {
        // console.log(`event in: ${clickedElement}`);
    }
}

// event delegation
// document.querySelector('.delete-item')
//     .addEventListener('click', deleteItem);
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}