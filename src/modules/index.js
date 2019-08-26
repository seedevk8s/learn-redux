import  {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀스를 만듦.
const rootReducer = combineReducers({
    counter,
    todos
});

// 내보내준다
export default rootReducer;
