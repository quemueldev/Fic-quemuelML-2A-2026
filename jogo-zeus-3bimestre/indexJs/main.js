import {createPlayer, getPlayer, clearPlayer, removePlayer} from './crud.js'
import {load, fieldRequired} from './utils.js'
import {createPlayerItem} from './service.js'

const formPlayer = document.getElementById('formPlayer')
//load(clearPlayer)

formPlayer.addEventListener('submit', (e) => { 
    const namePlayer = document.getElementById("playerName")
    const classPlayer = document.querySelector("input[name='classe']:checked")

    fieldRequired(namePlayer.value, classPlayer?.value)//mfn
    //console.log('saporra ta sendo chamada', namePlayer.value)
    //nao e aq
    createPlayer({
        name: namePlayer.value, 
        class: classPlayer.value
    });//mfn
});

function renderPlayers() {
    const playerList = document.getElementById("playerList")
    playerList.innerHTML = ''
    const players = getPlayer() //mfn

    if (!players) return

    createPlayerItem(players, playerList, renderPlayers) //mfn
}


load(renderPlayers) //mfn