
import { DECREAMENT, INCREAMENT } from './../actions/actions-type';
const initialeState={
    count:0
}
export const counter=(state=initialeState,action)=>{
const {type,payload}=action
    switch(type){
        case INCREAMENT:
            return {
                count:state.count +1
            }
        case DECREAMENT:
            return{
                count:state.count-1
            }
       default:
           return state
        
    }
    
}