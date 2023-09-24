import React from "react";

export const FeedbackOptions = ({ options, onClick }) => {
    return (
        <div>
            <h2>Please leave feedback</h2>
            {options.map((option) => (
                <button key={option} type="button" onClick={() => onClick(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}