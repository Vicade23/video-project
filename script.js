const button = document.getElementById('btn');
const switcher = document.getElementById('switcher');
const video = document.getElementById('video');
button.addEventListener('click', ()=>{
    if (switcher.classList.contains('pause')) {
        switcher.classList.remove('pause');
        video.play()
    }
    else {
        video.pause()
        switcher.classList.add('pause');
    }
})