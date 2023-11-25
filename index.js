myNivel(100, 15)

function myNivel (win, lose)
    {
    let yourBalance = win - lose
    console.log(yourBalance)

    let win1 = "Nivel de Ferro" //Se vitórias for menor do que 10 = Ferro
    let win2 = "Nivel de Bronze" // Se vitórias for entre 11 e 20 = Bronze
    let win3 = "Nivel de Prata" // Se vitórias for entre 21 e 50 = Prata
    let win4 = "Nivel de Ouro" // Se vitórias for entre 51 e 80 = Ouro
    let win5 = "Nivel de Diamante" // Se vitórias for entre 81 e 90 = Diamante 
    let win6 = "Nivel Lendário" // Se vitórias for entre 91 e 100 = Lendário
    let win7 = "Nivel Imortal" // Se vitórias for maior ou igual a 101= Imortal
   
    
    // Estrutura de decisão conforme variaveis acima.
    if (yourBalance < 10)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win1)
    }
    
    else if (yourBalance >= 11 && yourBalance <= 20)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win2)
    }
    
    else if (yourBalance >= 21 && yourBalance <= 50)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win3)
    }
    
    else if (yourBalance >= 51 && yourBalance <= 80)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win4)
    }
    
    else if (yourBalance >= 81 && yourBalance <= 90)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win5)
    }
    
    else if (yourBalance >= 91 && yourBalance <= 100)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win6)
    }
        
    else if (yourBalance >= 101)
    {
    console.log ("O Heroi tem saldo de " + yourBalance + " vitórias e está no " + win7)
    }

    }

    
    