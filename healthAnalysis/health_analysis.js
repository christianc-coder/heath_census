const addPacienteButton = document.getElementById('addPatient');
const reporte = document.getElementById('report');
const btnSearch = document.getElementById('btnSearch');
const pacients = [];

function addPacient() {
 const name = document.getElementById('name').value;
 const gender = document.querySelector('input[name="gender"]:checked');
 const age = document.getElementById('age').value;
 const condition = document.getElementById('condition').value;
 
 // Empuja a el paciente a un arreglo para su manipulacion
 if(name && gender && age && condition){
    pacients.push({ name, genero: gender.value, age, condition});
    resetForm();
    generateReport();
 }
}
function resetForm (){
    const name = document.getElementById('name').value = "";
    const gender = document.querySelector('input[name="gender"]:checked').checked = false;
    const age = document.getElementById('age').value = "";
    const condition = document.getElementById('condition').value = "";
    
}
function generateReport (){
    const numPacient = pacients.length;
    const contadorDeCondicion = {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
    
    };
    const contadorDeCondicionGenero = {
        Male: {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
        },
        female: {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
    },
  }
}
   for (const patient of pacients){
    contadorDeCondicion[patient.condicion]++;
    contadorDeCondicionGenero[patient.gender][patient.condicion]++;
   }
   reporte.innerHTML