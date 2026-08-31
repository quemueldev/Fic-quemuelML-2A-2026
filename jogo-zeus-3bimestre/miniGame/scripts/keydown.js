let keys = {
        w: 'up',
        a: 'left',
        d: 'right',
        s: 'down',
        ArrowUp: 'up',
        ArrowLeft: 'left',
        ArrowRight: 'right',
        ArrowDown: 'down',
}


export function andar(key, player){
    const action = keys[key]
    let marginVertical = parseInt(player.style.marginLeft)
    if(action === 'right') {
        marginVertical += 10
    } else if(action == 'left'){
        marginVertical -= 10
    }
    player.style.marginLeft = `${marginVertical}px`

}
function pular(){
    
}

