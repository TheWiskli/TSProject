"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick)

function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const txtTask1Output = document.getElementById("txtTask1Output");
  const hoyde = Number(txtRectHeight.value);
  const bredde = Number(txtRectWidth.value);
  

  const Omkrets = (hoyde + bredde + hoyde + bredde);
  const Areal = bredde * bredde;
  txtTask1Output.innerHTML = "Omkrets: " + Omkrets + ", Areal: " + Areal;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

let txtTask2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch (key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      txtTask2Words = txtTask2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + txtTask2Words.length; + "<br>" + txtTask2Words.join(" ");
      break;
   }
}

//--- Part 3 ----------------------------------------------------------------------------------------------

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", txtTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";

function txtTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for (let i = 0; i < chkTask3.length; i++) {
    const checkBox = chkTask3[i];
    if (checkBox.checked) {
      const value = checkBox.value;
      if (value === "4"){
      text += "Du har valgt nummer " + value + " E DU SPRØ?!" + "<br>";
      }else{
        text += "Du har valgt nummer " + value + "<br>";
      }
    }
  }
  txtTask3Output.innerHTML = text;
  text = "";
}

//--- Part 4 ----------------------------------------------------------------------------------------------
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i];

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "car";
  radio.value = car.caption;
  radio.id = "car" + car.value;

  const label = document.createElement("label");
  label.htmlFor = car + car.value;
  label.textContent = car.caption;

  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

divTask4Cars.addEventListener("change", divTask4CarsChange);
function divTask4CarsChange() {
  const selectedCar = document.querySelector('input[name="car"]:checked');
  if (selectedCar) {
    const selectedValue = selectedCar.value;
    txtTask4Output.innerHTML = "Du har valgt: " + selectedValue;
  }
}

//--- Part 5 ----------------------------------------------------------------------------------------------
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
function selectTask5AnimalsChange() {
  const selectedAnimal = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;
  txtTask5Output.textContent = `You selected: ${selectedAnimal}`;
};
//--- Part 6 ----------------------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const girlName = GirlsNames[i];

  const option = document.createElement("option");
  option.type = "option";
  option.value = girlName;
  option.text = girlName;
  selectTask6Girls.appendChild(option);

  selectTask6Girls.addEventListener("change", selectTask6GirlsChange);
  
  function selectTask6GirlsChange() {
    const selectedGirl = selectTask6Girls.options[selectTask6Girls.selectedIndex].text;
    txtTask6Output.textContent = `You selected: ${selectedGirl}`;
  }
}


//--- Part 7 ----------------------------------------------------------------------------------------------
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");


for(let i = 0; i < MovieGenre.length; i++){
  const genre = MovieGenre[i];
  const option = document.createElement("option");
  option.value = genre;
  option.text = genre;
  selectMovieGenre.appendChild(option);
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);

function cmbAddMovieClick() {
  const title = txtMovieTitle.value;
  const SelectedGenre = selectMovieGenre.options[selectMovieGenre.selectedIndex].text;
  const director = txtMovieDirector.value;
  const rate = txtMovieRate.value;

  if(!title || !director || !rate){
    alert("All fields are required.");
    return;
  }

  const row = tblMovies.insertRow();
  const cellNr = row.insertCell(0);
  const cellTitle = row.insertCell(1);
  const cellGenre = row.insertCell(2);
  const cellDirector = row.insertCell(3);
  const cellRate = row.insertCell(4);

  cellNr.textContent = tblMovies.rows.length - 1;
  cellTitle.textContent = title;
  cellGenre.textContent = SelectedGenre;
  cellDirector.textContent = director;
  cellRate.textContent = rate;

  document.getElementById("title").value = "";
  document.getElementById("director").value = "";
  document.getElementById("rate").value = "5";
}