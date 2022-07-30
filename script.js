let score = 0;
cross = true;

window.addEventListener('keydown', (element) => {
    if (element.key == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 1000);
    }

    if (element.key == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 100 + "px";
    }

    if (element.key == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinoX =  parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 50 + "px";
    }
})


setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    // our character is continuosly moving because of Animation, therefore this function returns us the value 
    // from the left at any instant
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 83 && offsetY < 60) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('AniObstacle');
        alert('Your score : ' + score);
    }
    else if(offsetX<100 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // we want to increase the speed of the game with increase in score and for that we increase the 
        // animation duration

       setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
       }, 500);
    }
}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score : " + score
}