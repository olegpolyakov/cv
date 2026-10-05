import { Provider, Scrollable } from '@olegpolyakov/ui';

import CV from '@/documents/CV.mdx';

import Summary from './Summary';

export default function Root() {
    return (
        <Provider className="root">
            <Scrollable as="aside">
                <Summary />
            </Scrollable>
            
            <Scrollable as="main" fade>
                <CV />
            </Scrollable>
        </Provider>
    );
}