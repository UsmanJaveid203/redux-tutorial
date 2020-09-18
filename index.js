const redux = require('redux')

const createStore = redux.createStore;

// action creater
function buyBook(){
    return {
        // action wrapping the acttion in a single function
        type:"Buy_Book",
        Payload:"My First action"
    }
}

const initialState={
    numOfBook:10
}


const Reducer = (state = initialState ,action)=>{
        switch (action.type) {
            case "Buy_Book":
                return{
                    ...state,
                    numOfBook:state.numOfBook-1
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
unsubscribed();