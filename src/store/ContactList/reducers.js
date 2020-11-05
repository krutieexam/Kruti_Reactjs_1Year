import { CONTACTLIST } from './types';

export const intialState = {
    pending: false,
    error: null,
    favourites: [],
};

export const ContactListReducer = (state = intialState, action) => {
    switch (action.type) {
        case CONTACTLIST.GET_CONTACTLIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                ContactListRequest: undefined,
                ContactListResponse: undefined,
            };
        case CONTACTLIST.GET_CONTACTLIST_PENDING:
            return {
                ...state,
                pending: true,
                error: null,
                ContactListRequest: action.payload,
                ContactListResponse: undefined,
            };
        case CONTACTLIST.GET_CONTACTLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                ContactListRequest: undefined,
                ContactListResponse: action.payload,
            };

        case CONTACTLIST.CONTACT_DETAIL_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                ContactDetailRequest: undefined,
                ContactDetailResponse: undefined,
            };
        case CONTACTLIST.CONTACT_DETAIL_PENDING:
            return {
                ...state,
                pending: true,
                error: null,
                ContactDetailRequest: action.payload,
                ContactDetailResponse: undefined,
            };
        case CONTACTLIST.CONTACT_DETAIL_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                ContactDetailRequest: undefined,
                ContactDetailResponse: action.payload,
            };
        case CONTACTLIST.ADD_FAVOURITE:
            if (state.favourites.find((item) => { return item.data.id === action.payload.data.id })) {
                return {
                    ...state,
                    favourites: [...state.favourites]
                };
            }
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        case CONTACTLIST.REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter((item) => { return item.data.id !== action.payload })
            };
        default: return state
    }
}