import { createRoot } from 'react-dom/client';

import { Provider } from 'kantanui';

import App from './App';

import 'kantanui/styles';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <Provider>
        <App />
    </Provider>
);
