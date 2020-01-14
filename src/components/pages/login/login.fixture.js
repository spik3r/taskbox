import React from 'react';

import LogInPage from './';
import Store from './store';

const store = new Store();

const action = (form) => {};

store.onSubmit = e =>
    store.form.onSubmit(e, {
        onSuccess(form) {
            action('Success')(form.values());
        },
        onError(form) {
            action('Error')(form.errors());
        },
    });

export default <LogInPage store={store} />