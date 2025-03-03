
import {Type} from "./ActionType"

export const initialState ={
    basket:[],
    user:null 
}
export const reducer = (state, action)=>{
    switch(action.type){
    case Type.ADD_TO_BASKET:

   
    return {
        ...state,
        basket:[...state.basket,action.item]

    }
    default:
        return state;
}

}