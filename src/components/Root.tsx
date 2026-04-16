import { Provider } from 'kantanui';

import CV from './CV.mdx';
import Summary from './Summary';

export default function Root() {
    return (
        <Provider className="root">
            <aside>
                <Summary />
            </aside>
            
            <main>
                <CV />
            </main>
        </Provider>
    );
}