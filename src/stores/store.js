import { writable } from 'svelte/store';

const createReadLetters = () => {
  const { subscribe, update, set } = writable('');

  return {
    subscribe,
    addLetters: (letter) => {
      update(letters => letters + letter);
    },
    set: () => {
      set('');
    }
  };
};

const readerLetters = createReadLetters();

export default readerLetters;


// ------------------------------------------------

const letras = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F', 'G'],
  ['H', 'I', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'P'],
  ['Q', 'R', 'S'],
];


const num = () => Math.floor(Math.random() * 10 + 1);

const numeros =
  [
    [num(), num(), num()],
    [num(), num(), num(), num()],
    [num(), num(), num(), num(), num()],
    [num(), num(), num(), num()],
    [num(), num(), num()],
  ];

const indice = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18 };

const sumas =
  ['abc', 'adh', 'aej', 'bei', 'bfk', 'cba', 'cfj', 'cgl',
    'def', 'din', 'ein', 'eim', 'ejo', 'fed', 'fjn', 'fkp', 'gfe', 'gko',
    'hda', 'hij', 'hmq', 'ieb', 'ijk', 'inr', 'jea', 'jfc', 'jih', 'jkl', 'jnq', 'jos', 'kfb', 'kji', 'kor', 'lgc', 'lkj', 'lps',
    'mie', 'mno', 'nid', 'njf', 'nop', 'oje', 'okg', 'onm', 'pkf', 'pon',
    'qmh', 'qnj', 'qrs', 'rni', 'rok', 'soj', 'spl', 'srq'];

const data = {};

const arrSumas = sumas.map(terna => terna.split('')).map(item => {
  return {
    terna: item.join(''),
    suma: item.reduce((acc, el) => acc + numeros.flat()[indice[el]], 0)
  }
});
// console.log(arrSumas)


const createTernasDescubiertas = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    update: (ternaDescubierta) => {
      const ternaInversa = ternaDescubierta.split('').reverse().join('')
      console.log({ternaInversa, ternaDescubierta})
      update(terna => [...terna, ternaDescubierta, ternaInversa]);
    }
  };
};
export const ternasDescubiertas = createTernasDescubiertas();




const createNumeroElejido = () => {
  const { subscribe, update, set } = writable(0);
  arrSumas.map(valor => [data[valor.suma] = (data[valor.suma] || 0) + 1]);

  const sumaMaxima = Object.entries(data).sort((a, b) => b[1] - a[1])[0][0];

  console.log(arrSumas, data, sumaMaxima)

  return {
    subscribe,
    set: () => {
      set(+sumaMaxima);
    }
  };
};

export const numeroElejido = createNumeroElejido();

const createLetras = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: () => {
      set(letras);
    }
  };
};

export const lettersBoard = createLetras();

const createNumeros = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: () => {
      set(numeros);
    }
  };
};

export const numbersBoard = createNumeros();


const createCombinaciones = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: () => {
      set(sumas);
    }
  };
};

export const ternasBoard = createCombinaciones();



const createData = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: () => {
      set(data);
    }
  };
};

export const dataBoard = createData();



const createArraySumas = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    set: () => {
      set(arrSumas);
    }
  };
};

export const arraySumas = createArraySumas();








// INITIAL LETTERS

// const letras = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F', 'G'],
//   ['H', 'I', 'J', 'K', 'L'],
//   ['M', 'N', 'O', 'P'],
//   ['Q', 'R', 'S'],
// ];

// const indice = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18 };

// const sumas =
//   ['abc', 'adh', 'aej', 'bei', 'bfk', 'cba', 'cfj', 'cgl',
//     'def', 'din', 'ein', 'eim', 'ejo', 'fed', 'fjn', 'fkp', 'gfe', 'gko',
//     'hda', 'hij', 'hmq', 'ieb', 'ijk', 'inr', 'jea', 'jfc', 'jih', 'jkl', 'jnq', 'jos', 'kfb', 'kji', 'kor', 'lgc', 'lkj', 'lps',
//     'mie', 'mno', 'nid', 'njf', 'nop', 'oje', 'okg', 'onm', 'pkf', 'pon',
//     'qmh', 'qnj', 'qrs', 'rni', 'rok', 'soj', 'spl', 'srq'];

// const num = () => Math.floor(Math.random() * 10 + 1);

// const numeros = [
//   [num(), num(), num()],
//   [num(), num(), num(), num()],
//   [num(), num(), num(), num(), num()],
//   [num(), num(), num(), num()],
//   [num(), num(), num()],
// ];


// const createInitNumbers = () => {
//   const { subscribe, update, set } = writable([]);

//   return {
//     subscribe,
//     set: () => {
//       set(numeros);
//     },
//   };
// };

// export const initNumbers = createInitNumbers();

// const createInitIndex = () => {
//   const { subscribe, update, set } = writable({});

//   return {
//     subscribe,
//     set: (numeros) => {
//       set(

//       );
//     },
//   };
// };

// export const initIndex = createInitIndex();

// const createSumas = () => {
//   const { subscribe, update, set } = writable([]);

//   return {
//     subscribe,
//     set: () => {
//       set(sumas);
//     },
//   };
// };

// export const initSumas = createSumas();



// const createNumMaximo = () => {
//   const { subscribe, update, set } = writable(0);

//   const data = {};

//   const arrSumas = sumas.map(terna => terna.split('')).map(item => item.reduce((acc, el) => acc + numeros.flat()[indice[el]], 0));

//   arrSumas.map(valor => [data[valor] = (data[valor] || 0) + 1]);

//   const sumaMaxima = Object.entries(data).sort((a, b) => b[1] - a[1])[0][0];


//   return {
//     subscribe,
//     set: () => {
//       set(sumaMaxima);
//     },
//   };
// };

// export const initNumMaximo = createNumMaximo();















