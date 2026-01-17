import { Provider } from 'kantanui';

import Summary from './Summary';
import CV from './CV.mdx';

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