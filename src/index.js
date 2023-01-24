import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import ContextLike from './context/likes/LikesProvider';
import ThemeContext from './context/theme/ThemeProvider';
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextLike>
        <ThemeContext>
          <Provider store={store}>
            <Layout>
              <App />
            </Layout>
          </Provider>
        </ThemeContext>
      </ContextLike>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
