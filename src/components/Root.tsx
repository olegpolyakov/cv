import { Provider, Scrollable } from '@olegpolyakov/ui';

import CV from '@/documents/CV.mdx';

import Summary from './Summary';

export default function Root() {
    return (
        <Provider className="root">
            <aside>
                <Summary />
            </aside>
            
            <Scrollable as="main" fade>
                <article>
                    <CV />
                </article>
            </Scrollable>
        </Provider>
    );
}