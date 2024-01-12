import Flex from "./Flex";
import Texto from "./Texto";
import Estrela from '../assets/imgs/icon-star.png';
import './cardTipoQuiz.css';

interface cardTipoQuizProps {
    bg?: string,
    icon?: string,
    titulo?: string,
    label?: string,
    nota?: number
};

const CardTipoQuiz = ({ bg, icon, titulo, label, nota }: cardTipoQuizProps) => {
    return (
        <>
            <div className='card-tipo-quiz__container'>
                <Flex justify='space-between'
                    aling='center'>
                    <div className='card-tipo-quiz__content'>
                        <Flex aling='center'>
                            <div className='card-tipo-quiz__content-icon'
                                style={{ backgroundColor: bg }}>
                                <img src={icon} />
                            </div>
                            <div className='card-tipo-quiz__content-info'>
                                <div>
                                    <Texto fontSize={14}
                                        weight='600'>{titulo}</Texto>
                                </div>
                                <div>
                                    <Texto secondary
                                        fontSize={12}>{label}</Texto>
                                </div>

                            </div>
                        </Flex>
                    </div>
                    <div className='card-tipo-quiz__nota'>
                        <Flex aling='center'>
                            <div className='card-tipo-quiz__nota-estrela'>
                                <img src={Estrela} />
                            </div>
                            <div className='card-tipo-quiz__nota-info'>
                                <Texto family='Nunito'>{nota}</Texto>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </>
    )
};

export default CardTipoQuiz;