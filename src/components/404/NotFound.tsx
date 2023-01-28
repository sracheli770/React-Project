import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h2>מצטערים, העמוד לא נמצא</h2>
            <button className="btn btn-light my-3"
                onClick={() => { navigate(-1); }}>חזרה</button>
        </div>
    )
}

export default NotFound