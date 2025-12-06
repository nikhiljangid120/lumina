import React, { useState, useEffect } from 'react';

const NAMES = ["Sarah from NY", "Julia from London", "Emma from Paris", "Chloe from LA", "Mia from Toronto"];
const ACTIONS = ["just bought Luminous Face Oil", "ordered the Radiance Set", "left a 5-star review"];

const SalesPopup = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({ name: "", action: "", time: "Just now" });

    useEffect(() => {
        // Initial delay
        const initialTimeout = setTimeout(() => {
            triggerPopup();
        }, 4000);

        const triggerPopup = () => {
            const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
            const randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
            setMessage({ name: randomName, action: randomAction, time: "Just now" });
            setVisible(true);

            // Hide after 5 seconds
            setTimeout(() => {
                setVisible(false);
                // Schedule next popup randomly between 10-20 seconds
                setTimeout(triggerPopup, Math.random() * 10000 + 10000);
            }, 5000);
        };

        return () => clearTimeout(initialTimeout);
    }, []);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            background: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            zIndex: 1000,
            animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid rgba(0,0,0,0.05)',
            minWidth: '300px'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                background: '#FAF9F6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
            }}>
                ✨
            </div>
            <div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1A1A1A' }}>{message.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>{message.action}</div>
                <div style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '2px' }}>{message.time}</div>
            </div>
        </div>
    );
};

export default SalesPopup;
