
function convert(num,from,to){
    if(from === 'Celcius'){
        if(to==='Fahrenheit'){
            return (num*9/5)+32
        }
        if(to==='Kelvin'){
            return num+273.15
        }
    }
    else if(from === 'Fahrenheit'){
        if(to==='Celcius'){
            return ((num-32)*5/9)
        }
        if(to==='Kelvin'){
            return ((num-32)*5/9)+273.15
        }
    }
    else if(from === 'Kelvin'){
        if(to==='Celcius'){
            return num-273.15
        }
        if(to==='Fahrenheit'){
            return ((num-273.15)*9/5)+32
        }
    }
    if (from === to){
        return num
    }
    
}


function update(input1,input2,input3,model){
    const converted = convert(input1,input2,input3)
    const {yesno} = model
    
    if(yesno === 'y'){
        console.log('derecha')
        return {
            ...model,
            leftValue : input1,
            leftUnit : input2,
            rightValue : converted,
            rightUnit : input3

        }
    }
    else{
        return{
            ...model,
            leftValue : converted,
            leftUnit : input3,
            rightValue : input1,
            rightUnit : input2
        }
    }
}

module.exports = {update}