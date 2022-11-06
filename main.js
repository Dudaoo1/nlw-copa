function createGame(player1, formatoDaImg1, hour, player2, formatoDaImg2) {
  return `
    <li>
      <img 
        id="${player1}"
        src="./assets/icon-${player1}.${formatoDaImg1}" 
        alt="Bandeira do ${player1}" 
        title="${player1}"
      />

      <strong>${hour}</strong>

      <img 
        id="${player2}" 
        src="./assets/icon-${player2}.${formatoDaImg2}" 
        alt="Bandeira da ${player2}." 
        title="${player2}"
      />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
    </div>
  `
}

const app = (document.querySelector("#app").innerHTML = `
        <header>
          <img src="./assets/logo5.png" alt="Logo da NLW" />
        
          <div id="mascote2">
            <img id="mascote2" src="./assets/mascote2.gif" alt="Logo da NLW" />
 
          </div>
      
      </header>
`)

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("qatar", "gif", "13:00", "ecuador", "gif")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "gif", "10:00", "iran", "gif") +
      createGame("senegal", "gif", "13:00", "netherlands", "gif") +
      createGame("usa", "gif", "16:00", "wales2", "gif")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "gif", "07:00", "saudiarabia", "gif") +
      createGame("denmark", "gif", "10:00", "tunisa", "gif") +
      createGame("mexico2", "gif", "13:00", "poland", "gif") +
      createGame("franca", "gif", "16:00", "australian2", "gif")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "gif", "07:00", "croatia", "gif") +
      createGame("germany", "gif", "10:00", "japan", "gif") +
      createGame("spain", "gif", "13:00", "costarica", "gif") +
      createGame("belgium", "gif", "16:00", "canada", "gif")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "gif", "07:00", "cameroon", "gif") +
      createGame("uruguay", "gif", "10:00", "southkorea", "gif") +
      createGame("portugal", "gif", "13:00", "ghana", "gif") +
      createGame("brazil", "gif", "16:00", "serbia", "gif")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales2", "gif", "07:00", "iran", "gif") +
      createGame("qatar", "gif", "10:00", "senegal", "gif") +
      createGame("netherlands", "gif", "13:00", "ecuador", "gif") +
      createGame("england", "gif", "16:00", "usa", "gif")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisa", "gif", "07:00", "australian2", "gif") +
      createGame("poland", "gif", "10:00", "saudiarabia", "gif") +
      createGame("franca", "gif", "13:00", "denmark", "gif") +
      createGame("argentina", "gif", "16:00", "mexico2", "gif")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "gif", "07:00", "costarica", "gif") +
      createGame("belgium", "gif", "10:00", "morocco", "gif") +
      createGame("croatia", "gif", "13:00", "canada", "gif") +
      createGame("spain", "gif", "16:00", "germany", "gif")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "gif", "07:00", "serbia", "gif") +
      createGame("southkorea", "gif", "10:00", "ghana", "gif") +
      createGame("brazil", "gif", "13:00", "switzerland", "gif") +
      createGame("portugal", "gif", "16:00", "uruguay", "gif")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "gif", "07:00", "senegal", "gif") +
      createGame("netherlands", "gif", "10:00", "qatar", "gif") +
      createGame("iran", "gif", "13:00", "usa", "gif") +
      createGame("wales2", "gif", "16:00", "england", "gif")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisa", "gif", "07:00", "franca", "gif") +
      createGame("australian2", "gif", "10:00", "denmark", "gif") +
      createGame("poland", "gif", "13:00", "argentina", "gif") +
      createGame("saudiarabia", "gif", "16:00", "mexico2", "gif")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "gif", "07:00", "belgium", "gif") +
      createGame("canada", "gif", "10:00", "morocco", "gif") +
      createGame("japan", "gif", "13:00", "spain", "gif") +
      createGame("costarica", "gif", "16:00", "germany", "gif")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "gif", "07:00", "portugal", "gif") +
      createGame("ghana", "gif", "10:00", "uruguay", "gif") +
      createGame("serbia", "gif", "13:00", "switzerland", "gif") +
      createGame("cameroon", "gif", "16:00", "brazil", "gif")
  )

// var detectarQualPaisBandeira = document.querySelector("#brazil")

// detectarQualPaisBandeira.addEventListener("mouseover", function (e) {
//   console.log("teste")
// })
