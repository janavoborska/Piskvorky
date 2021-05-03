console.log('funguju');

let kdoNaTahu = 'circle';
console.log(kdoNaTahu);

//const buttonElm = document.querySelectorAll('.policko');
//console.log(buttonElm); je to pole - musim proiterovat for cyklem

const polozky = document.querySelectorAll('.policko');
console.log(polozky);
console.log(polozky[3]);

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
    polozky[i].disabled = true;
  });
}

for (let i = 0; i < polozky.length; i++) {
  const getSymbol = (polozky) => {
    if (polozky[i].classList.contains('board__field--cross')) {
      return 'cross';
    } else if (polozky[i].classList.contains('board__field--circle')) {
      return 'circle';
    } else {
      return 'undefined';
    }
  };
}

console.log(getSymbol(polozky[1]));

const boardSize = 10; // 10x10
//to jsou moje polozky, const fields = document.querySelectorAll('.policko');

for (let i = 0; i < polozky.length; i++) {
  const getField = (row, column) => {
    polozky[i][row * boardSize + column];
  };
}

/*

*/
