//Exercício 1
    //Parte 1
    let escope = escopo => {
        let ifScope;
        let elseScope;
        if (escopo === true) { 
            ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
            ifScope = ifScope + `ótimo, fui utilizada no escopo !`;
            console.log(ifScope);
        } else {
            elseScope = `Não devo ser utilizada fora meu escopo (else)`;
            console.log(elseScope);
        }
            console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
    }
    console.log(escope(true));

    //Parte 2
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    const ordered = (a, b) => {
        return a - b;
    };

    oddsAndEvens.sort(ordered);
    console.log(`os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

    
    
//Exercício 2
    //Parte 1
        const fatorial = número => {
            let fatorado = 1;
            for (let index = 1; index <=  número; index+= 1){
                fatorado *= index;
            }        
        }

    //Parte 2
        const maior = frase => {
            const splited = frase.split(" ");
            let maior = 0;
            let palavra = null;
            splited.forEach(function(str) {
                    if (maior < str.length) {
                        maior = str.length;
                        palavra = str;
                    }
            });
            console.log(maiorPalavra("bom dia a todos"));
        }

    //Parte 3 - Em HTML
    //Parte 4
        let replaced;
        let string = "Tryber X aqui"; 
        const findX = (name) => {
            replaced = string.replace("X", name);
            console.log(replaced);
        }
        findX("Samuel");

        const habilities = ["JavaScript", "HTML", "CSS", "GitHub", "Unix & Bash"];
        const presentation = () => {
            console.log(`${replaced}. Minhas habilidades são:
            ${habilities.sort()[0]}
            ${habilities.sort()[1]}
            ${habilities.sort()[2]}
            ${habilities.sort()[3]}
            ${habilities.sort()[4]}`)
        }
        presentation();
            

