const createGame = (player1, group, hour, player2) => {
  return `  <p> ${group} </p>

    <li>
      <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira do ${player2}">
    </li>
  `
}

let delay = -0.3
const createCard = (date, day, games) => {
  delay = delay + 0.3;
  return `
    <div class="card" style= "animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard('20/11', 'Domingo', createGame('qatar','Grupo A','13:00', 'ecuador')) +
  createCard('21/11', 'Segunda', createGame('england','Grupo B','10:00', 'iran') + createGame('senegal', 'Grupo A', '13:00', 'luxembourg') + createGame('united-states','Grupo B', '16:00', 'wales'))
  + createCard('22/11', 'Terça', createGame('argentina', 'Grupo C', '07:00', 'saudi-arabia') + createGame('denmark','Grupo D', '10:00', 'tunisia') + createGame('mexico', 'Grupo C', '13:00', 'poland') + createGame('france', 'Grupo D', '16:00', 'australia'))
  + createCard('23/11', 'Quarta', createGame('morocco','Grupo F', '07:00', 'poland') + createGame('germany','Grupo E', '10:00', 'japan') + createGame('spain', 'Grupo E', '13:00', 'costa-rica') + createGame('belgium', 'Grupo F', '16:00', 'canada'))
  + createCard('24/11', 'Quinta', createGame('switzerland', 'Grupo G', '07:00', 'cameroon') + createGame('uruguay', 'Grupo H', '10:00', 'south-korea') + createGame('portugal', 'Grupo H', '13:00', 'ghana') + createGame('brazil', 'Grupo G', '16:00', 'serbia'))
  + createCard('25/11', 'Sexta', createGame('wales', 'Grupo B', '07:00', 'iran') + createGame('qatar', 'Grupo A', '10:00', 'senegal') + createGame('netherlands', 'Grupo A', '13:00', 'ecuador') + createGame('england', 'Grupo B', '16:00', 'united-states'))
  + createCard('26/11', 'Sábado', createGame('tunisia', 'Grupo D', '07:00', 'australia') + createGame('poland', 'Grupo C', '10:00', 'saudi-arabia') + createGame('france', 'Grupo D', '13:00', 'denmark') + createGame('argentina', 'Grupo C', '16:00', 'mexico'))
  + createCard('27/11', 'Domingo', createGame('japan', 'Grupo E', '07:00', 'costa-rica') + createGame('belgium', 'Grupo F', '10:00', 'morocco') + createGame('croatia', 'Grupo F', '13:00', 'canada') + createGame('spain', 'Grupo E', '16:00', 'germany'))
  + createCard('28/11', 'Segunda', createGame('cameroon', 'Grupo G',  '07:00', 'serbia') + createGame('south-korea', 'Grupo H', '10:00', 'ghana') + createGame('brazil', 'Grupo G', '13:00', 'switzerland') + createGame('portugal', 'Grupo H', '16:00', 'uruguay'))
  + createCard('29/11', 'Terça', createGame('ecuador', 'Grupo A', '12:00', 'senegal') + createGame('netherlands', 'Grupo A', '12:00', 'qatar') + createGame('iran', 'Grupo B', '16:00', 'united-states') + createGame('wales', 'Grupo B', '16:00', 'england'))
  + createCard('30/12', 'Quarta', createGame('tunisia', 'Grupo D', '12:00', 'france') + createGame('australia', 'Grupo D', '12:00', 'denmark') + createGame('poland', 'Grupo C', '16:00', 'argentina') + createGame('saudi-arabia', 'Grupo C', '16:00', 'mexico'))
  + createCard('01/12', 'Quinta', createGame('croatia', 'Grupo F', '12:00', 'belgium') + createGame('canada', 'Grupo F', '12:00', 'morocco') + createGame('japan', 'Grupo E', '16:00', 'spain') + createGame('costa-rica', 'Grupo E', '16:00', 'germany'))
  + createCard('02/12', 'Sexta', createGame('south-korea', 'Grupo H', '12:00', 'portugal') + createGame('ghana', 'Grupo H', '12:00', 'uruguay') + createGame('serbia', 'Grupo E', '16:00', 'switzerland') + createGame('cameroon', 'Grupo E', '16:00', 'brazil'))
    

