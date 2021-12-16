const reponse = ['A','','','','','','','','','','','','','','','','','']; // Mettre les 180 reponse ici !

//////////////////////////////////////////////////////Programmes//////////////////////////////////////////////////////////

const args = [];
const value = ['none', 'none', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const data = ['--Please choose an option--', 'Aucune reponse', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let number = 1;
let result = 0;
const count = 180; //180 Question


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
      alert(`Error: Manque une reponses a la question: ${index}`);
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

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
};

function CreateResult() {
  document.getElementById('result').innerHTML = `Nombre de bonne reponse total: <span>${result}/${count}</span> note sur 20: <span style="color:blue;">` + financial((result / count * 20)) + '/20</span> Pourcentage du score: <span style="color:red;">' + financial((result / count * 100)) + `%</span>`;
};

addEventListener('load', () => {
  for (let index = 0; index < count; index++) {
    test();
  };
});
