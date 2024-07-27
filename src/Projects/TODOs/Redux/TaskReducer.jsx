
const initialState = []

const generateId=()=>{
    return Math.trunc(Math.random()*100000)
}

function taskReducer(state= initialState,action){
    switch(action.type){
        case "add" :
            let obj = {task: action.payload, id: generateId()}
            return [...state, obj]
        case "del" :
            return state.filter(ele => ele.id != action.payload)
        default:
            return state
    }
}

export default taskReducer