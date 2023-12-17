import { configureStore } from '@reduxjs/toolkit';
import toolKitSlicer from './features/toolkitSlicer';

const store = configureStore({
    reducer: {
        toolkit_store: toolKitSlicer
    }
});

export default store;
export const RootState = store.getState;
export const AppDispatch = store.dispatch;