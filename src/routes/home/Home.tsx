import Avatar from '../../components/Avatar';
import CircularProgress from '../../components/CircularProgress';
import Flex from '../../components/Flex';
import Sino from '../../assets/imgs/icon-sino.png';
import Livro from '../../assets/imgs/icon-livro.png';
import Falante from '../../assets/imgs/icon-falante.png';
import Computador from '../../assets/imgs/icon-pc.png';
import Bola from '../../assets/imgs/icon-bola.png';
import Nota from '../../assets/imgs/icon-nota.png';
import './home.css';
import Texto from '../../components/Texto';
import Progress from '../../components/Progress';
import Default from '../../assets/imgs/default.png';
import { Link } from 'react-router-dom';
import CardTipoQuiz from '../../components/CardTipoQuiz';

interface cardQuizProps {
    icon?: string,
    titulo?: string,
    progress?: number,
    corProgress?: string
}

const CardQuiz = ({ icon, titulo, progress, corProgress }: cardQuizProps) => {
    return (
        <>
            <div id='card-quiz'>
                <div className='card-quiz__icon'>
                    <img src={icon} />
                </div>
                <div className='card-quiz__titulo'>
                    <Texto fontSize={14}
                        weight='600'>{titulo}</Texto>
                </div>
                <div className='card-quiz__label'>
                    <Texto secondary
                        fontSize={12}>You completed {progress}%</Texto>
                </div>
                <div className='card-quiz__progress'>
                    <Progress value={progress}
                        corProgress={corProgress} />
                </div>
            </div>
        </>
    )
};

const Result = () => {
    return (
        <>
            <div id='result-container'>
                <Flex aling='center'
                    h={'100%'}>
                    <div className='result-container__progress'>
                        <CircularProgress colour='#6FD0D7'
                            percentage={75} />
                    </div>
                    <div className='result-container__content'>
                        <Flex column>
                            <div className='result-container__content-item'>
                                <Texto weight='700'
                                    color='#4E5C66'>Good Result!</Texto>
                            </div>
                            <div className='result-container__content-item'>
                                <Texto weight='400'
                                    color='#4E5C66'
                                    fontSize={'12px'}>Share your achievement
                                    with your friend</Texto>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </>
    )
};

interface tituloProps {
    children?: string
};

const Titulo = ({ children }: tituloProps) => {
    return (
        <>
            <Texto secondary
                weight='600'
                fontSize={14}>{children}</Texto>
        </>
    )
};



const Home = () => {
    return (
        <>
            <div className='home-container'>
                <header className='homer__header'>
                    <Flex justify='space-between'
                        aling='center'>
                        <Flex aling='center'>
                            <Avatar />
                            <div className='homer__header-nome'>
                                <p>Hello, <label>Jessica</label></p>
                            </div>
                        </Flex>
                        <img src={Sino}
                            width={24}
                            height={24} />
                    </Flex>
                </header>
                <main>
                    <div className='main-content__result'>
                        <Result />
                    </div>
                    <div className='main-content__recent-quiz'>
                        <Titulo>Recent Quiz</Titulo>
                        <div className='recent-quiz__card'>
                            <Flex justify='space-between'>
                                <CardQuiz icon={Livro}
                                    titulo='Reading'
                                    progress={65}
                                />
                                <CardQuiz icon={Falante}
                                    titulo='Speaking'
                                    progress={85}
                                    corProgress='#5372E7' />
                            </Flex>
                        </div>
                    </div>
                    <div className='main-content__popular-quiz'>
                        <Titulo>Popular Quiz</Titulo>
                        <div className='popular-quiz__tipos'>
                            <Flex column>
                                <div className='popular-quiz__tipos-item'>
                                    <Link className='links'
                                        to={'./detalhe-quiz'}
                                        state={{
                                            cardTipoProp: {
                                                bg: '#FFE3BE',
                                                icon: Computador,
                                                titulo: 'Technology',
                                                label: '10 Question',
                                                nota: 4.8
                                            }
                                        }}>
                                        <CardTipoQuiz bg='#FFE3BE'
                                            icon={Computador}
                                            titulo='Technology'
                                            label='10 Question'
                                            nota={4.8} />
                                    </Link>
                                </div>
                                <div className='popular-quiz__tipos-item'>
                                    <Link className='links'
                                        to={'./detalhe-quiz'}
                                        state={{
                                            cardTipoProp: {
                                                bg: '#EAEEFF',
                                                icon: Bola,
                                                titulo: 'Sport',
                                                label: '10 Question',
                                                nota: 4.8
                                            }
                                        }}>
                                        <CardTipoQuiz bg='#EAEEFF'
                                            icon={Bola}
                                            titulo='Sport'
                                            label='10 Question'
                                            nota={4.8} />
                                    </Link>
                                </div>
                                <div className='popular-quiz__tipos-item'>
                                    <Link className='links'
                                        to={'./detalhe-quiz'}
                                        state={{
                                            cardTipoProp: {
                                                bg: '#F6E5E5',
                                                icon: Nota,
                                                titulo: 'Music',
                                                label: '10 Question',
                                                nota: 4.8
                                            }
                                        }}>
                                        <CardTipoQuiz bg='#F6E5E5'
                                            icon={Nota}
                                            titulo='Music'
                                            label='10 Question'
                                            nota={4.8} />
                                    </Link>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;