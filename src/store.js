import { createStore } from "redux";
import rootreducer from '../src/reducers/index';

const store = createStore(
        rootreducer
)
export default store;