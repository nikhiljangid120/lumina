import React from 'react';
import LiveCounter from './LiveCounter';

const ProductInfo = () => {
    return (
        <div style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <LiveCounter />

            <h1 style={{
                fontSize: '4.5rem',
                marginBottom: '1rem',
                fontWeight: '400',
                lineHeight: 1.1,
                letterSpacing: '-1px'
            }}>Luminous Face Oil</h1>

            <div style={{
                fontSize: '1.8rem',
                marginBottom: '2.5rem',
                color: 'var(--color-accent)',
                fontWeight: '500'
            }}>$48.00</div>

            <p style={{
                marginBottom: '3rem',
                maxWidth: '500px',
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
            }}>
                A potent blend of 23 active botanicals to restore radiance and balance.
                Deeply hydrating yet lightweight, this oil transforms dull skin instantly.
            </p>

            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <button className="magnetic-btn" style={{
                        flex: 2,
                        background: 'var(--text-primary)',
                        color: 'var(--bg-primary)',
                        border: 'none',
                        padding: '18px 40px',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>Add to Cart — $48</button>

                    <button style={{
                        flex: 1,
                        background: 'transparent',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}>Subscribe</button>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                        display: 'block', width: '8px', height: '8px', background: 'var(--color-success)', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(39, 174, 96, 0.2)'
                    }}></span>
                    In stock, ready to ship today
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>Highlights</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {['Vegan', 'Cruelty-Free', 'Organic', 'Recyclable Packaging', 'Dermatologist Tested'].map(tag => (
                        <li key={tag} style={{
                            border: '1px solid var(--border-color)',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            background: 'transparent'
                        }}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductInfo;
