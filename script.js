let input = document.getElementById('textfield');
let buttons = document.querySelectorAll('button');
let historyDiv = document.getElementById('history'); 
let clockButton = document.getElementById('clock');  

let string = "";
let history = []; 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                let result = eval(string);
                history.push(`${string} = ${result}`); 
                updateHistory(); 
                string = result; 
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = ""; 
            }
        } else if (btnValue === 'AC') {
            string = ""; 
            input.value = string;
        } else if (btnValue === 'DE') {
            string = string.substring(0, string.length - 1); 
            input.value = string;
        } else if (btnValue === '⏱️') {
            toggleHistory(); 
        } else {
            string += btnValue; 
            input.value = string; 
        }
    });
});

function updateHistory() {
    historyDiv.innerHTML = "<h2>HISTORY</h2>"; 
    history.forEach(item => {
        let historyItem = document.createElement('p');
        historyItem.textContent = item;
        historyDiv.appendChild(historyItem); 
    });
}

function toggleHistory() {
    if (historyDiv.style.display === 'none') {
        historyDiv.style.display = 'block'; 
    } else {
        historyDiv.style.display = 'none'; 
    }
}
