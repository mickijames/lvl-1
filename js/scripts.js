// Scripts
//console.log('hello');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function playSoundOnClick(e) {
    
    let audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
    let key = document.querySelector(`div[data-key="${e.target.getAttribute('data-key')}"]`);
    
    if (e.target.parentElement.className != 'keys') {
//        console.log(e.target.parentElement);
//        console.log(e.target.parentElement.getAttribute('data-key'));
        audio = document.querySelector(`audio[data-key="${e.target.parentElement.getAttribute('data-key')}"]`);
        key = document.querySelector(`div[data-key="${e.target.parentElement.getAttribute('data-key')}"]`);
    }
    
//    console.log(e.target.getAttribute('data-key'));
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('click', playSoundOnClick);