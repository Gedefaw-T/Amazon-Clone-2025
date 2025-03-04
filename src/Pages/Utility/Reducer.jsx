
import {Type} from "./ActionType"

export const initialState ={
    basket:[],
    user:null 
}

// reducer function to add and remove items from and to basket
export const reducer = (state, action)=>{
    switch(action.type){
    case Type.ADD_TO_BASKET:
        const existingItem = state.basket.find((item)=> item?.id === action?.item?.id)
        if (!existingItem){
        return{
        ...state,
        basket:[...state.basket, {...action.item, amount:1}]
        }
    }
    else{
        const updatedBasket = state.basket.map((item)=>{
          return  item?.id === action.item?.id? {...item, amount:item.amount + 1} : item
        })
        return {
            ...state,
            basket: updatedBasket
        }
    }
    default:
        return state;
}

}