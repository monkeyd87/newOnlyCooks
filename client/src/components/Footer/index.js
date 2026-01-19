import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <GithubIcon />
            </div>
            <p> Made with 🔥 by Dennis, Huy, Jon, Ryan, & Zue. </p>
            <p> &copy; {year} onlycooks.com </p>
        </div>
    )
}

export default Footer; 