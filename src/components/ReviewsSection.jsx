import React from 'react';

const ReviewsSection = () => {
    const reviews = [
        { id: 1, user: "Sarah M.", text: "Absolutely love the texture!", rating: 5 },
        { id: 2, user: "Jessica K.", text: "Best purchase I've made all year.", rating: 5 },
        { id: 3, user: "Emily R.", text: "Highly recommend for dry skin.", rating: 4 },
        { id: 4, user: "Amanda L.", text: "Packaging is stunning.", rating: 5 },
        { id: 5, user: "Chloe W.", text: "Glow in a bottle. Obsessed.", rating: 5 },
        // Duplicates for marquee
        { id: 6, user: "Sarah M.", text: "Absolutely love the texture!", rating: 5 },
        { id: 7, user: "Jessica K.", text: "Best purchase I've made all year.", rating: 5 },
        { id: 8, user: "Emily R.", text: "Highly recommend for dry skin.", rating: 4 },
        { id: 9, user: "Amanda L.", text: "Packaging is stunning.", rating: 5 },
        { id: 10, user: "Chloe W.", text: "Glow in a bottle. Obsessed.", rating: 5 }
    ];

    return (
        <div style={{ padding: '80px 0', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>Community Love</h4>
                <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', color: 'var(--text-primary)' }}>What They're Saying</h2>
            </div>

            <div className="marquee-container" style={{
                display: 'flex',
                gap: '30px',
                width: 'max-content',
                paddingLeft: '20px',
                animation: 'scrollLeft 40s linear infinite'
            }}>
                {reviews.map((review, i) => (
                    <div key={`${review.id}-${i}`} style={{
                        background: 'var(--bg-primary)',
                        padding: '30px',
                        borderRadius: '12px',
                        minWidth: '300px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{ color: '#C5A035', fontSize: '1.2rem', marginBottom: '15px' }}>
                            {"★".repeat(review.rating)}
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6', fontFamily: 'Cormorant Garamond', color: 'var(--text-primary)' }}>"{review.text}"</p>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>— {review.user}</div>
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover {
            animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default ReviewsSection;
