let play = document.querySelector('#termsAndCo');
let checkBox = document.querySelector('#squaredOne');
let validate = document.querySelector("#usereventcode");

var validationcode = systemeventcode

checkBox.addEventListener('click', () => {
    if (checkBox.checked == true && validate.value == validationcode) {
        play.classList.remove('disabled');
    }
    if (checkBox.checked == false) {
        play.classList.add('disabled');
    }
})

play.addEventListener('click', () => {
    if (!play.classList.contains('disabled')) {
        window.open('/chat', '_self');
    }
})