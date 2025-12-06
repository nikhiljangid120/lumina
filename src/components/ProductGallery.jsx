import React, { useRef } from 'react';
import productImg from '../assets/product.png';

const ProductGallery = () => {
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Calculate rotation (max 15 degrees)
        const rotateX = (0.5 - y) * 30;
        const rotateY = (x - 0.5) * 30;

        containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (containerRef.current) {
            containerRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    };

    return (
        <div
            className="product-gallery"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                transition: 'transform 0.1s ease-out', // Smooth movement
                transformStyle: 'preserve-3d', // Enable 3D space
                cursor: 'none',
                minHeight: '600px'
            }}
        >
            {/* Animated Mesh Gradient Background */}
            <div className="mesh-gradient-bg" style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0,
                opacity: 0.6,
                background: 'linear-gradient(45deg, #1A1A1A, #C5A035, #27ae60)',
                backgroundSize: '200% 200%',
                animation: 'meshMove 10s ease infinite'
            }} />

            <img
                src={productImg}
                alt="Luminous Face Oil Bottle"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '600px',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                    position: 'relative',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />
            <style>{`
                @keyframes meshMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
};

export default ProductGallery;