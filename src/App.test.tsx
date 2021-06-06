import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

test('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiJSApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
})