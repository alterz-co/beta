import {
    UI_START_LOADING,
    UI_STOP_LOADING,
    UI_ERROR
} from '../types/uiTypes';

export const uiStartLoading = () => {
    return {
        type: UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    return {
        type: UI_STOP_LOADING
    };
};

export const uiError = (message) => {
    return {
        type: UI_ERROR,
        error: message
    };
};
