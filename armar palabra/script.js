let cajitas = document.getElementById('divCajitas');
let letras = document.getElementById('divLetras');
let word;
let wordArray = [];
let listaCajitas = [];
let shuffleWord = [];
const getWord = async () => {
    word = "Julieta";
    
    for (let index = 0; index < word.length; index++) {
        wordArray.push(word[index]);  
        shuffleWord.push(word[index]);    
    }
    
    shuffleWord = shuffleWord.sort((a, b) => 0.5 - Math.random())

};

const crearCajitas = async () => {
    await getWord();
    crearLetras();
    wordArray.forEach((letter,i) => {
        listaCajitas.push({index:i,letter:letter});
        let div = document.createElement('h2');
        div.setAttribute('id', `cajita${i}`);
        div.classList.add('cajitas');
        cajitas.appendChild(div);
    });
    console.log(wordArray);
}


const crearLetras = () => {
    
    shuffleWord.forEach((letter) => {
        let div = document.createElement('h2');
        div.addEventListener('click', ()=>clickLetter(letter));
        div.classList.add('letras');
        div.innerHTML = letter;
        letras.appendChild(div);
    });
}

const clickLetter = (letter) => {
    console.log(letter);
   
        if(listaCajitas[0].letter === letter){
            let div = document.getElementById(`cajita${listaCajitas[0].index}`);
            div.innerHTML = letter;
            listaCajitas.shift();
            for (let index = 0; index < letras.children.length; index++) {
                if(letras.children.item(index).innerHTML === letter){
                    letras.children.item(index).remove();
                    break;
                }
                
            }
        }
    };


crearCajitas();