const outputField = document.createElement('textarea');
outputField.className = 'outputField';
document.body.append(outputField);

const keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
document.body.append(keyBoard);

const keyBoardValuesEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 43, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92, 110, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13, 16, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, 33, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

function printKeyBoardEn(){
  let out = '';
  for(i = 0; i < keyBoardValuesEn.length; i++){
    if(i === 13){
      out += '<div class = "button backspace">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 14){
      out += '<div class = "button tab">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 28){
      out += '<div class = "button del">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 29){
      out += '<div class = "button capslk">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 41){
      out += '<div class = "button enter">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 42){
      out += '<div class = "button shiftL">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 53){
      out += '<div class = "button pgUp">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 54){
      out += '<div class = "button shiftR">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 55){
      out += '<div class = "button ctrlL">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 56){
      out += '<div class = "button win">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 57){
      out += '<div class = "button altL">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 58){
      out += '<div class = "button space">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 59){
      out += '<div class = "button altR">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 60){
      out += '<div class = "button home">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 61){
      out += '<div class = "button pgDn">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 62){
      out += '<div class = "button end">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }else if(i === 63){
      out += '<div class = "button ctrlR">' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }
    else{
      out += '<div class = button>' + String.fromCharCode(keyBoardValuesEn[i]) + '</div>';
    }
  }
  document.querySelector('.keyboard').innerHTML = out;
}

printKeyBoardEn();

const backsapce = document.querySelector('.backspace');
backsapce.innerHTML = 'Backspace';

const tab = document.querySelector('.tab');
tab.innerHTML = 'Tab';

const del = document.querySelector('.del');
del.innerHTML = 'Del';

const capslk = document.querySelector('.capslk');
capslk.innerHTML = 'CapsLock';

const enter = document.querySelector('.enter');
enter.innerHTML = 'Enter';

const shiftL = document.querySelector('.shiftL');
shiftL.innerHTML = 'Shift';

const pgUp = document.querySelector('.pgUp');
pgUp.innerHTML = '&uArr;';

const shiftR = document.querySelector('.shiftR');
shiftR.innerHTML = 'Shift';

const ctrlL = document.querySelector('.ctrlL');
ctrlL.innerHTML = 'Ctrl';

const win = document.querySelector('.win');
win.innerHTML = 'Win';

const altL = document.querySelector('.altL');
altL.innerHTML = 'Alt';

const altR = document.querySelector('.altR');
altR.innerHTML = 'Alt';

const home = document.querySelector('.home');
home.innerHTML = '&lArr;';

const pgDn = document.querySelector('.pgDn');
pgDn.innerHTML = '&dArr;';

const end = document.querySelector('.end');
end.innerHTML = '&rArr;';

const ctrlR = document.querySelector('.ctrlR');
ctrlR.innerHTML = 'Ctrl';




