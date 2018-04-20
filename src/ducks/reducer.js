import axios from 'axios';

const initialState = {
    username: '',
    id: '',
    img: ''
};

const LOGIN = 'LOGIN';

export default function(state = initialState, action) {
    let {payload} = action;
    switch(action.type) {
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {username: payload.username, id: payload.id, img: payload.img})
    default: return state;
    }
}

export function login(obj, history) {
    return {
        type: LOGIN,
        payload: axios.post(URL.login,obj).then(response => {
            history.push('/login');
            return response.data;
        })
    };
}