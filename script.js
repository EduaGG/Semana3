let form2 = document.getElementById('form2');
let form1 = document.getElementById('form1');

function showForm1() {
    form1.style.display = 'block';
    form2.style.display = 'none';
}

function showForm2() {
    form1.style.display = 'none';
    form2.style.display = 'block';
}