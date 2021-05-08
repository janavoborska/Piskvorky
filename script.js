console.log('funguju');

let kdoNaTahu = 'circle';
console.log(kdoNaTahu);

//const buttonElm = document.querySelectorAll('.policko');
//console.log(buttonElm); je to pole - musim proiterovat for cyklem

const polozky = document.querySelectorAll('.policko');
console.log(polozky);
console.log(polozky[3]);

const posluchac = (i) => {
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

  if (isWinningMove(polozky[i])) {
    if (getSymbol(polozky[i]) === 'circle') {
      alert('vyhral kolecko');
    } else alert('vyhral krizek');
  }
};

for (let i = 0; i < polozky.length; i++) {
  // Tady můžeš dělat s každou položkou co chceš. Třeba jim všem přidat event listener

  polozky[i].addEventListener('click', () => {
    posluchac(i);
  });
}

const obsazeno = document.querySelectorAll('.obsazeno');

for (let i = 0; i < polozky.length; i++) {
  polozky[i].addEventListener('click', () => {
    polozky[i].disabled = true;
  });
}

let pocitadloKliku = 0;
const uzivatelKliknul = () => {
  pocitadloKliku += 1;
  console.log(`Uživatel kliknul na tlačítko už ${pocitadloKliku}×.`);
};

//const button = document.querySelector('button');
for (let i = 0; i < polozky.length; i++) {
  polozky[i].addEventListener('click', uzivatelKliknul);
}

const getSymbol = (polozka) => {
  if (polozka.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (polozka.classList.contains('board__field--circle')) {
    return 'circle';
  } else {
    return 'undefined';
  }
};
console.log(getSymbol(polozky[0]));

const boardSize = 10;
const getField = (row, column) => {
  return polozky[row * boardSize + column];
};

console.log(getField(0, 9));

const getPosition = (polozka) => {
  let polozkaIndex = 0;
  while (polozkaIndex < polozky.length && polozka !== polozky[polozkaIndex]) {
    polozkaIndex++;
  }

  return {
    row: Math.floor(polozkaIndex / boardSize),
    column: polozkaIndex % boardSize,
  };
};
console.log(getPosition(polozky[90]));

const symbolsToWin = 5;
const isWinningMove = (polozka) => {
  const origin = getPosition(polozka);
  const symbol = getSymbol(polozka);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    console.log('vyhrál');
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    console.log('vyhrál');
    return true;
  }

  console.log('nic');
  return false;
};

// for (let i = 0; i < polozky.length; i++) {
// polozka[i].addEventListener('click', isWinningMove);
