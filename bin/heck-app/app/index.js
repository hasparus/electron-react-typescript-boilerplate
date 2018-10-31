import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './src/Root';
render(React.createElement(AppContainer, null,
    React.createElement(Root, null)), document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./src/Root', function () {
        var NextRoot = require('./src/Root').default;
        render(React.createElement(AppContainer, null,
            React.createElement(NextRoot, null)), document.getElementById('root'));
    });
}
//# sourceMappingURL=index.js.map