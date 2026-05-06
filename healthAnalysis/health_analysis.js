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
    const selectGender = document.querySelector('input[name="gender"]:checked')
    if(selectGender){selectGender.checked = false};
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
// Recuerda male y female son objetos
        Male: {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
        },
        Female: {
        Diabetes: 0,
        Thyroides: 0,
        "High Blood Pressure": 0,
    },
  };

//Solo aumenta el numero de los key
   for (const patient of pacients){
    contadorDeCondicion[patient.condition]++;
    contadorDeCondicionGenero[patient.gender][patient.condition]++;


}
   report.innerHTML = `Number of patients: ${numPacients}<br><br>`;
   
   report.innerHTML += `Conditions Breakdown:<br>`;
   for (const condition in contadorDeCondicion) {
	report.innerHTML += `${condition}: ${contadorDeCondicion[condition]}<br>`;
}


   report.innerHTML += `<br>Gender-Based Conditions:<br>`;
   for (const gender in contadorDeCondicionGenero){
    report.innerHTML += `${gender}:<br>`;
    for(const condition in contadorDeCondicionGenero[gender]){
        report.innerHTML += `${condition}: ${contadorDeCondicionGenero[gender][condition]}<br>`
    }
  }
}
addPacienteButton.addEventListener("click", addPacient);

function searchCondition() {
const conditionIn = document.getElementById('conditionInput').value.toLowerCase().trim();
const ResultadoDiv = document.getElementById('result');
ResultadoDiv.innerHTML = "";

fetch('health_analysis.json')
.then( response => response.json())
.then(data => {
    const condicion = data.conditions.find( item => item.name.toLowerCase().includes(conditionIn));
if(condicion){
    const sintomas = condicion.symptoms.join(', ');
    const prevencion = condicion.prevention.join(', ');
    const tratamiento = condicion.treatment;
   
   ResultadoDiv.innerHTML += `<h2>${condicion.name}</h2>`;
   ResultadoDiv.innerHTML += `<img src="${condicion.imagesrc}" alt="imagen">`;
   
   ResultadoDiv.innerHTML += `<p><strong>Symptoms:</strong> ${sintomas}</p>`;
   ResultadoDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevencion}</p>`;
   ResultadoDiv.innerHTML += `<p><strong>Treatment:</strong> ${tratamiento}</p>`;
   } else {
   ResultadoDiv.textContent = `No se encontraron datos del tratamiento`
   }
})
.catch(error => {
    console.error('Error', error);
    ResultadoDiv.textContent = `Hubo un error en la obtencion de datos`;
 });
}
btnSearch.addEventListener("click", searchCondition);