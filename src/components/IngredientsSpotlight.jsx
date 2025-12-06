import React from 'react';

const IngredientsSpotlight = () => {
    const ingredients = [
        { name: "Jojoba Oil", desc: "Mimics skin's natural sebum" },
        { name: "Rosehip Seed", desc: "Brightens and evens tone" },
        { name: "Squalane", desc: "Locks in weightless hydration" },
        { name: "Sea Buckthorn", desc: "Rich in rare Omega 7" }
    ];

    return (
        <div style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>The Science</h4>
                <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>Powered by Nature</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    {ingredients.map((ing, i) => (
                        <div key={i} className="ingredient-card" style={{
                            padding: '40px 20px',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '250px',
                            height: '250px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--color-accent)',
                                borderRadius: '50%',
                                opacity: 0.1,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>💧</div>
                            <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.3rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{ing.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{ing.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .ingredient-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    border-color: var(--color-accent) !important;
                    background: var(--bg-secondary);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
            `}</style>
        </div>
    );
};

export default IngredientsSpotlight;
