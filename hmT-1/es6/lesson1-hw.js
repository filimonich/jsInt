import 'babel-polyfill';

import { wordsCount, getWords } from './words';

let str = '  Всем 12 привет! Ура ура! ';

window.addEventListener('load', function () {
  this.console.log(wordsCount(str));

  for (let some of getWords(str)) {
    this.console.log(some);
  }

  /*
    function* some(){
        console.log('yield a');
        yield 'a';
        console.log('yield b');
        yield 'b';
        console.log('yield c');
        yield 'c';
    }

    for(let a of some()){
        this.console.log(a);
    }*/
});
