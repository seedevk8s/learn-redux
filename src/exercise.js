import {createStore} from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({    
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 생성   -- 리덕스의 초기상태 만듦.
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE: 
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };        

        default:
            return state;
    }
} 

// 스토어 생성
const store = createStore(reducer);

console.log(store.getState());


const listener = () => {
    const state = store.getState();
    console.log(state);    
}
// 구독
const unsubscribe = store.subscribe(listener);
// 구독 해제
// unsubscribe();

// 액션들을 디스패치할때마다  위의 리스너에서 콘솔에 출력하게 해놓음.
store.dispatch(increase());     //increase 액션을 만들어서 디스패치함.
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요!!!'));
store.dispatch(addToList({ id:1, text: '와우!!!'}));

window.store = store;

//디스패치하니까 스토어의 상태가 업데이트됨.



window.unsubscribe = unsubscribe;













