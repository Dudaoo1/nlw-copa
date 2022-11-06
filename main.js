function createGame(formatoDaImg, player1, hour, player2, formatoDaImg2) {
  console.log(formatoDaImg)
  return `
    <li>
      <img src="./assets/icon-${player1}.${formatoDaImg}" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.${formatoDaImg2}" alt="Bandeira da ${player2}." />
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
        <img src="./assets/logo.gif" alt="Logo da NLW" />
      </header>

      <main id="cards">
        ${createCard(
          "20/11",
          "domingo",
          createGame("gif", "qatar", "13:00", "ecuador", "gif")
        )}
         ${createCard(
           "21/11",
           "sexta",
           createGame("gif", "england", "10:00", "iran", "gif") +
             createGame("gif", "senegal", "13:00", "netherlands", "gif") +
             createGame("gif", "usa", "16:00", "wales2", "gif")
         )}

          ${createCard(
            "22/11",
            "sexta",
            createGame("gif", "argentina", "07:00", "saudiarabia", "gif") +
              createGame("gif", "denmark", "10:00", "tunisa", "gif") +
              createGame("gif", "mexico2", "13:00", "poland", "gif") +
              createGame("gif", "franca", "16:00", "australian2", "gif")
          )}

           ${createCard(
             "23/11",
             "sexta",
             createGame("gif", "morocco", "07:00", "croatia", "gif") +
               createGame("gif", "germany", "10:00", "japan", "gif") +
               createGame("gif", "spain", "13:00", "costarica", "gif") +
               createGame("gif", "belgium", "16:00", "canada", "gif")
           )}

        ${createCard(
          "24/11",
          "quinta",
          createGame("svg", "switzerland", "07:00", "cameroon", "svg") +
            createGame("gif", "franca", "10:00", "south korea", "svg") +
            createGame("svg", "portugal", "13:00", "ghana", "svg") +
            createGame("svg", "brazil", "16:00", "serbia", "svg")
        )}

        ${createCard(
          "28/11",
          "segunda",
          createGame("svg", "brazil", "13:00", "switzerland", "svg") +
            createGame("svg", "portugal", "16:00", "uruguai", "svg") +
            createGame("svg", "portugal", "16:00", "uruguai", "svg") +
            createGame("svg", "portugal", "16:00", "uruguai", "svg")
        )}

        ${createCard(
          "02/12",
          "sexta",
          createGame("svg", "brazil", "16:00", "cameroon", "svg") +
            createGame("svg", "brazil", "16:00", "cameroon", "svg") +
            createGame("svg", "brazil", "16:00", "cameroon", "svg")
        )}

         ${createCard(
           "02/12",
           "sexta",
           createGame("svg", "brazil", "16:00", "cameroon", "svg") +
             createGame("svg", "brazil", "16:00", "cameroon", "svg") +
             createGame("svg", "brazil", "16:00", "cameroon", "svg")
         )}

          ${createCard(
            "02/12",
            "sexta",
            createGame("svg", "brazil", "16:00", "cameroon", "svg") +
              createGame("svg", "brazil", "16:00", "cameroon", "svg") +
              createGame("svg", "brazil", "16:00", "cameroon", "svg")
          )}

        
      </main>
`)
