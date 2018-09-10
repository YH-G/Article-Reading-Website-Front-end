import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({ // merge可同时更改多个state内容
                list: action.data,
                totalPage: action.totalPage
            })
            //return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }


    // if (action.type === constants.SEARCH_FOCUS) {
    //     // immutable对象的set方法， 会结合之前immutable对象的值
    //     // 和设置的值，反回一个全新的对象
    //     return state.set('focused', true);
    //     /*return { 原始写法
    //         focused: true
    //     }*/
    // }

    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focused', false);
    //     /*return {
    //         focused: false
    //     }*/
    // }
    
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data); //fromJS将state变为immutable的时候，会把list数组也变成immutable数组，所以set list的时候需要传过来一个immutable数组，这个immutable数组可在actionCreator中生成
    // }
    // return state;
}