import * as types from './constants'
import { fromJS } from 'immutable'

const defaultStatus = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 1
})

export default (state = defaultStatus, action) => {
    switch (action.type) {
        case types.SEARCH_FOCUS:
            return state.set('focus', true)
        case types.SEARCH_BLUR:
            return state.set('focus', false)
        case types.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case types.MOUSE_IN:
            return state.set('mouseIn', true)
        case types.MOUSE_OUT:
            return state.set('mouseIn', false)
        case types.CHANGE_PAGE:
            return state.set('page', action.data)
        default:
            return state
    }
}
