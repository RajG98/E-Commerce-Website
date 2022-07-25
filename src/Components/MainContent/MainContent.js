import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import ContentArea from '../ContentArea/ContentArea.js';
import './MainContent.css';

export const MainContent = () => {
    return (
        <div className="main-content">
            <Sidebar />
            <ContentArea/>
        </div>
    )
}
