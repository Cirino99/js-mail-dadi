/* js esercizio mail*/

const listEmail = ['mario.rossi@gmail.com', 'mario.verdi@gmail.com', 'luca.salvatore@gmail.com', 'asd@gmail.com', 'qwerty@gmail.com'];
const userEmail = document.getElementById('email');
const buttonEmail = document.getElementById('email-button');
const resultEmail = document.getElementById('email-result');
buttonEmail.addEventListener('click',
    function(){
        let accessoEmail = false;
        for(let i=0; i<listEmail.length; i++){
            if(userEmail.value === listEmail[i]){
                accessoEmail = true;
            }
        }
        if(accessoEmail){
            resultEmail.innerText = 'Complimenti puoi accedere alla nostra lounge super riservata';
        }
        else {
            resultEmail.innerText = 'RIP non puoi entrare';
        }
    }
);