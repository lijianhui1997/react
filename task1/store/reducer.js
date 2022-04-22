import {combineReducers} from 'redux';

//counter
let counter = (state=0, action) => {
    switch(action.type) {
        case 'add':
            return state+action.value;
        case 'de':
            return state-action.value;
        default:
            return state;
    }
}

//todolist
let initValue = {
    list: []
}
let todo = (state=initValue, action) => {
    //匹配
    switch(action.type) {
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            let deState = JSON.parse(JSON.stringify(state));
            //删除
            deState.list.splice(action.value, 1);
            return deState;
        default:
            return state;
    }
}

export default combineReducers({   
    counter:counter,todo:todo
});