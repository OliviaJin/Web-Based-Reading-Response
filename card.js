let paintImageShow = document.getElementById('Pic');


let quickList = ['Photo1', 'Photo2', 'photo3'];
let paintImages = ['1.png', '2.png', '3.png'];


var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');

    });
});

var quickCard = document.getElementById("quickCard");
quickCard.addEventListener('click', function () {

    let r = Math.floor(Math.random() * quickList.length);
    quickCard.innerText = quickList[r];
    paintImageShow.src = paintImages[r];
});