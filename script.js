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
    polozky[i].disabled = true;
  });
}

/*

Pomocí animací přidej symbolům efekt postupného zvětšení. V náhledu je animace zpomalená z času 0.15s na 0.45s, aby bylo lépe vidět, jak má vypadat. Ve výsledku použij kratší čas.


*/
