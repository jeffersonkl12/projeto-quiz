import './buttonSimple.css';

interface props {
    onClick?: () => void
};

const ButtonSimple = ({onClick}: props) => {
    return (
        <>
            <button className='button-simple'
                onClick={onClick}>Get Started</button>
        </>
    )
};

export default ButtonSimple;