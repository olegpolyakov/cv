import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';

import Root from './components/Root';

import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <Router>
        <Root />
    </Router>
);
