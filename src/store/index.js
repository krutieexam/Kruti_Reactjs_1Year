import rootSagas from "./sagas";
import { createLogger } from "redux-logger";
import CreateSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { ContactListReducer } from "./ContactList/reducers";
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { CONTACTLIST } from "./ContactList/types";


const appReducer = storage.reducer(combineReducers({
    ContactList: ContactListReducer,

}));

const rootReducer = (state, action) => {
    return appReducer(state, action);
}
const engine = createEngine('ContactList_App');
const storageMiddleware = storage.createMiddleware(engine, [], [CONTACTLIST.ADD_FAVOURITE, CONTACTLIST.REMOVE_FAVOURITE
]);
const loggerMiddleware = createLogger();

export default function configureStore() {
    const sagaMiddleware = CreateSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, loggerMiddleware, storageMiddleware));
    sagaMiddleware.run(rootSagas);
    const load = storage.createLoader(engine);
    load(store);
    return store;
}