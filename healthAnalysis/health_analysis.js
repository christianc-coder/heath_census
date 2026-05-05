const addPacienteButton = document.getElementById('addPatient');
const report = document.getElementById('report');
const btnSearch = document.getElementById('btnSearch');
const pacients = [];

function addPacient() {
 const name = document.getElementById('name').value;
 const gender = document.querySelector('input[name="gender"]:checked');
 const age = document.getElementById('age').value;
 const condition = document.getElementById('condition').value;
 
 // Empuja a el paciente a un arreglo para su manipulacion
 if(name && gender && age && condition){
    pacients.push({ name, gender: gender.value, age, condition});
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
    const numPacients = pacients.length;
    const contadorDeCondicion = {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
    
    };
    const contadorDeCondicionGenero = {
// Recuerda que male y female son objetos
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
  };

  
   for (const patient of pacients){
    contadorDeCondicion[patient.condition]++;
    contadorDeCondicionGenero[patient.gender][patient.condition]++;


}
   report.innerHTML = `Number of patients: ${numPacients}<br><br>`;
   report.innerHTML += `Conditions Breakdown:<br>`;
   for (const condition in contadorDeCondicion) {
	report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
}


   report.innerHTML += `<br>Gender-Based Conditions:<br>`;
   for (const gender in contadorDeCondicionGenero){
    report.innerHTML += `${gender}:<br>`;
    for(const condition in contadorDeCondicionGenero[gender]){
        report.innerHTML += `${condition}: ${contadorDeCondicionGenero[gender][condition]}`
    }
  }
}

addPacienteButton.addEventListener("click", addPacient);