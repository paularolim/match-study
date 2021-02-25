import React from 'react';

import { logout } from '../../services/auth';

const handleLogout = () => {
    logout();
    window.location.reload(false);
};

const Dashboard = () => {
    return (
        <div className="index">
            <h1>App</h1>
            <p onClick={handleLogout}>Logout</p>
        </div>
    );
};

export default Dashboard;
