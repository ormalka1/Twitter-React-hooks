import { ADD_NOTIFICATION } from '../actions/notificationsActions'


export default function notificationsReducer(state = [], action) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            const { id, isLiked } = action.tweet;
            return [...state, { id, isLiked }];

        default:
            return state;
    }
}