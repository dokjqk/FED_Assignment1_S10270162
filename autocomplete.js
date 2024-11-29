document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('save-button').addEventListener('click', function(event) {
        event.preventDefault();
        const inputValue = document.getElementById('input-box').value;
        localStorage.setItem('film', inputValue);
        alert('Film saved: ' + inputValue);
        window.location.href = 'log.html';
    });
});

let availableKeywords = [
    'Dune',
    'Dune 2',
    'Parasite',
    'The Godfather',
    'The Dark Knight',
    'The Lord of the Rings',
    'The Matrix',
    'The Matrix Reloaded',
    'The Matrix Revolutions',
    'Venom: The Last Dance',
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length){
        result = availableKeywords.filter((keyword) =>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick='selectInput(this)'>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.style.display = 'none';
}