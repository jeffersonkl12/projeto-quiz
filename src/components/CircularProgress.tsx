import './circularProgress.css';

const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

interface circleProps {
    colour?: string,
    percentage?: number
}

const Circle = ({ colour, percentage = 0 }: circleProps) => {
    const r = 35; // Ajuste o raio conforme necessário
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;
    return (
        <>
            <circle
                r={r}
                cx={40} // Ajuste o centro conforme necessário
                cy={40} // Ajuste o centro conforme necessário
                fill="transparent"
                stroke={strokePct !== circ ? colour : "white"}
                strokeWidth={"0.6rem"} // Ajuste a largura da linha conforme necessário
                strokeDasharray={circ}
                strokeDashoffset={percentage ? -strokePct : 0}
                strokeLinecap='round'
            />
        </>
    );
};

interface textProps {
    percentage: number
}

const Text = ({ percentage }: textProps) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontWeight={600}
            fontSize={"0.9rem"}
            fill='#4E5C66'
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

interface circularProgresProps {
    colour?: string,
    percentage?: number
}

const CircularProgres = ({ colour = 'red', percentage = 50 }: circularProgresProps) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={80} height={80}>
            <g transform={`rotate(-90 ${"40 40"})`}>
                <Circle colour="lightgrey" />
                <Circle colour={colour} percentage={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default CircularProgres;
