import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Link to="/">home</Link>
            &nbsp;&nbsp;|&nbsp; &nbsp;
            <Link to='/board'>게시판</Link>
        </div>
    );
};

export default Header;