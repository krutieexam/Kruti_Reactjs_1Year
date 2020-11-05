import { CONTACTLIST } from './types'

export const contactListPending = () => {
    return {
        type: CONTACTLIST.GET_CONTACTLIST_PENDING,

    };
};

export const contactListSuccess = (response) => {
    return {
        type: CONTACTLIST.GET_CONTACTLIST_SUCCESS,
        payload: response
    };
};

export const contactListError = (err) => {
    return {
        type: CONTACTLIST.GET_CONTACTLIST_ERROR,
        payload: err
    };
};

export const contactDetailPending = (request) => {
    return {
        type: CONTACTLIST.CONTACT_DETAIL_PENDING,
        payload: request
    };
};

export const contactDetailSuccess = (response) => {
    return {
        type: CONTACTLIST.CONTACT_DETAIL_SUCCESS,
        payload: response
    };
};

export const contactDetailError = (err) => {
    return {
        type: CONTACTLIST.CONTACT_DETAIL_ERROR,
        payload: err
    };
};

export const addFavourite = (item) => {
    return {
        type: CONTACTLIST.ADD_FAVOURITE,
        payload: item
    };
};

export const removeFavourite = (id) => {
    return {
        type: CONTACTLIST.REMOVE_FAVOURITE,
        payload: id
    };
};


