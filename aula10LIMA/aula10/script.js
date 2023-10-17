var resultado1 = document.getElementById('resultado1')

    function calcular(){
        let  a = Number.parseFloat(document.getElementById('a').value);
        let  b = Number.parseFloat(document.getElementById('b').value);
        let  c = Number.parseFloat(document.getElementById('c').value);

        var conta1 = 'O resultado da conta (a + b) / c e ' + (a + b) / c
        console.log(conta1)
        
        resultado1.innerHTML = conta1
    }



var resultado2 = document.getElementById('resultado2')

    function calcularTempo1(){
        let velocidade = Number.parseFloat(document.getElementById('velocidade').value)
        let distancia = Number.parseFloat(document.getElementById('distancia').value)

        let conta2 = distancia / velocidade
        console.log(conta2)

        resultado2.innerHTML =`${conta2.toFixed(2)} horas`
    }



var resultado3 = document.getElementById('resultado3')

    function calcularReajuste(){
        let nome = document.getElementById('nome').value
        let salario = Number.parseInt(document.getElementById('salario').value)
        let reajuste = Number.parseInt(document.getElementById('reajuste').value)

        let novoSalario = salario + (salario * reajuste / 100)
        console.log(nome, salario, novoSalario)

        resultado3.innerHTML = nome + ' tem um salário de R$ ' + novoSalario.toFixed(2) + ' após o reajuste de ' + reajuste + '%' 
    }



var resultado4 = document.getElementById('resultado4')

    function calcularPontos(){
        let time = document.getElementById('time').value
        let vitorias =Number.parseInt(document.getElementById('vitorias').value)
        let empates = Number.parseInt(document.getElementById('empates').value)

        let pontos = vitorias * 3 + empates
        console.log(time,vitorias,empates,pontos)

        resultado4.innerHTML = `O time ${time} tem um total de ${pontos} pontos, com ${vitorias} vitórias e ${empates} empates.`
    }



var resultado5 = document.getElementById('resultado5')

function calcularSequencia(){
        let n = Number.parseInt(document.getElementById('n').value)
        let antecessor
        let sucessor

        if(n > 0 ){
            antecessor = n - 1
            sucessor = n + 1
            resultado5.innerHTML = `A sequência fica ${antecessor} ${n} ${sucessor}`
        }else{
            resultado5.innerHTML = `Coloque um valor maior que 0 para n`
        }
        console.log(antecessor, n, sucessor)
    }



var resultado6 = document.getElementById('resultado6')

    function calcularTempo2(){
        let velocidade = 900
        let distancia2 = Number.parseInt(document.getElementById('distancia2').value)

        let conta3 = distancia2 / velocidade
        console.log(velocidade,distancia2,conta3)

        resultado6.innerHTML = conta3 + ' Horas'
    }



var resultado7 = document.getElementById('resultado7')

        function viagens(){
            let caminhao = Number.parseInt(document.getElementById('caminhao').value)
            let alqueire = Number.parseInt(document.getElementById('alqueire').value)

            let viagens = Math.ceil((alqueire * 250) / (caminhao * 18))
            console.log(caminhao, alqueire, viagens)

            resultado7.innerHTML = `São necessárias: ${viagens} viagens`

        }



var resultado8 = document.getElementById('resultado8')
        

        function calcularCilindro(){
            let raio = Number.parseFloat(document.getElementById('raio').value)
            let altura = Number.parseFloat(document.getElementById('altura').value)
            let pi = 3.1415
            let area = 2 * pi * raio * (raio + altura);
            let volume = pi*raio*raio*altura

            resultado8.innerHTML = `O cilindro tem uma área de ${area.toFixed(2)}cm³ e um volume de ${volume.toFixed(2)}cm³`
        }
        


var resultado9 = document.getElementById('resultado9')

        function calcularAumento(){
            let nome2 = document.getElementById('nome2').value
            let preco = Number.parseFloat(document.getElementById('preco').value)

            let novoPreco = preco + (preco * 5 /100)
            console.log(nome2,preco,novoPreco)

            resultado9.innerHTML = `O produto "${nome2}" teve um aumento de 5% e de ${preco} agora custa ${novoPreco}`
        }



var resultado10 = document.getElementById('resultado10')

        function calcularPorcentagem(){
            let cidade = document.getElementById('cidade').value
            let eleitores = Number.parseInt(document.getElementById('eleitores').value)
            let votos = Number.parseInt(document.getElementById('votos').value)

            let participacao = votos / eleitores * 100
            console.log(cidade,eleitores,votos,participacao)

            resultado10.innerHTML = 'A cidade ' + cidade + ' teve uma participação de ' + participacao.toFixed(2) + '% dos votos'
        }