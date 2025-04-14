

const data = (element) => {
    let input = document.getElementById('inputbox');

    input.value += element.innerText;

}

const zero = () => {
    document.getElementById('inputbox').value = ' ';
}

const del = () => {
    document.getElementById('inputbox').value = document.getElementById('inputbox').value.slice(0, -1);
}

const add = (element) => {
    let input = document.getElementById('inputbox');

    input.value += element.innerText;


}

const total = () => {
    let input = document.getElementById('inputbox').value;
    try {
        let ans = eval(input);
        document.getElementById('inputbox').value = ans;
    } catch (e) {
        document.getElementById('inputbox').value = 'Error';
    }



}

