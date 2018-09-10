import { combineReducers } from 'redux-immutable'; // 可用来结合多个小reducer
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({ //导入小的reducer结合为一个大的reducer
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;