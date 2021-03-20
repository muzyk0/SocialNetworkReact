import React, {createContext} from 'react';
import {store, StoreType} from './redux-store';

export const StoreContext = createContext<StoreType>(store)

export const Provider = (props: any) => {
    return <StoreContext.Provider value={props.store} >
        {props.children}
    </StoreContext.Provider>
}