import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
            document.addEventListener("mousedown", mDown);
            document.addEventListener("mouseup", mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
            document.removeEventListener("mousedown", mDown);
            document.removeEventListener("mouseup", mUp);
        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        const mEnter = () => {
            setHidden(false);
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mDown = () => {
            setClicked(true);
        };

        const mUp = () => {
            setClicked(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const cursorClasses = `cursor-dot ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default CustomCursor;
