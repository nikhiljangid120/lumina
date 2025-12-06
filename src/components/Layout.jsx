import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import CartDrawer from './CartDrawer';
import { useTheme } from '../context/ThemeContext';
import { CONFIG } from '../config';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal-on-scroll');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('is-visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', cursor: 'none' }}>
            <CustomCursor />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Noise Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9998,
                opacity: 0.05,
                background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

            <div style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                textAlign: 'center',
                padding: '8px',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '600'
            }}>
                <div style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    display: 'flex',
                    animation: 'marquee 20s linear infinite'
                }}>
                    <span style={{ paddingRight: '50px' }}>Free shipping on all orders over $100 — Complimentary samples with every purchase — 30-day radiance guarantee</span>
                    <span style={{ paddingRight: '50px' }}>Free shipping on all orders over $100 — Complimentary samples with every purchase — 30-day radiance guarantee</span>
                </div>
            </div>

            <header style={{
                padding: '30px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                background: theme === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(253, 251, 247, 0.8)',
                zIndex: 100,
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border-color)',
                transition: 'background 0.3s'
            }}>
                <nav style={{ display: 'flex', gap: '40px', fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Story</a>
                </nav>

                <div style={{
                    fontSize: '1.8rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: '600',
                    letterSpacing: '-0.5px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    {CONFIG.BRAND_NAME}
                </div>

                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontSize: '0.9rem' }}>
                    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'inherit' }}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <span>Search</span>
                    <button onClick={() => setIsCartOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>
                        Cart (2)
                    </button>
                </div>
            </header>

            <main style={{ flex: 1 }}>
                {children}
            </main>

            <footer style={{
                padding: '80px 40px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40px'
            }}>
                <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                    <h5 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>JOIN THE INNER CIRCLE</h5>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>Sign up for exclusive access to new launches, skincare tips, and 10% off your first order.</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="email" placeholder="Your email address" style={{
                            padding: '12px 20px',
                            borderRadius: '30px',
                            border: '1px solid #ddd',
                            flex: 1,
                            fontFamily: 'inherit',
                            outline: 'none',
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)'
                        }} />
                        <button style={{
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            padding: '12px 30px',
                            borderRadius: '30px',
                            fontWeight: '500',
                            transition: 'transform 0.2s',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.target.style.transform = 'scale(1)'}
                        >SUBSCRIBE</button>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '40px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>Instagram</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>TikTok</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>Contact</a>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>FAQ</a>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '30px',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'var(--text-primary)' }}>{CONFIG.BRAND_NAME}</div>
                    <div>© 2025 {CONFIG.BRAND_NAME}. All rights reserved.</div>
                </div>
            </footer>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default Layout;