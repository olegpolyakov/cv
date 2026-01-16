import { createRoot } from 'react-dom/client';

import { Provider } from 'kantanui';

import App from './App';

import 'kantanui/dist/index.css';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <Provider>
        <App />
    </Provider>
);
