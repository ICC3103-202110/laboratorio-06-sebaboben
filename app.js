const {getTitle, yesNo} = require('./view');
const {valueInput} = require('./view');
const {printTable} = require('console-table-printer')


//func impura
async function app(state ,update ,view){
    while (true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        console.clear();
        console.log(title);
        printTable(table);
        const {yn} = await yesNo(model);
        const x = {
            ...model,
            yesno : yn
        }
        state = {
            ...state,
            model : x
        }
        const {input1,input2,input3} = await valueInput(model);
        const updatedModel = update(input1,input2,input3,model);
        state = {
            ...state,
            model : updatedModel,
            currentView : view(updatedModel)
        }
    }
}

module.exports = {app}