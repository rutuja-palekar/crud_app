import React from 'react'
import ParentNavbar from './ParentNavbar.jsx';
import Information from './Information.jsx';
import Dropdown from './Dropdown.jsx';

export default function Home() {
    return (
        <>
            <ParentNavbar>
                <Dropdown />
                <Information />
            </ParentNavbar>

        </>
    )
}
