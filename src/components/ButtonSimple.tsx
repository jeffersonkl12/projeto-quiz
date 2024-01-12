import './buttonSimple.css';

interface props {
    w?: string | number,
    h?: string | number,
    children?: React.ReactNode,
    secondary?: boolean,
    onClick?: () => void
};

const ButtonSimple = ({ w, h, children, secondary, onClick }: props) => {
    return (
        <>
            <button className={`button-simple ${secondary ? 'secondary' : undefined}`}
                style={{
                    width: w,
                    height: h
                }}
                onClick={onClick}>{children}</button>
        </>
    )
};

export default ButtonSimple;