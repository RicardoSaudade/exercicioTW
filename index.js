/* 
    FUNCTION: minhaFuncao
    DESCRIPTION: Recebe uma string com o tamanho da ilha e pelo menos um drone. 
    Mas pode receber infinitos drones após o tamnho da ilha, conforme exercicio proposto.
    ATRIBUTES: String de entrada conforme exercício.
    AUTHOR: @ricardoSaudade
    SINCE: 08/07/2018
*/
function minhaFuncao(entrada) {

    //Declarando variaveis auxiliares
    var arrayFinal = [];
    var arrayDeResponstas = [];
   
    //Retirando o tamanho da ilha da string de entrada
    var matriz = entrada.slice(0,3);
    entrada = entrada.replace(matriz, "");
    entrada = entrada.replace(" ", "");

    //Quebrando a string de entrada em Drones e Comandos
    for (var i = 0; i < entrada.length; ++i) {

        var arrayToPush = [];

        this["posicaoDrone"+i] = entrada.slice(0,5);
        entrada = entrada.replace(this["posicaoDrone"+i],"");
        entrada = entrada.replace(" ", "");

        this["array"+i] = entrada.split(" ");
        this["comandos"+i] = this["array"+i][0];
        entrada = entrada.replace(this["comandos"+i], "");
        entrada = entrada.replace(" ", "");

        arrayToPush.push(this["posicaoDrone"+i]);
        arrayToPush.push(this["comandos"+i]);

        //populando um Array de drones
        arrayFinal.push(arrayToPush);
    }  
    
    arrayFinal.forEach(element => {
        
        //Colocando o drone na sua posição inicial na ilha
        var arrayPosicaoInicial = element[0].split(' ');
        var posicaoInicialX = arrayPosicaoInicial[0];
        var posicaoInicialY = arrayPosicaoInicial[1];
        var narizDrone = arrayPosicaoInicial[2];

        var arrayComandos = element[1].split("");

        //Movimentando os Drones dentro da ilha
        for (var index = 0; index < arrayComandos.length; index++) {
       
            switch (arrayComandos[index]) {
                case 'E':
                    if(narizDrone === 'N') {
                        narizDrone = 'W';
                        break;
                    }
                    if (narizDrone === 'E') {
                        narizDrone = 'N';
                        break;
                    }
                    if (narizDrone === 'S') {
                        narizDrone = 'E';
                        break;
                    }
                    if (narizDrone === 'W') {
                        narizDrone = 'S';
                        break;
                    }    
                   
           
                case 'D':
                    if(narizDrone === 'N') {
                        narizDrone = 'E';
                        break;
                    }
                    if (narizDrone === 'E') {
                        narizDrone = 'S';
                        break;
                    }
                    if (narizDrone === 'S') {
                        narizDrone = 'W';
                        break;
                    }
                    if (narizDrone === 'W') {
                        narizDrone = 'N';
                        break;
                    }
               
                case 'M':
                    if(narizDrone === 'N') {
                        posicaoInicialY++;
                        break;    
                    }
                    if (narizDrone === 'E') {
                        posicaoInicialX++;
                        break;
                    }
                    if (narizDrone === 'S') {
                        posicaoInicialY--;
                        break;
                    }
                    if (narizDrone === 'W') {
                        posicaoInicialX--;
                        break;
                    }
            }
        }
        
        // Populando um array com as posições finais dos drones
        var stringAuxiliar = posicaoInicialX+" "+posicaoInicialY+" "+narizDrone;
        arrayDeResponstas.push(stringAuxiliar);

    });

    //Percorrendo o array de respostas
    for (let index = 0; index < arrayDeResponstas.length; index++) {
        
        //escrevendo no console a resposta pedida pelo exercício
        console.log(arrayDeResponstas[index]);
        
    }
}