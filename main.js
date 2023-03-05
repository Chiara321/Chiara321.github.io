let sound = new Audio('recursos/musica.mp3');

playBtn.addEventListener('click', ()=>{
    sound.play();
});

pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});