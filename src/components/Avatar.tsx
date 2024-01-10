import './avatar.css';
import Default from '../assets/imgs/default.png';

interface Props {
    src?: string,
    alt?: string,
};

const Avatar = ({ src,
    alt = 'foto default avatar' }: Props) => {
    return (
        <>
            <div className='avatar-container'>
                <img src={src ? src: Default}
                    alt={alt} />
            </div>
        </>
    )
};

export default Avatar;