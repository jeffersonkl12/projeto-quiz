import { useState, useEffect } from 'react';
import './progress.css';

interface props {
    value?: number,
    maxValue?: number,
    corProgress?: string
};

const Progress = ({ value = 50, maxValue = 100, corProgress = '#21BDCA' }: props) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((value / maxValue) * 100);
    }, [value, maxValue]);

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{
                    width: `${progress}%`,
                    backgroundColor: corProgress
                }}
            ></div>
        </div>
    );
};

export default Progress;