import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Navbar from "./Navbar";
import News from "./News";
import Footer from "./Footer";
import Reducers from "../reducers/index";

const store = createStore(Reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-light">
        <Navbar />
        <News />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
