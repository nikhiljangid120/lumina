import React, { useState } from 'react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { q: "How often should I use the Luminous Face Oil?", a: "For best results, we recommend using 3-5 drops every morning and evening after cleansing. It replaces your moisturizer or can be layered underneath." },
        { q: "Is this suitable for sensitive skin?", a: "Yes. Our formula is free from synthetic fragrances, essential oils, and harsh preservatives. We recommend patch testing before full use." },
        { q: "How long does a bottle last?", a: "With twice-daily use, a 30ml bottle typically lasts 2-3 months." },
        { q: "Can I use this under makeup?", a: "Absolutely. Let it absorb for 2-3 minutes before applying foundation for a dewy, glowing base." }
    ];

    return (
        <div style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    fontFamily: 'Cormorant Garamond',
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: 'var(--text-primary)'
                }}>Frequently Asked Questions</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {faqs.map((item, i) => (
                        <div key={i} style={{
                            borderBottom: '1px solid var(--border-color)',
                            marginBottom: '20px',
                            background: activeIndex === i ? 'var(--bg-primary)' : 'transparent',
                            borderRadius: '8px',
                            padding: '20px',
                            transition: 'all 0.3s ease',
                            boxShadow: activeIndex === i ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                            border: activeIndex === i ? '1px solid var(--border-color)' : '1px solid transparent'
                        }}>
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    padding: '10px 0',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    fontFamily: 'Cormorant Garamond',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {item.q}
                                <span style={{
                                    transform: activeIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s',
                                    fontSize: '1.5rem',
                                    color: 'var(--color-accent)'
                                }}>+</span>
                            </button>
                            <div style={{
                                maxHeight: activeIndex === i ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: activeIndex === i ? 1 : 0
                            }}>
                                <p style={{
                                    paddingTop: '10px',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6',
                                    paddingBottom: '10px'
                                }}>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
