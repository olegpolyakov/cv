import { createRoot } from 'react-dom/client';

import Root from './components/Root';

import 'kantanui/styles';
import './styles.scss';

createRoot(document.getElementById('root')!).render(
    <Root />
);
