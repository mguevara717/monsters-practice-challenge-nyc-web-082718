document.addEventListener("DOMContentLoaded", function(event) {

  const monsterList = document.getElementById("monster-container")
  const formContainer = document.getElementById("create-monster")
  const createMonster = document.getElementById("create-monster")

  fetch('http://localhost:3000/monsters/?_limit=10&_page=3')
    .then((response) => {
      return response.json()
    })
    .then((monsterObj) => {
      monsterObj.forEach((monster) => {
        monsterList.innerHTML += `<div>
                                    <h1>${monster.name}</h1>
                                    <h4>${monster.age}</h4>
                                    <p>${monster.description}</p>
                                  </div>`
      })
    })


    formContainer.addEventListener("submit", function(event) {
        event.preventDefault()

      const nameInput = document.getElementById("monster-name").value
      const ageInput = document.getElementById("monster-age").value
      const descriptionInput = document.getElementById("monster-description").value

      createMonster.innerHTML += `<div>
                                  <h1>${nameInput}</h1>
                                  <h4>${ageInput}</h4>
                                  <p>${descriptionInput}</p>
                                </div>`

      fetch('http://localhost:3000/monsters/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          name: nameInput,
          age: ageInput,
          description: descriptionInput
        })
      })


    })





 }); //end of dom content loader
