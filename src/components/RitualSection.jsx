import React from 'react';

const RitualSection = () => {
    return (
        <div style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div className="ritual-text-container" style={{ paddingLeft: '40px' }}>
                        <h4 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>THE RITUAL</h4>
                        <h3 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: 'Cormorant Garamond', color: 'var(--text-primary)' }}>Morning & Night</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Transform your daily routine into a moment of self-care.
                            Our oil is designed to work in harmony with your skin's natural rhythm.
                        </p>
                        <button style={{
                            borderBottom: '1px solid var(--text-primary)',
                            paddingBottom: '5px',
                            background: 'transparent',
                            fontSize: '0.9rem',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            color: 'var(--text-primary)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'opacity 0.3s'
                        }}
                            onMouseOver={e => e.target.style.opacity = '0.7'}
                            onMouseOut={e => e.target.style.opacity = '1'}
                        >View Full Routine</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {[
                            { step: "01", title: "Warm", desc: "Warm 3-5 drops in palms" },
                            { step: "02", title: "Press", desc: "Gently press into skin" },
                            { step: "03", title: "Massage", desc: "Upward circular motions" },
                            { step: "04", title: "Glow", desc: "Let absorb for 1 minute" }
                        ].map((item, i) => (
                            <div key={i} className="reveal-on-scroll" style={{
                                background: 'var(--bg-primary)',
                                padding: '30px',
                                borderRadius: '4px',
                                transitionDelay: `${i * 0.1}s`,
                                border: '1px solid var(--border-color)'
                            }}>
                                <span style={{ color: 'var(--color-accent)', fontFamily: 'Cormorant Garamond', fontSize: '1.5rem', display: 'block', marginBottom: '10px' }}>{item.step}</span>
                                <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h5>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RitualSection;
