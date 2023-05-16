function doSomething(val)
{
    console.log('Hey Its workng')

    if(val > 3)
    {
        console.log('Hllo')
    }
    else{
        console.log('poetry')
    }

    var m = ['hi', 'hello' , 'go']
    for(i in m)
    {
        console.log(i)
    }

    var n = {prices : 30 , qty : 3}
    for(i in n)
    {
        console.log(i)
        console.log(n[i])
    }

    console.log(5 == '5') //true
    console.log(5 != '5') //false

    console.log(5 === '5')  //false
    console.log(5 !== '5') //true

    document.write('Hii write a document')
}