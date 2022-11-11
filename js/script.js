const startMoney = document.querySelector('.calc__start-input'),
      nowMoney = document.querySelector('.calc__money'),
      startBet = document.querySelector('.calc__bet-input'),
      test = document.querySelector('.test'),
      win = document.querySelector('.win'),
      lose = document.querySelector('.lose'),
      bet = document.querySelector('.bet'),
      step = document.querySelector('.steps'),
      stop = document.querySelector('.stop');


startMoney.addEventListener('change', (e) => {
    nowMoney.innerHTML = startMoney.value;
    console.log(nowMoney.innerHTML);
});

startBet.addEventListener('change', (e) => {
    bet.innerHTML = startBet.value;
    console.log(bet.innerHTML);
});

function getRandomArbitrary() {
    return Math.random() * 2;
  }

test.addEventListener('click', (e) => {
 Play(+nowMoney.innerHTML, +bet.innerHTML);
   
});



let steps = 0;

step.innerHTML = steps;

function Play(start, first) {
    let timerid = setTimeout(function() {nowMoney.innerHTML = start;
        steps +=1;
        step.innerHTML = steps;
        if (first > start) {
            test.innerHTML = 'stavka bolshe chem est deneg';
        }else {
            let x = getRandomArbitrary();
            if (x < 1){
                console.log(`seychas ${start} deneg`);
                start += first;
                Play(start, +bet.innerHTML);
            }else {
                console.log(`seychas ${start} deneg, stavka = ${first} `);
                Play(start-first ,first*2);
            }
        }
    }, 100);
    stop.addEventListener('click', () =>{
        clearInterval(timerid);
    });
}

