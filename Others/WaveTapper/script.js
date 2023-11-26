const container = document.querySelector('.container');
var audio = new Audio('music.mp3');


const colors = [
    '#EB5C5E',
    '#F28057',
    '#FAE247',
    '#B4D72C',
    '#55C220',
    '#29B35B',
    '#29B387',
    '#32B6A0',
    '#25B4D6',
    '#1C6AC0',
    '#351EB4',
    '#7D1ED4',
    '#9226AC',
    '#B22B86',
    '#AA1D63'
]

for (let i = 0; i < 15; i++) {
    const box = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    box.classList.add('box', 'box'+(i+1), 'show-up');
    box.style.backgroundColor = colors[i];
    box.style.transition = '2s'

    
    if(i == 1){
        let spanContainer = document.createElement('div');
        spanContainer.classList.add('span-container');
        span.classList.add('span1')
        span2.classList.add('span2')
        spanContainer.appendChild(span);
        spanContainer.appendChild(span2);
        box.appendChild(spanContainer);
    }else if(i == 5) {
        let spanContainer = document.createElement('div');
        spanContainer.classList.add('span-container');
        span.classList.add('span1')
        span2.classList.add('span2')
        spanContainer.appendChild(span);
        spanContainer.appendChild(span2);
        box.appendChild(spanContainer);
    }else{
        box.appendChild(span);
    }
    container.appendChild(box);
}

const pause = (seconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds)
    })
}

 function startAnimation() {
    let credits = document.querySelector('.c-container');
    credits.style.opacity = '0';

    setTimeout(() => {
        credits.style.display = 'none';
    }, 500)

    setTimeout(() => {
        box1()
        audio.play();
        setTimeout(() => {
            box2()
            setTimeout(() => {
                box3()
                setTimeout(() => {
                    box4()
                    setTimeout(() => {
                        box5()
                        setTimeout(() => {
                            box6()
                        }, 4500)
                    }, 4500)
                }, 4500)
            }, 8500)
        }, 8500)
    }, 500)
    
}

async function box1() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[0];
        box.classList.remove(('show-up')); // 3,385
        let musicTime = '/V.,,,,;;;V.,,,;V.,.;;;;;;V.,,;V...V....^.. .V.,,,,;;;V.,,,;V.,.;;;;;;V.,,;V...V...>..^.. .V.,,,,;;;V.,,,;V.,.;;;;;;V.,,;V...V....^.. .V.,,,,;;;V.,,,;V.,.;;;;;;V.,,;V...V...>..^..<.'
        for(let i = 0; i < musicTime.length; i++) {
            switch(musicTime[i]) {
                case 'V': 
                    box.style.transition = null
                    box.classList.toggle('bottom')
                    setTimeout(() => {
                        box.classList.toggle('bottom')
                    }, 80)
                    break;
                case '>':
                    box.classList.toggle('right')
                    setTimeout(() => {
                        box.classList.toggle('right')
                    }, 80)
                    break;
                case '^':
                    box.classList.toggle('top')
                    setTimeout(() => {
                        box.classList.toggle('top')
                    }, 80)
                    break;
                case '<':
                    box.classList.toggle('left')
                    setTimeout(() => {
                        box.classList.toggle('left')
                    }, 80)
                    break;
                case '/':
                    await pause(2175)
                    break; 
                case ',':
                    await pause(100)
                    break; 
                case '.':
                    await pause(50)
                    break; 
                case ';':
                    await pause(10)
                    break; 
            }
        }
}

