import React from 'react';
import "./Loading.css";
const loadingSpinner = `http://seguridad.guanajuato.gob.mx/wp-content/uploads/2015/11/loading-gif.gif`

const Loading = () => {
    return (
        <div className="Loading">
            <h2>Loading...</h2>
            <img className='gif' src={loadingSpinner} alt="Loading..."></img>
        </div>
    )
}

export default Loading;