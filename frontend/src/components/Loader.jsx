import Spinner from 'react-bootstrap/Spinner';
import React from 'react'

const Loader = () => {
    return (
        <Spinner animation="border" 
                variant="secondary" 
                role='status'
                style={{
                    width: '100px',
                    height: '100px',
                    margin:'auto',
                    display: 'block',  
                }}
        />
    )
}   

export default Loader
