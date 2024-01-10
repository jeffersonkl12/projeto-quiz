import "./texto.css";

interface Props {
    children?: React.ReactNode,
    fontSize?: string | number,
    color?: string,
    fontStyle?: string,
    weight?: string,
    secondary?: boolean,
    aling?: boolean

}

const Texto = ({ children, fontSize, color, fontStyle, weight, aling = false, secondary = false }: Props) => {
    return (
        <>
            <p id='texto-container'
                className={secondary ? 'secondary' : ''}
                style={{
                    fontSize: fontSize,
                    color: color,
                    fontStyle: fontStyle,
                    fontWeight: weight,
                    textAlign: aling ? 'center': undefined
                }}>
                {children}
            </p>
        </>
    )
};

export default Texto;