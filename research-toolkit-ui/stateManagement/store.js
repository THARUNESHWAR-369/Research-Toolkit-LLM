
import { createStore } from 'redux';
import { reducer } from './features/toolkitSlicer';

const store = createStore(reducer);

export default store;