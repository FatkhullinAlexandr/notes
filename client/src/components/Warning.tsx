import React from 'react';

interface WarningProps {
    message: string;
    open: boolean;
    setOpen: (b: boolean) => void;
}

const Warning: React.FC<WarningProps> = ({ message, open, setOpen }) => {
    if (open) {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    return (
        <div className={`warning ${open ? 'active' : ''}`}>
            <span>{message}</span>
            <button onClick={() => setOpen(false)}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Warning;
