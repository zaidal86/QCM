const reponse = ['A', 'B', 'A', 'C', 'A', 'D', 'A', 'A', 'A']; // Mettre les reponses ici !

//////////////////////////////////////////////////////Programmes//////////////////////////////////////////////////////////

const args = [];
const value = ['none', 'A', 'B', 'C', 'D'];
const data = ['--Please choose an option--', 'A', 'B', 'C', 'D'];
let number = 1;
let result = 0;
const count = 180;


function test() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const select = document.createElement('select');
  div.setAttribute('class', 'question' + number);
  h1.innerHTML = 'Question ' + number;
  div.appendChild(h1);
  select.setAttribute('name', 'question' + number);
  select.setAttribute('id', 'question' + number);

  for (let index = 0; index < data.length; index++) {
    const option = document.createElement('option');
    option.setAttribute('value', data[index]);
    option.innerHTML = data[index];
    select.appendChild(option);
  };

  document.getElementsByClassName('container')[0].appendChild(div);
  document.getElementsByClassName('question' + number)[0].appendChild(select);
  number++;
};

function check() {
  number = 0;
  result = 0;
  for (let index = 1; index <= count; index++) {
    const rep = document.getElementById('question' + index).value;
    if (rep === '--Please choose an option--') {
      console.log('Error: manque une reponse');
      alert(`Error: Manque des reponses ${index}`);
      break;
    };
    args[number] = rep;
    number++;
  };
  if (args.length === count) {
    number = 1;
    for (let index = 0; index < count; index++) {
      if (args[index] === reponse[index]) {
        // console.log('Bonne reponse');
        const id = document.getElementById('question' + number);
        id.setAttribute('style', 'background: green;');
        result++;
      } else {
        // console.log('Mauvaise reponse');
        const id = document.getElementById('question' + number);
        id.setAttribute('style', 'background: red;');
      };
      number++;
    };
    CreateResult();
  };
};

function CreateResult() {
  document.getElementById('result').innerHTML = `Nombre de bonne reponse: <span>${result}/${count} ` + Math.floor(result / count * 100) + `%</span>`;
};

addEventListener('load', () => {
  for (let index = 0; index < count; index++) {
    test();
  };
});