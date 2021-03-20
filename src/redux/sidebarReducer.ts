import {ActionsType, SidebarType} from './store';

const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Nasty',},
        {id: 3, name: 'Vova',},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {

    switch (action.type) {
        default:
            return state
    }
}