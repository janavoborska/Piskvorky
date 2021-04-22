console.log('funguju');

let kdoNaTahu = 'circle';
console.log(kdoNaTahu);

const buttonElm = document.querySelector('button');

buttonElm.addEventListener('click', () => {
  if (kdoNaTahu === 'circle') {
    buttonElm.classList.add('board__field--circle');
  } else if (kdoNaTahu === 'cross') {
    buttonElm.classList.add('board__field--cross');
  }
});

/*Pomocí posluchače událostí po kliknutí na políčko:

Přidej políčku příslušnout třídu podle toho, kdo je zrovna na tahu. Například board__field--circle, resp. board__field--cross.

Nastyluj políčka tak, aby nezobrazovala nic nebo kolečka a křížky podle tříd z předchozího kroku.*/
