import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
/**  리듀서 사용으로 인한 코드 수정  */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

/**  리듀서 사용으로 인한 코드 수정  */
const store = createStore(rootReducer, composeWithDevTools);

/**  리듀서 사용으로 인한 코드 수정  */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
