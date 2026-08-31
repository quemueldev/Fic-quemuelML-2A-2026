const urlParams = new URLSearchParams(window.location.search)
const playerId = urlParams.get('id')

import {getPlayer} from '../../indexJs/crud.js'
import {andar} from './keydown.js'
const archerSprite = './assets/arqueiro.png'
const warriorSprite = './assets/guerreiro.png' 


const player = document.getElementById('player')

function getGamePlayer(){
    const players = getPlayer()
    const myPlayer = players.find((p)=>{
        return p.id === playerId
    })
    return myPlayer //.class
}
loadPlayer()
function loadPlayer(){
    const sprite = document.createElement('img')
    const myPlayer = getGamePlayer()
    if (myPlayer.class == 'arqueiro'){
        sprite.src = archerSprite
    } else if(myPlayer.class == 'guerreiro'){
        sprite.src = warriorSprite
    }
    player.appendChild(sprite)
}

document.addEventListener('keydown', (event)=>{
    andar(event.key, player)
})
