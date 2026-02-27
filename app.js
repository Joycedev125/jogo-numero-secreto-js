// Jogo do número secreto.
// Autor: Joyce Rodrigues Sena
// Data: 11/02/2026
            alert('Boas-vindas ao jogo do número secreto!');
            let numeroMaximo = 1000;
            let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
            let chute;
            console.log ('Escolha:', chute);
            let tentativas = 1;
            //Enquanto
            while (chute != numeroSecreto)
                {
                chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
                // Se chute for igual ao número secreto:
                if (chute == numeroSecreto)
                {
                    break;
                }
                // Se não:
                else
                    {
                    if (chute < numeroSecreto)
                    {
                alert (`Você errou. O número secreto é maior que ${chute}`);
                }
                else
                    {
                        alert (`Você errou. O número secreto é menor que ${chute}`);
                    }
                    // Incremento de valor na variável tentativas;
                    tentativas ++
                }
            }
            // if (tentativas > 1) {
                    // alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
                // }
                // else {
                        // alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
                    // }
                    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                    alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);