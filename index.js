function playSound(letter){

    // sound
    const audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();

    // glow
    const button = document.querySelector(`[data-key="${letter}"]`);

    if(button){
        button.classList.add("active");

        setTimeout(()=>{
            button.classList.remove("active");
        }, 200);
    }
}

// CLICK SUPPORT (FIXES YOUR MAIN BUG)
document.addEventListener("click", (e) => {

    const btn = e.target.closest(".key");

    if(!btn) return;

    const key = btn.dataset.key;

    playSound(key);
});

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {

    const key = e.key.toLowerCase();

    if(key >= "a" && key <= "z"){
        playSound(key);
    }

});