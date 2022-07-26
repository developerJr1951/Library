import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client";
import { store } from './store/store'
import { LibreriaApp } from "./LibreriaApp";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(

<Provider store={store}>

<LibreriaApp />
</Provider>

);
