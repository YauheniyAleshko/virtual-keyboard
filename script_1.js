const outputField = document.createElement('textarea');
outputField.className = 'outputField';
//outputField.setAttribute('autofocus','')
document.body.append(outputField);

const keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
document.body.append(keyBoard);

//Create and append divs for rows
const row1 = document.createElement('div');
row1.className = 'row';
keyBoard.append(row1);
const row2 = document.createElement('div');
row2.className = 'row';
keyBoard.append(row2);
const row3 = document.createElement('div');
row3.className = 'row';
keyBoard.append(row3);
const row4 = document.createElement('div');
row4.className = 'row';
keyBoard.append(row4);
const row5 = document.createElement('div');
row5.className = 'row';
keyBoard.append(row5);

//Create rows with buttons
const first_row = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
const two_row = ['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','Del'];
const three_row = ['CapsLock','A','S','D','F','G','H','J','K','L',';','\'','Enter'];
const four_row = ['Shift','Z','X','C','V','B','N','M',',','.','/','▲','Shift'];
const five_row = ['Ctrl','Win','Alt',' ','Alt','◄','▼','►','Ctrl'];

const children_list_keyBoard = keyBoard.childNodes;
//console.log(children_list_keyBoard);

//children_list_keyBoard[0].append(first_row);
//children_list_keyBoard[1].append(two_row);
//children_list_keyBoard[2].append(three_row);
//children_list_keyBoard[3].append(four_row);
//children_list_keyBoard[4].append(five_row);

function printKeyBoard(row, num){
  let out = '';
  for(let i = 0; i < row.length; i++){
    if(row[i] === 'Backspace'){
      out += '<div class = "button backspace">' + row[i] + '</div>';
    }else if(row[i] === 'Tab'){
      out += '<div class = "button tab">' + row[i] + '</div>';
    }else if(row[i] === 'Del'){
      out += '<div class = "button del">' + row[i] + '</div>';
    }else if(row[i] === 'CapsLock'){
      out += '<div class = "button capslk">' + row[i] + '</div>';
    }else if(row[i] === 'Enter'){
      out += '<div class = "button enter">' + row[i] + '</div>';
    }else if(row[i] === 'Shift'){
      out += '<div class = "button shift">' + row[i] + '</div>';
    }else if(row[i] === ' '){
      out += '<div class = "button space">' + row[i] + '</div>';
    }else if(row[i] === 'Ctrl'){
      out += '<div class = "button ctrl">' + row[i] + '</div>';
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else if(row[i] === ''){
      
    }else{
      out += '<div class = "button">' + row[i] + '</div>';
    }
  }

  children_list_keyBoard[num].innerHTML = out;
};

printKeyBoard(first_row,0);
printKeyBoard(two_row,1);
printKeyBoard(three_row,2);
printKeyBoard(four_row,3);
printKeyBoard(five_row,4);


const buttons = document.querySelectorAll('.button')

for(let i = 0; i < buttons.length; i++){
  buttons[i].setAttribute('button_name', buttons[i].innerText);
  buttons[i].setAttribute('lower_case_name', buttons[i].innerText.toLowerCase());
}

//window.addEventListener('keydown',function(e){
//  console.log(e.key)
//})



window.addEventListener('keydown', function(e){
  let cursor = outputField.selectionStart;
  let textValue = document.querySelector('.outputField').value;
  if(e.keyCode === 9 ){
    /*textValue = textValue.slice(0,textValue.length - 0);
    //textValue +='';
    console.log(textValue)*/
    
    
  };
  
  document.querySelector('.outputField').value += e.key;
  //document.querySelector('.outputField').value += e.key;
  for(i = 0; i < buttons.length; i++){
    
    if(e.key === buttons[i].getAttribute('button_name') || e.key === buttons[i].getAttribute('lower_case_name')){
      buttons[i].classList.add('active')
    }else if(e.key === 'ArrowUp'){
      buttons[53].classList.add('active');
    }else if(e.key === 'Delete'){
      buttons[28].classList.add('active');
    }else if(e.key === 'Control'){
      buttons[55].classList.add('active');
      buttons[63].classList.add('active');
    }else if(e.key === 'Meta'){
      buttons[56].classList.add('active');
    }else if(e.key === ' '){
      buttons[58].classList.add('active');
    }else if(e.key === 'ArrowLeft'){
      buttons[60].classList.add('active');
    }else if(e.key === 'ArrowDown'){
      buttons[61].classList.add('active');
    }else if(e.key === 'ArrowRight'){
      buttons[62].classList.add('active');
    }
  } 
  
})



window.addEventListener('keyup', function(e){
  for(i = 0; i < buttons.length; i++){
    if(buttons[i].classList.contains('active')){
      buttons[i].classList.add('remove')
    }
    buttons[i].classList.remove('active');
    buttons[i].classList.remove('remove')
  }
})

keyBoard.addEventListener('mousedown', function(e){
  e.target.classList.add('active');
  document.querySelector('.outputField').value += e.target.textContent;
  console.dir(event.target)
  e.preventDefault();
});

keyBoard.addEventListener('mouseup', function(e){
  e.target.classList.add('remove');
  setTimeout(() => {
    e.target.classList.remove('remove');
    e.target.classList.remove('active');
  }, 1000);
});

const tab = document.querySelector('.tab');

window.onkeydown = evt => {
  if (evt.key == 'Tab' || 'Alt') {
      evt.preventDefault();
  }
}


console.log();





















  
