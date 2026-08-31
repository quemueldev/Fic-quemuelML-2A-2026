// explicar o funcionamento do localstorage e pq usar stringfy, parse
// explicar pq vira um array 
// exolicar o uso chave: array, onde o normal e chave:valor
function getPlayer() {
    return JSON.parse(localStorage.getItem("players")) || [];
    //exp: {name: 'fulano', class: 'guerreiro'}
}

function createPlayer(player, id) {
    console.log('veio :', player)
    const players = getPlayer();
    players.push({
        id: id || crypto.randomUUID(),
        ...player
    });

    return localStorage.setItem("players", JSON.stringify(players));
    //exp: "{name: 'fulano', class: 'guerreiro'}"
}

function removePlayer(id){
    const players = getPlayer();
    const formatedPlayers = players.filter(player => {
        
        return player.id !== id
    });
    localStorage.setItem("players", JSON.stringify(formatedPlayers));
}
function updatePlayer(updatedData, id) {
    const players = getPlayer();
    const updatedArray = players.map((player)=>{
        if (player.id === id){
            return {
                id:id,
                ...updatedData
            }
        }
        return player
    })
    localStorage.setItem("players", JSON.stringify(updatedArray));
}

function clearPlayer(){
    return localStorage.removeItem("players");
}

export {
    createPlayer, 
    getPlayer, 
    clearPlayer, 
    removePlayer, 
    updatePlayer
};