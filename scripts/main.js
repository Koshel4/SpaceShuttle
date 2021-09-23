var StarsCoords = '';
var music = new Audio('media/mus.mp3');

function Start() {
    for (let index = 0; index < 700; index++) {
        StarsCoords += (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px ' + (Math.floor(Math.random() * (2000 - 10) + 10)) + 'px #FFF';
        if (index != 699) StarsCoords += ', ';
    }
    document.getElementById('stars').style.boxShadow = StarsCoords;
    document.getElementById('stars2').style.boxShadow = StarsCoords;
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
    document.getElementById('messageB').innerHTML = `Сегодня тебе исполнилось 38 лет, а это значит, что ты на год стал<br/> более <s>старым</s> великим и сегодня наш мир подчиняется только тебе.
    <br/>За промежуток между 37 и 38 летием произошло множество событий,<br/> как хороших, так и плохих, многое было достигнуто, но и без ошибок<br/> не обходилось, но всё это имело важное значение в твоей жизни, ведь <br/> даже то, что приносит
    одни отрицательные последствия чему-то учит, <br/>так что можно с уверенностью сказать, что новый год твоей жизни<br/> будет намного лучше и насыщенее предыдушего. Ещё раз сердечно<br/> поздравляю с днём рождения, желаю здоровья, уважения
    от коллег,<br/> и энергично провести этот день. Также хочется пожелать чтобы<br/> сегодняшний день был для тебя самым счастливым в этом году и<br/> чтобы, если чудо существует, оно сегодня с тобой случилось!`;
    await sleep(10000);
    document.getElementsByClassName("spacecore")[0].id = "spacecore";
}