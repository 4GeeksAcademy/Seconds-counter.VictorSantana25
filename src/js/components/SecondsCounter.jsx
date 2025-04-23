import React from 'react';

const Digit = ({ value }) => {
    return (
        <span className="bg-dark text-white px-3 py-2 rounded fs-1 fw-bold text-center">
            {value}
        </span>
    );
};

const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, '0').split('');

    return (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <i className="fas fa-clock fs-1 bg-dark text-white px-2 py-3 rounded fs-1 fw-bold text-center"></i>
            {digits.map((digit, index) => (
                <Digit key={index} value={digit} />
            ))}
        </div>
    );
};

export default SecondsCounter;
