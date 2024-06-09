import React, { useState } from 'react';
import { BrowserRouter as Router, useHistory, Route, Switch } from 'react-router-dom';
import App from './App';
import { submitAPI } from './api';

const RouterWrapper = () => {
    const history = useHistory();
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            setBookingConfirmed(true);
            history.push('/confirmed');
        }
    };

    return (
        <App submitForm={submitForm} />
    );
};

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" component={RouterWrapper} />
        </Switch>
    </Router>
);

export default Root;
