class tareaJs{
    ejercicio1(){
        console.log(`1) Sumar dos numeros siempre y cuando el primero sea mayor al segundo`)
        let num1 = Math.floor(Math.random()*10), num2 = Math.floor(Math.random()*10), suma = num1 + num2
        console.warn(`Número 1: ${num1} 
Número 2: ${num2} `)
        if (num1 > num2){
            console.log(`La suma de los números es: ${suma}`)
        }else
            console.log(`No se pudo realizar la suma`)
    }

    ejercicio2(){
        console.warn(`2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo`)
        let num1 = 5, num2 = 2
        let suma = num1 + num2,  resta = num1 - num2, multiplicacion = num1 * num2, division = num1 / num2, residuo = num1 % num2
        console.log(`Se realizará una suma`)
        console.warn(`${num1} + ${num2} = ${suma}`)

        console.log(`Se realizará una resta`)
        console.warn(`${num1} - ${num2} = ${resta}`)

        console.log(`Se realizará una multiplicacion`)
        console.warn(`${num1} * ${num2} = ${multiplicacion}`)

        console.log(`Se realizará una division`)
        console.warn(`${num1} / ${num2} = ${division}`)

        console.log(`Se obtendrá un residuo`)
        console.warn(`${num1} % ${num2} = ${residuo}`)
        }

    ejercicio3(){
        console.warn(`3) Presentar el mayor de dos numeros`)
        let num1 = Math.floor(Math.random()*10), num2 = Math.floor(Math.random()*10)
        console.log(`Primer número: ${num1} -- Segundo Número: ${num2}`)
        if(num1>num2){
            console.warn(`${num1} es mayor`)
        }else{
            console.warn(`${num2} es mayor`)
        }
    }
       
    ejercicio4(){
        console.warn("4) Dado un nombre presentarlo")
        let nombre = "Josué Quevedo" 
        console.log(`El nombre es: ${nombre}`)
    }

    ejercicio5(){
        console.warn("5) Dado un valor de compra presentar el total considerando un 12% de iva")
        let valor = 150, iva = 0
        iva = valor * 0.12
        let total = iva + valor
        console.log(`El valor es: ${valor} y el valor total +iva es: ${total}`)
    }

    ejercicio6(){
        console.warn("6) Presentar 5 veces un nombre")
        let nombre = "Josué", cont = 0, rep = 5
        for(cont=0; cont<rep; cont++){
            console.log(nombre)
        }
    }

    ejercicio7(){
        console.warn("7) Presentar los numeros multiplos de 3 del 3 al 21")
        let cont = 3
        console.log(`Los múltiplos son: `)
        for(cont=3; cont<22; cont++)
        if(cont%3==0){
            console.log(cont)
        }
    }

    ejercicio8(){
        console.warn("8) Presentar los numeros multiplos de 3 del 21 al 3")
        let cont = 3
        console.log(`Los múltiplos son: `)
        for(cont=21; cont>2; cont--)
        if(cont%3==0){
            console.log(cont)
        }
    }

    ejercicio9(){
        console.warn("9) Dados dos nombres indicar si son iguales o diferentes")
        let name1 = 'Josué'
        let name2 = 'josué'
        
        if (name1.toLowerCase() === name2.toLowerCase()) {
          console.log('Son iguales')
        } else {
          console.log('No son iguales')
        }
    }

