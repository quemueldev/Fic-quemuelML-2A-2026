import {fieldRequired, getCancelBtn, getDellBtn, getLi, getUpdateBtn, getGameBtn} from './utils.js'
import {createPlayer, getPlayer, removePlayer, updatePlayer} from './crud.js'
//componentizae !!!

const updateForm = document.getElementById("updateForm")
const cancelBtn = getCancelBtn()

cancelBtn.addEventListener("click", ()=>{
    updateForm.style.display = "none"
})

updateForm.appendChild(cancelBtn)

updateForm.addEventListener("submit", (e)=>{

    const playerId = updateForm.dataset.editingId
    const nameInput = document.getElementById("updatePlayerName")
    const classInput = document.querySelector("input[name='updateClasse']:checked")
    fieldRequired(nameInput.value, classInput?.value)

    updatePlayer({
        name: nameInput.value,
        class: classInput?.value
    }, playerId)
})

function createPlayerItem(players, playerList, render){
    players.forEach((player)=>{
        const {li, dellBtn, updateBtn, gameBtn} = initializer(player)
       
        dellBtn.addEventListener("click", ()=>{
            removePlayer(player?.id)
            render()
        })

        updateBtn.addEventListener("click", ()=>{
            updateForm.dataset.editingId = player?.id
            updateForm.style.display = "block"
        })

        gameBtn.addEventListener('click', ()=>{
            window.location.href = `miniGame/index.html?id=${player?.id}`
        })

        li.appendChild(gameBtn)
        li.appendChild(updateBtn)
        li.appendChild(dellBtn)
        playerList.appendChild(li)
    })
}

const initializer = (player)=>{
    return {
        li: getLi(player), 
        dellBtn:getDellBtn(), 
        updateBtn: getUpdateBtn(),
        gameBtn: getGameBtn(),
    }
}

export {createPlayerItem}