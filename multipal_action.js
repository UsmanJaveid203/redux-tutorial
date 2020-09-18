const redux = require('redux')

const createStore = redux.createStore;


const initialState={
    numOfBook:10,
    numOfPen:20
}


// action creater
function buyBook(){
    return {
        // action wrapping the acttion in a single function
        type:"Buy_Book",
        Payload:"My First action"
    }
}

function buyPen(){
    return {
        // action wrapping the acttion in a single function
        type:"Buy_Pen",
        Payload:"My Second action"
    }
}

const Reducer = (state = initialState ,action)=>{
        switch (action.type) {
            case "Buy_Book":
                return{
                    ...state,
                    numOfBook:state.numOfBook-1
                }

            case "Buy_Pen":
                return{
                    ...state,
                    numOfPen:state.numOfPen-2
                }
            default: return state;
        }
}

const store =createStore(Reducer);

console.log("Initial value : ", store.getState());
const unsubscribed=store.subscribe(()=>{
    console.log('Update State Value', store.getState())
})
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribed();