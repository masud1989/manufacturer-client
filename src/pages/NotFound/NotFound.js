import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center'>Sorry! Wrong URL. Page is not Found...</h1>
            <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
                <a href="https://hand-tools-center.web.app/" className="btn btn-link">Back to Home</a>
            </div>
        </div>
        </div>
    );
};

export default NotFound;