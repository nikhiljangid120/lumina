import React from 'react';

const CartDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'all 0.3s',
                    zIndex: 9998,
                    backdropFilter: 'blur(4px)'
                }}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '400px',
                maxWidth: '100%',
                height: '100%',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.5rem', margin: 0 }}>Your Bag (2)</h4>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}>&times;</button>
                </div>

                <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
                    {/* Mock Items */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                        <div style={{ width: '80px', height: '100px', background: '#f5f5f5' }}></div>
                        <div>
                            <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Luminous Face Oil</h5>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>30ml / Original</p>
                            <div style={{ marginTop: '10px' }}>$48.00</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ width: '80px', height: '100px', background: '#f5f5f5' }}></div>
                        <div>
                            <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Luminous Face Oil</h5>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>100ml / Limited Edition</p>
                            <div style={{ marginTop: '10px' }}>$85.00</div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '30px', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '500' }}>
                        <span>Total</span>
                        <span>$133.00</span>
                    </div>
                    <button style={{
                        width: '100%',
                        padding: '15px',
                        background: 'var(--text-primary)',
                        color: 'var(--bg-primary)',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '600'
                    }}>CHECKOUT</button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