async function box2() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[1];
        box.classList.remove(('show-up'));
    let musicTime = '////,,,V...V.....V...V.......V...V.....V...V.......V...V.....V...V.......V...V.....V...V....  ...V>...V>...V>..>..V...>..>...V...V..>..>..V...V..>..>...V>...>V...V>...>V... ...V>...V>...V>..>..V...>..>...V...V..>..>..V...V..>..>...V>...>V...V>...>V'

    for(let i = 0; i < musicTime.length; i++) {
        switch(musicTime[i]) {
            case 'V': 
                box.style.transition = "0.5s"
                box.classList.toggle('bottom-left')
                break;
            case '>':
                box.classList.toggle('bottom-right')
                break;
            case '^':
                box.classList.toggle('top')
                break;
            case '<':
                box.classList.toggle('left')
                break;
            case '/':
                await pause(500)
                break; 
            case ',':
                await pause(100)
                break; 
            case '.':
                await pause(50)
                break; 
            case ';':
                await pause(10)
                break; 
        }
    }
}

async function box3() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[2];
        box.classList.remove(('show-up'));
    let musicTime = '////,,,U..U..U......U...C.....U..U..U......T.... ....U..U..U......U...C.....U..U..U......T..T..'
    for(let i = 0; i < musicTime.length; i++) {
        switch(musicTime[i]) {
            case 'U': 
                box.style.transition = null
                box.firstChild.innerText = 'U'
                setTimeout(() => {
                    box.firstChild.innerText = ''
                },50)
                break;
            case 'C':
                box.firstChild.innerText = 'C'
                setTimeout(() => {
                    box.firstChild.innerText = ''
                },50)
                break;
            case 'T':
                box.firstChild.innerText = 'T'
                setTimeout(() => {
                    box.firstChild.innerText = ''
                },50)
                break;
            case '/':
                await pause(500)
                break; 
            case ',':
                await pause(100)
                break; 
            case '.':
                await pause(50)
                break; 
            case ';':
                await pause(10)
                break;
        }
    }
}

async function box4() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[3];
        box.classList.remove(('show-up'));
    let musicTime = '////,,,,,,,,O,,,O,,,O///,.O,,,O,,,O///.O,,,O,,,O'

    for(let i = 0; i < musicTime.length; i++) {
        switch(musicTime[i]) {
            case 'O': 
                box.style.transition = '0.3s'
                box.classList.toggle('O')
                setTimeout(() => {
                    box.classList.toggle('O')
                }, 100)
                break;
            case '/':
                await pause(500)
                break; 
            case ',':
                await pause(100)
                break; 
            case '.':
                await pause(50)
                break; 
            case ';':
                await pause(10)
                break;
            }
    }
}

async function box5() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[4];
        box.classList.remove(('show-up'));
    const span = box.firstChild
    let musicTime = '///V////V,V////V,,V,,V'

    for(let i = 0; i < musicTime.length; i++) {
        switch(musicTime[i]) {
            case 'V': 
                box.style.transition = '0.3s'
                box.classList.toggle('active')
                span.style.height = '5px'
                span.style.width = '45%'
                setTimeout(() => {
                    span.style.height = '15px'
                    span.style.width = '60%'
                }, 50)
                setTimeout(() => {
                    box.classList.toggle('active')
                    span.style.height = '0px'
                }, 150)
                break;
            case '/':
                await pause(500)
                break; 
            case ',':
                await pause(100)
                break; 
            case '.':
                await pause(50)
                break; 
            case ';':
                await pause(10)
                break;
            }
    }
}

async function box6() {
    const boxes = document.querySelectorAll('.box')
    let box = boxes[5];
        box.classList.remove(('show-up'));
    let musicTime = '//,,,...;;;;V,,^,,,,.V,,,V,,^,,V,,V,,^'

    for(let i = 0; i < musicTime.length; i++) {
        switch(musicTime[i]) {
            case 'V': 
                box.style.transition = '0.3s'
                box.classList.toggle('bottom')
                setTimeout(() => {
                    box.classList.toggle('bottom')
                }, 50)
                break;
            case '^': 
                box.classList.toggle('top')
                setTimeout(() => {
                    box.classList.toggle('top')
                }, 50)
                break;
            case '/':
                await pause(500)
                break; 
            case ',':
                await pause(100)
                break; 
            case '.':
                await pause(50)
                break; 
            case ';':
                await pause(10)
                break;
            }
    }
}