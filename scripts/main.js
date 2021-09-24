var StarsCoords = '';
var BiggerStarsCoords = '';
var music = new Audio('media/mus.mp3');

function Start() {
    for (let index = 0; index < 700; index++) {
        StarsCoords += (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px ' + (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px #FFF';
        BiggerStarsCoords += (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px ' + (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px #FFF';
        if (index != 699) {
            StarsCoords += ', ';
            BiggerStarsCoords += ', ';
        }
    }
    document.getElementById('stars').style.boxShadow = StarsCoords;
    document.getElementById('stars2').style.boxShadow = StarsCoords;
    document.getElementById('stars3').style.boxShadow = BiggerStarsCoords;
    document.getElementById('stars4').style.boxShadow = BiggerStarsCoords;
    music.loop = true;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Begin() {
    document.getElementById('start').style.opacity = '0';
    await sleep(1000);
    document.getElementById('start').remove();
    document.getElementById('main').style.opacity = '1';
    music.play();
    await sleep(4000);
    document.getElementById('msg').style.opacity = '1';
    await sleep(300);
    document.getElementById('msg').style.opacity = '0';
    await sleep(300);
    document.getElementById('msg').style.opacity = '1';
    await sleep(300);
    document.getElementById('msg').style.opacity = '0';
    await sleep(300);
    document.getElementById('msg').style.opacity = '1';
    await sleep(100);
    new Audio('media/hologram.mp3').play();
    document.getElementById('msgbox').style.transform = 'scale(55, 105)';
    await sleep(500);
    document.getElementById('messageA').textContent = "С днём рождения, Папа!";
    document.getElementById('messageB').innerHTML = `Сегодня тебе исполнилось 38 лет, а это значит, что ты на год стал более <s>старым</s> великим и сегодня наш мир подчиняется только тебе.
    За промежуток между 37 и 38 летием произошло множество событий, как хороших, так и плохих, многое было достигнуто, но и без ошибок не обходилось, но всё это имело важное значение в твоей жизни, ведь  даже то, что приносит
    одни отрицательные последствия чему-то учит, так что можно с уверенностью сказать, что новый год твоей жизни будет намного лучше и насыщенее предыдушего. Ещё раз сердечно поздравляю с днём рождения, желаю здоровья, уважения
    от коллег, и энергично провести этот день. Также хочется пожелать чтобы сегодняшний день был для тебя самым счастливым в этом году и чтобы, если чудо существует, оно сегодня с тобой случилось!`;
    await sleep(10000);
    document.getElementsByClassName("spacecore")[0].id = "spacecore";
    await sleep(10000);
    document.getElementsByClassName("wheatley")[0].id = "wheatley";
}