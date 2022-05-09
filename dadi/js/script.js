/* js esercizio dadi*/

const button = document.getElementById('gioca');
const result = document.getElementById('result');
button.addEventListener('click',
    function(){
        const numberPC = Math.floor(Math.random() * 6 + 1);
        const numberUser = Math.floor(Math.random() * 6 + 1);
        if (numberUser>numberPC){
            result.innerText = `Complimenti hai vinto con il numero ${numberUser}`;
        } else if (numberUser<numberPC){
            result.innerText = `RIP hai perso con il numero ${numberUser}`;
        } else {
            result.innerText = `Hai pareggiato con il numero ${numberUser}`;
        }
    }
);