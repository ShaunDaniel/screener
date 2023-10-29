import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </BrowserRouter>

);

