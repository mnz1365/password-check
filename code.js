var numbers = '0123456789'.split('');
var letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
var symbols = '/!@#$%^&*()-_=+\|'.split('');
var thereIsNumber = false;
var thereIsLetter = false;
var thereIsSymbols = false;
var pass = '';

function myfunc() {
    var thereIsNumber = false;
    var thereIsLetter = false;
    var thereIsSymbols = false;
    pass = document.getElementById('myinput').value;
    pass = pass.split('');

    while (document.getElementById('comments').lastElementChild) {
        document.getElementById('comments').removeChild(document.getElementById('comments').lastElementChild);
      }

    if(document.getElementById('myinput').value.length < 8) {
        
        var para = document.createElement('p');
        para.innerHTML = "your password is short!";
        para.style.color = 'red';
        document.getElementById('comments').appendChild(para);
    }

    for(i=0;i<pass.length;i++) {
        for(j=0;j<numbers.length;j++) {
            if(numbers[j] == pass[i]) {
                thereIsNumber = true;
                break;
            }    
        }
        for(j=0;j<letters.length;j++) {
            if(letters[j] == pass[i]) {
                thereIsLetter = true;
                break;
            }    
        }
        for(j=0;j<symbols.length;j++) {
            if(symbols[j] == pass[i]) {
                thereIsSymbols = true;
                break;
            }    
        }
    }

    if(thereIsLetter == false) {
        var para = document.createElement('p');
        para.innerHTML = "your password is not strong!, add some letters!";
        para.style.color = 'red';
        document.getElementById('comments').appendChild(para);
    }
    
    if(thereIsNumber == false) {
        var para = document.createElement('p');
        para.innerHTML = "your password is not strong!, add some numbers!";
        para.style.color = 'red';
        document.getElementById('comments').appendChild(para);
    }
    
    if(thereIsSymbols == false) {
        var para = document.createElement('p');
        para.innerHTML = "your password is not strong!, add some symbles!";
        para.style.color = 'red';
        document.getElementById('comments').appendChild(para);
    }
    if(thereIsLetter == true && thereIsNumber == true && thereIsSymbols == true && pass.length > 7) {
        var para = document.createElement('p');
        para.innerHTML = "your password is good!";
        para.style.color = 'green';
        document.getElementById('comments').appendChild(para);
    }

}