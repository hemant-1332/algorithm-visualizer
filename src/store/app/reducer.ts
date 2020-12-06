import { NO_ALGORITHM } from '../../App';
import { AppState } from './state';
import { AppActionTypes, CHANGE_ALGORITHM, CHANGE_RUNNING_STATE } from './types';

const initialAppState: AppState = {
    selectedAlg: NO_ALGORITHM,
    running: false,
};

export const appReducer = (state = initialAppState, action: AppActionTypes): AppState => {
    switch (action.type) {
        case CHANGE_ALGORITHM:
            return {
                selectedAlg: action.algorithm,
                running: false,
            };
        case CHANGE_RUNNING_STATE:
            return {
                selectedAlg: state.selectedAlg,
                running: action.state,
            };
        default:
            return state;
    }
};