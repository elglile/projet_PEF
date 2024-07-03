import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Test(props) {
    const [show, setShow] = useState(true);

    if (show) { 
        return (
            <div style={{ position: 'fixed', top:0, zIndex: 1050 }}>
                <Alert variant="success" onClose={() => setShow(false)} dismissible style={{ width: '1350px' }}>
                    Numbre copiee
                </Alert>
            </div>
        );
    }
    return null;
}

export default Test;