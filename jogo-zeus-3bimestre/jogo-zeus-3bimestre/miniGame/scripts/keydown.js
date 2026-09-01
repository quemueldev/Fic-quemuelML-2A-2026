let keys = {
        w: '1',
        a: '-10',
        d: '10',
        s: 'down',
        ArrowUp: '1',
        ArrowLeft: '-10',
        ArrowRight: '10',
        ArrowDown: 'down',
}

export function andar(key, player){
    const action = parseInt(keys[key])
    let marginHorizontal = parseInt(player.style.marginLeft)

    marginHorizontal += action // eu sei que soma ao pular, so to com preguiça
    if(action == 1) pular(player)
    player.style.marginLeft = `${marginHorizontal}px`
}


function pular(player) {
    //peguei a logica
    let posicao = 90;
    let inGround = true;
    let vertical = 0;
    const jumpForce = 15;
    const gravity = 0.8;

    if (!inGround) return; 
    inGround = false;
    vertical = jumpForce;

    function atualizarLoop() {
        // Atualiza a posição pela velocidade atual
        posicao += vertical;    
        // Aplica a gravidade
        vertical -= gravity;
        
        if (posicao <= 90) {
            posicao = 90;
            inGround = true;
            vertical = 0;
            return;
        }
        player.style.bottom = `${posicao}px`;
        requestAnimationFrame(atualizarLoop);// gera fluidez
    }
    requestAnimationFrame(atualizarLoop);
}

