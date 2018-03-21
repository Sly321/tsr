import * as React from "react"
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import RootReducer from "./Reducers/RootReducer"

const anyWindow = (window as any)

const store = createStore(RootReducer,
    compose(
        anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : () => { },
    )
)

ReactDOM.render(<Provider store={store}>
    <div>Hello Wurld! <br />{store.getState().FirstReducer.title}</div>
    </Provider>, document.querySelector("#root"))