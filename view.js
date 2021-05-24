const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

function getTitle(){
    return chalk.blue(figlet.textSync('Unit converter',{horizontalLayout: 'full',font: 'Nancyj-Underlined'}));
}

function getTable(model){
    const {leftValue} = model;
    const {leftUnit} = model;
    const {rightValue} = model;
    const {rightUnit} = model;
    return [
        {'leftValue': leftValue},
        {'leftUnit': leftUnit},
        {'rightValue': rightValue},
        {'rightUnit': rightUnit}
    ];
}


function yesNo(model){
    const {yesno} = model;
    const message = 'Left temperature is source?';
    return inquirer.prompt(
        {
            name : 'yn',
            type : 'input',
            message : message,
            default : yesno,
            validate : function(value){
                if (value === 'y'|| value === 'n'){
                    return true;
                }
                else{
                    return 'Enter a valid unit'
                }
            }
        })
}   

function valueInput(model){
    const {leftUnit} = model;
    const {leftValue} = model;
    const {rightUnit} = model;
    const {yesno} = model;
    const message = 'Temperature value to convert';
    const message2 = 'From?';
    const message3 = 'To?';
    if (yesno === 'y'){
        return inquirer.prompt([
            {
                name : 'input1',
                type : 'input',
                message : message,
                default : leftValue,
                validate : function(value){
                    if (value >= -1000 ){
                        return true;
                    }
                    else{
                        return 'Enter a valid number';
                    }
                }
            },
            {
                name : 'input2',
                type : 'input',
                message : message2,
                default : leftUnit,
                validate : function(value){
                    if (value === 'Celcius'|| value === 'Fahrenheit'|| value === 'Kelvin'){
                        return true;
                    }
                    else{
                        return 'Enter a valid unit'
                    }
            }
        },
        {
            name : 'input3',
            type : 'input',
            message : message3,
            default : rightUnit,
            validate : function(value){
                if (value === 'Celcius'|| value === 'Fahrenheit'|| value === 'Kelvin'){
                    return true;
                }
                else{
                    return 'Enter a valid unit'
                }
            }
        }
        ])
    }
    else{
        return inquirer.prompt([
            {
                name : 'input1',
                type : 'input',
                message : message,
                default : leftValue,
                validate : function(value){
                    if (value >= -1000 ){
                        return true;
                    }
                    else{
                        return 'Enter a valid number';
                    }
                }
            },
            {
                name : 'input2',
                type : 'input',
                message : message2,
                default : leftUnit,
                validate : function(value){
                    if (value === 'Celcius'|| value === 'Fahrenheit'|| value === 'Kelvin'){
                        return true;
                    }
                    else{
                        return 'Enter a valid unit'
                    }
            }
        },
        {
            name : 'input3',
            type : 'input',
            message : message3,
            default : leftUnit,
            validate : function(value){
                if (value === 'Celcius'|| value === 'Fahrenheit'|| value === 'Kelvin'){
                    return true;
                }
                else{
                    return 'Enter a valid unit'
                }
            }
        }
        ])
    }
}


function view (model){
    return{
        title : getTitle(),
        table : getTable(model)
    }
}



module.exports = {getTitle,valueInput,view,yesNo}