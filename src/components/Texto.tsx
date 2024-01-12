import "./texto.css";

interface Props {
    children?: React.ReactNode,
    fontSize?: string | number 
    color?: string,
    fontStyle?: string,
    weight?: string,
    secondary?: boolean,
    aling?: boolean,
    family?: string

}



const Texto = ({ children, fontSize, color = '--cinza-escuro', fontStyle, weight, aling = false, secondary = false, family = 'Montserrat' }: Props) => {

    return (
        <>
            <p id='texto-container'
                className={secondary ? 'secondary' : ''}
                style={{
                    fontSize: fontSize,
                    color: `var(${color})`,
                    fontStyle: fontStyle,
                    fontWeight: weight,
                    textAlign: aling ? 'center' : undefined,
                    fontFamily: family ? family : 'sans-serif'
                }}>
                {children}
            </p>
        </>
    )
};

export default Texto;