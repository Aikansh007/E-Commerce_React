import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div>
      {/* Providing store globally */}
      <Provider store={store}>
          <BrowserRouter>
            <ToastProvider >
            <Main></Main>
            </ToastProvider>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
