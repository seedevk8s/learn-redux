// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';


let nextId = 1;
// 액션 생성 함수 
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 초기 상태 선언
const initialState = [
    /*
        {
            id: 1,
            text: '예시',
            done: false
        }
    */
];

// 리듀스 작성해서 내보내줌.
export default function totods(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map( todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo  // 같으면 done값을 바꿔주고, 그렇지 않으면 유지.
            );

        default:         // 자신이 처리할수 없는 액션이면 default 처리
            return state;
    }

   
}















