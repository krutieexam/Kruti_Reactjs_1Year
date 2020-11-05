import { all } from "redux-saga/effects";
import { contactListWatcher, contactDetailWatcher } from "./ContactList/sagas";

export default function* rootSagas() {
    yield all([
        contactListWatcher(),
        contactDetailWatcher(),
    ]);
};
