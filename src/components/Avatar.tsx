import './avatar.css';

interface Props {
    src?: string,
    alt?: string,
};

const Avatar = ({ src,
    alt = 'foto default avatar' }: Props) => {
    return (
        <>
            <div className='avatar-container'
                style={{ backgroundColor: src ? undefined : '#C4C4C4' }}>
                {
                    src ? <img className={src}
                        src={src}
                        alt={alt} /> : undefined
                }
            </div>
        </>
    )
};

export default Avatar;