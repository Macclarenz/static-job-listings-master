import React from "react";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";

import store from "./app/store";
import App from './app/app'

const root = createRoot(document.querySelector('.outer-container'))
const render = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

render()