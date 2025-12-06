import React, { useState, useEffect } from 'react';

const LiveCounter = () => {
    const [count, setCount] = useState(124);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + Math.floor(Math.random() * 5) - 2);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: '#444',
            marginBottom: '1rem',
            padding: '8px 12px',
            background: 'rgba(0,0,0,0.03)',
            borderRadius: '20px',
            width: 'fit-content'
        }}>
            <span style={{
                display: 'block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#EB5757',
                animation: 'pulse 2s infinite'
            }} />
            <span><strong>{count}</strong> people are viewing this right now</span>
        </div>
    );
};

export default LiveCounter;
