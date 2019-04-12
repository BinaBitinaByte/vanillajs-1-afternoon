let game = []

function play (clickedId) {
  const playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById(clickedId)

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    game[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    game[clickedId] = 'O'
  }
  console.log(game)
//   console.log(grid)
  let topL = game[0]
  let topC = game[1]
  let topR = game[2]
  let midL = game[3]
  let midC = game[4]
  let midR = game[5]
  let downL = game[6]
  let downC = game[7]
  let downR = game[8]
  
  if (topL !== undefined && topL === topC && topL === topR) {
    console.log('hit')
    window.alert(`${topL} is the winner`)
  }
  if (midL !== undefined && midL === midC && midL === midR) {
    window.alert(`${midL} is the winner`)
  }
  if (downL !== undefined && downL === downC && downL === downR) {
    window.alert(`${downL} is the winner`)
  }
  if (topL !== undefined && topL === midL && topL === downR) {
    window.alert(`${topL} is the winner`)
  }
  if (topC !== undefined && topC === midC && topC === downC) {
    window.alert(`${topC} is the winner`)
  }
  if (topR !== undefined && topR === midR && topR === downR) {
    window.alert(`${topR} is the winner`)
  }
  if (topL !== undefined && topL === midC && topL === downR) {
    window.alert(`${topL} is the winner`)
  }
  if (downL !== undefined && downL === midC && downL === topR) {
    window.alert(`${downL} is the winner`)
  }
}

// function grid () {

//   let gameDone
//   for (let i = 0; i <= 8; i++) {
//     if (game[i] === undefined) {
//       gameDone = false
//     } else {
//       alert('CAT has won the game!')
//     }
//   }
// }
