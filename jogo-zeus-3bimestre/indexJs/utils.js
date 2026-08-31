
function load(fn){
    window.addEventListener('load', ()=>{
        return fn();
    });
}
function fieldRequired(par1, par2){
    if (!par1 || !par2) {
        alert("Por favor, preencha todos os campos.");
        return
    }
}
export {load, fieldRequired}

//services
export function getLi(player){
    const li = document.createElement('li')
    li.textContent = `Nome: ${player?.name} - Classe: ${player?.class}`
    li.dataset.id = player?.id
    li.classList.add("playerItem")
    return li
}
export function getDellBtn(){
    const dellBtn = document.createElement('button')
    dellBtn.textContent = "Deletar"
    return dellBtn
}
export function getUpdateBtn(){
    const updateBtn = document.createElement('button')
    updateBtn.textContent = "Atualizar"
    return updateBtn
}
export function getCancelBtn(){
    const cancelBtn = document.createElement('button')
    cancelBtn.textContent = "Cancelar"
    return cancelBtn
}
export function getGameBtn(player){
    const gameBtn = document.createElement('button')
    gameBtn.textContent = 'Jogar'
    gameBtn.dataset.id = player?.id
    return gameBtn
}
