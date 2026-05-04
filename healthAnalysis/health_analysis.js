const addPacienteButton = document.getElementById('addPatient');
const reporte = document.getElementById('report');
const btnSearch = document.getElementById('btnSearch');
const patients = [];

function addPacient() {
 const name = document.getElementById('name').value;
 const gender = document.querySelector('input[name="gender"]:checked');
 const age = document.getElementById('age').value;
 const condition = document.getElementById('condition').value;

 if(name && gender && age && condition){
    patients.push({ name, genero: gender.value, age, condition});
    resetForm();
    generateReport();
 }
}