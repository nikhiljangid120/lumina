import React from 'react';

const TrustedBy = () => {
    return (
        <div style={{
            borderTop: '1px solid var(--border-color)',
            borderBottom: '1px solid var(--border-color)',
            padding: '30px 0',
            textAlign: 'center',
            background: 'var(--bg-secondary)',
            color: 'var(--text-secondary)'
        }}>
            <p style={{
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '15px'
            }}>As Seen In</p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                fontSize: '1.5rem',
                fontFamily: 'Cormorant Garamond, serif',
                opacity: 0.7,
                flexWrap: 'wrap'
            }}>
                {['VOGUE', 'ELLE', 'BAZAAR', 'Goop', 'Vanity Fair'].map(brand => (
                    <span key={brand} className="brand-item" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>{brand}</span>
                ))}
            </div>
            <style>{`
                .brand-item:hover {
                    color: var(--text-primary);
                    opacity: 1;
                    transform: scale(1.1);
                    text-shadow: 0 0 20px rgba(197, 160, 53, 0.3);
                }
            `}</style>
        </div>
    );
};

export default TrustedBy;
