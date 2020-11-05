import { takeEvery, all, fork, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { CONTACTLIST } from './types'
import { contactListSuccess, contactListError, contactDetailSuccess, contactDetailError } from './actions';


function getContactList() {
    return Axios.get('https://reqres.in/api/users').then(response => ({ response }), error => ({ error }));
}
function* ContactList(action) {
    const { response, error } = yield getContactList();
    console.log(response)
    if (response) {
        yield put(contactListSuccess(response.data))
    } else { yield put(contactListError(error)) }
};
export function* contactListWatcher() {
    yield takeEvery(CONTACTLIST.GET_CONTACTLIST_PENDING, ContactList)
}

function getContactDetail(request) {
    return Axios.get('https://reqres.in/api/users/' + request.id).then(response => ({ response }), error => ({ error }));
}
function* ContactDetail(action) {
    const { response, error } = yield getContactDetail(action.payload);
    console.log(response)
    if (response) {
        yield put(contactDetailSuccess(response.data))
    } else { yield put(contactDetailError(error)) }
};
export function* contactDetailWatcher() {
    yield takeEvery(CONTACTLIST.CONTACT_DETAIL_PENDING, ContactDetail)
}