    ejercicio10(){
        console.warn("10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        let array = [1,12345,2,12346,3,89324,4,5432,5,6]
        for(let cont=0; cont<10; cont++){
        let w = array[cont]
        if (w.toString().length < 5) {
            console.log(w)
        }
    }
    }
    
    ejercicio11(){
        console.warn("11) Dado un arreglo presentar sus elementos")
        let array = [1,12345,2,12346,3]
        console.log("Los elementos del arreglo son:")
        for(let cont=0; cont<array.length; cont++) 
        console.warn(array[cont])
    }

    ejercicio12(){
        console.warn("12) Dado un arreglo de numeros presentar los menores a 10")
        let array = [1,12345,2,12346,3]
        console.log("Los números menores a 10 dentro del arreglo son:")
        for(let cont=0; cont<array.length; cont++) 
        if((array[cont])<10){
            console.warn(array[cont])
        }
    }
    

    ejercicio13(){
        console.warn("13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let array = [1,2,3,4,5,6], num, suma=0
        console.log("Los números impares del arreglo son:")
        for(let cont=0; cont<array.length; cont++){
        num = array[cont]
        if(num%2==0){
            suma = suma + num
        }else{
            console.warn(num)
        }
    }
        console.log("La suma de los números pares dentro del arreglo es:")
        console.warn(suma)
    }

    ejercicio14(){
        console.log(`14) Presentar el primero el medio y el ultimo valor de un arreglo`)
        let array = [1,2,3,4,5,6]
        let length = array.length
        let index = Math.floor(length/2)
        console.warn('El primer elemento del arreglo es: ', array[0])
        console.warn('El elemento en medio del arreglo es: ', array[index])
        console.warn('El último elemento del arreglo es: ', array[length-1])
    }

    ejercicio15(){
        console.log("15) Calcular el vuelto de una compra dado el costo y el pago")
        let vuelto = 0, costo = 27, pago  = 30
        vuelto = pago - costo
        console.warn("El vuelto a dar es de:")
        console.log(`${vuelto}$`)
    }

    ejercicio16(){
        console.log("16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let tabla = 5, cont = 1, c = 0
        console.warn("La tabla del 5 es:")
        for(cont = 1; cont < 13; cont++){
        c = tabla * cont
        console.log(c)
    }
    }

    ejercicio17(){
        console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let multiplicacion = 0, num1 = 5, num2 =4, cont = 1
        while(cont<=num2){
        multiplicacion = multiplicacion + num1
        cont = cont + 1
        }
        console.warn(`${num1} + ${num1} = ${multiplicacion}`)
    }

    ejercicio18(){
        console.log("18) Realizar la division de dos numeros por medio de restas sucesivas")
        let num1 = 5, num2 = 2, cont = 1
        while(cont<=num2){
            num1 = num1 - num2
            cont = cont + 1
        }
        console.warn(`El residuo es: ${num1} --- El cociente es: ${num2}`)
    }

    ejercicio19(){
        console.log("19) Calcular el factorial de un numero")
        let fact = 1, num1 = Math.floor(Math.random()*10)
        for(let cont = num1; cont > 0; cont--){
            fact = cont * fact
        }
        console.warn(`El factorial de ${num1} es: ${fact}`)
    }

    ejercicio20(){
        console.log("20) Calcular el exponente de un numero")
        let exp = Math.floor(Math.random()*10), num = Math.floor(Math.random()*10), cont = 1, potencia = 1
        while(cont <= exp){
        potencia = potencia * num
        cont = cont + 1
        }
        console.warn(`El exponente con valor ${exp} de ${num} es: ${potencia}`)
    }

    ejercicio21(){
        console.log("21) Calcular la serie de fibonacci dado un numero")
        let num = 8, cont = 3, a = 0, b = 1, c = 1
        console.warn(a, b, c)
        while(cont<num){
            a = b
            b = c
            c = a + b
            console.log(c)
            cont = cont + 1
        }
    }

    ejercicio22(){
        console.log("22) Dado un numero invertirlo")
        let num = Math.floor(Math.random()*1000), numinv = 0, numinver = ""
        console.warn(`Número: ${num}`)
        while(num>0){
            numinv = Math.floor(num%10)
            num = Math.floor(num/10)
            numinver += numinv
        }
        console.warn(`Número invertido: ${numinver}`)
    }

    ejercicio23(){
        console.log("23) Presentar los divisores de un numero")
        let num = Math.floor(Math.random() * (10 - 2 + 1)) + 2
        let divisores = 0, cont = 1, pres = ""
        for (cont=1; cont<num; cont++){
        if (num % cont == 0){
            divisores = cont
            pres += divisores + "  "
        }
    }
    console.warn(`Los números divisores de ${num} son: ${pres}`)
    }

    ejercicio24(){
        console.log("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)")
        let num = Math.floor(Math.random() * (20 - 2 + 1)) + 2
        let divisores = 0, cont = 1, pres = 0
        for (cont=1; cont<num; cont++){
        if (num % cont == 0){
            divisores = cont
            pres += divisores
        }
    }
    if (pres == num){
        console.warn(`El número ${num} es perfecto`)
    } else {
        console.warn(`El número ${num} no es perfecto`)
    }
    }

    ejercicio25(){
        console.log("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)")
        let num = Math.floor(Math.random() * (20 - 2 + 1)) + 2
        let divisores = 0, cont = 1, pres = 0
        for (cont = 1; cont < num; cont++){
        if (num % cont == 0){
            divisores = cont
            pres += divisores
        }
        }   
        if (pres == 1) {
            console.warn(`El número ${num} es un número primo`)
        } else {
            console.warn(`El número ${num} no es un número primo`)
        }
    }

}
let tarea = new tareaJs()
tarea.ejercicio1()
//tarea.ejercicio2()
//tarea.ejercicio3()
//tarea.ejercicio4()
//tarea.ejercicio5()
//tarea.ejercicio6()
//tarea.ejercicio7()
//tarea.ejercicio8()
//tarea.ejercicio9()
//tarea.ejercicio10()
//tarea.ejercicio11()
//tarea.ejercicio12()
//tarea.ejercicio13()
//tarea.ejercicio14()
//tarea.ejercicio15()
//tarea.ejercicio16()
//tarea.ejercicio17()
//tarea.ejercicio18()
//tarea.ejercicio19()
//tarea.ejercicio20()
//tarea.ejercicio21()
//tarea.ejercicio22()
//tarea.ejercicio23()
//tarea.ejercicio24()
//tarea.ejercicio25()

