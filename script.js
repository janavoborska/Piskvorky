console.log('funguju');

let kdoNaTahu = 'circle';
console.log(kdoNaTahu);

//const buttonElm = document.querySelectorAll('.policko');
//console.log(buttonElm); je to pole - musim proiterovat for cyklem

const polozky = document.querySelectorAll('.policko');

for (let i = 0; i < polozky.length; i++) {
  // Tady můžeš dělat s každou položkou co chceš. Třeba jim všem přidat event listener
  polozky[i].addEventListener('click', () => {
    if (kdoNaTahu === 'circle') {
      polozky[i].classList.add('board__field--circle');
      polozky[i].classList.add('obsazeno');
      document.querySelector('.hrac').src = 'cross.svg';
      kdoNaTahu = 'cross';
    } else if (kdoNaTahu === 'cross') {
      polozky[i].classList.add('board__field--cross');
      polozky[i].classList.add('obsazeno');
      document.querySelector('.hrac').src = 'circle.svg';
      kdoNaTahu = 'circle';
    }
  });
}
const obsazeno = document.querySelectorAll('.obsazeno');

for (let i = 0; i < polozky.length; i++) {
  polozky[i].addEventListener('click', () => {
    if (kdoNaTahu === 'circle') {
      kdoNaTahu = 'circle';
    } else if (kdoNaTahu === 'cross') {
      kdoNaTahu = 'cross';
    }
  });
}

/*

Nereaguj, pokud v kliknutém políčku už je nějaký symbol.

document.querySelectorAll('.hraci-pole__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (kdoJeNaTahu === 'circle') {
      btn.classList.add('board__field--circle');
      document.querySelector('.ikona-hrac').src = 'obrazky/circle.svg';
      kdoJeNaTahu = 'cross';
    } else {
      btn.classList.add('board__field--cross');
      document.querySelector('.ikona-hrac').src = 'obrazky/cross.svg';
      kdoJeNaTahu = 'circle';
    }
  });
});
*/
