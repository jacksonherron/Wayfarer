import React from 'react';

const NotFound = (props) => {
    return (
        <div id="not-found">
            <img src="https://http.cat/404" alt="404"/>
            <button onClick={() => props.history.goBack()}>Go Back</button>
        </div>
    );
};

export default NotFound

