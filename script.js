// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(function (response) {
         return response.json()
      })
      .then(function (json) {
         let form = document.querySelector("form")
         form.addEventListener("submit", function (event) {
            event.preventDefault()
            let missionTarget = document.getElementById("missionTarget")

            missionTarget.innerHTML = 
            `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[1].name}</li>
   <li>Diameter: ${json[1].diameter}</li>
   <li>Star: ${json[1].star}</li>
   <li>Distance from Earth: ${json[1].distance}</li>
   <li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}">`
            let pilot = document.querySelector("input[name=pilotName]")
            let copilot = document.querySelector("input[name=copilotName]")
            let fuelLevel = document.querySelector("input[name=fuelLevel]")
            let cargoMass = document.querySelector("input[name=cargoMass]")
            let regExpression = new RegExp("^[a-zA-Z]*$")
            let pilotStatus = document.getElementById("pilotStatus")
            let copilotStatus = document.getElementById("copilotStatus")
            let fuelStatus = document.getElementById("fuelStatus")
            let cargoStatus = document.getElementById("cargoStatus")
            let launchStauts = document.getElementById("launchStatus")
            let faultyItems = document.getElementById("faultyItems")

            if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("All fields are required")
            } else if (isNaN(cargoMass.value) || isNaN(fuelLevel.value) || !regExpression.test(pilot.value) || !regExpression.test(copilot.value)) {
               alert("Incorrect Data type")
            } else if (cargoMass.value > 10000 || fuelLevel.value < 10000) {
               launchStauts.innerHTML = "Sahuttle not ready for Launch"
               faultyItems.style.visibility = "visible"
               launchStauts.style.color = 'red';
               pilotStatus.innerHTML = `${pilot.value} is ready for Launch`
               copilotStatus.innerHTML = `${copilot.value} is ready for Launch`

               if (cargoMass.value > 10000 && fuelLevel.value < 10000) {

                  //document.getElementById("faultyItems").style.visibility = "visible"

                  cargoStatus.innerHTML = "Cargo mass too high for Launch"
                  fuelStatus.innerHTML = "Fuel Level too low for Launch"
               }

               else if (cargoMass.value > 10000 ) {

                  //document.getElementById("faultyItems").style.visibility = "visible"

                  cargoStatus.innerHTML = "Cargo mass too high for Launch"
                  
               }

                else {

                  //document.getElementById("faultyItems").style.visibility = "visible"

                  fuelStatus.innerHTML = "Fuel level too low for Launch"
                  
               }
            }

            else{
               launchStauts.innerHTML = "Shuttle is ready for launch"
               launchStauts.style.color = "green"
            }

         })
      })
   //let form = document.querySelector("form")
}
)

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
