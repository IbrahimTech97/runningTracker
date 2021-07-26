const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector("#entries");
document.querySelector('#target').innerText = goal;

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);

}

function reducer(total, currentValue) {
    return total + currentValue
}

function calcTotal(){
    const totalValue = entries.reduce(reducer).toFixed(1)
    document.getElementById('total').innerHTML = totalValue;
    document.getElementById('progressTotal').innerHTML = totalValue;
}

function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerHTML = average;

}

function weeklyHigh(){
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;

}

function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1)
    const completedPerecent = totalValue / (goal / 100);
    const progressCircle = document.querySelector("#progressCircle")
    if(completedPerecent  > 100) completedPerecent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPerecent}%, #2d3740 ${completedPerecent})% 100%)`;
}

function handleSubmit(event){
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();

}
const from = document
.querySelector('form')
.addEventListener("submit", handleSubmit)

