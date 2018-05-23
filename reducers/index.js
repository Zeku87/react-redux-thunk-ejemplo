import {combineReducers} from 'redux';
import { hasErrored, isLoading, items} from './items';

export default combineReducers({
    hasErrored,
    isLoading,
    items
});