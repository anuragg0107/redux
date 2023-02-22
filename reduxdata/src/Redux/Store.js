import {legacy_createStore} from "redux";

import rootReducer from "./Reducer/rootReducer";

const store=legacy_createStore(rootReducer,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f)

export default store