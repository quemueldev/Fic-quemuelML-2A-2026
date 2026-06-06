const display = document.getElementById('display');
let currentList = [];

display.innerHTML = currentList.join('');

const addNum = (btn) => {
    currentList.push(btn.value)
    display.innerHTML = currentList.join('');
}
const removeNum = () => {
    currentList.pop();
    display.innerHTML = currentList.join('');
}
const calculate = () => {
    const result = eval(currentList.join(''));
    display.innerHTML = result;
    currentList = [result];
}