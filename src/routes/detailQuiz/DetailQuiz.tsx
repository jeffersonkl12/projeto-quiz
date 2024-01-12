import Flex from '../../components/Flex';
import './detailQuiz.css';
import Flecha from '../../assets/imgs/icon-flecha.png';
import Menu from '../../assets/imgs/icon-menu.png';
import Texto from '../../components/Texto';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LivroInfo from '../../assets/imgs/icon-info.png';
import Relgoio from '../../assets/imgs/icon-relogio.png';
import CardTipoQuiz from '../../components/CardTipoQuiz';
import ButtonSimple from '../../components/ButtonSimple';


interface detailQuizQuestionsProps {
    icon?: string,
    titulo?: string,
    label?: string
};

const DetailQuizQuestions = ({ icon, titulo, label }: detailQuizQuestionsProps) => {
    return (
        <>
            <div className='detail-quiz__container'>
                <Flex aling='center'>
                    <div className='detail-quiz__icon'>
                        <img src={icon}
                            alt='icon info' />
                    </div>
                    <div className='detail-quiz__info'>
                        <div>
                            <Texto fontSize={14}
                                weight='600'>{titulo}</Texto>
                        </div>
                        <div>
                            <Texto fontSize={12}
                                family='Nunito'
                                color='--cinza'>{label}</Texto>
                        </div>
                    </div>
                </Flex>
            </div>
        </>
    )
};

const Header = () => {
    return (
        <>
            <header className='header'>
                <Flex aling='center'
                    justify='space-between'>
                    <div>
                        <Flex aling='center'>
                            <Link to={'../'}>
                                <div>
                                    <img src={Flecha}
                                        alt='botao voltar' />
                                </div>
                            </Link>
                            <div className='header__titulo'>
                                <Texto weight='600'>Detail Quiz</Texto>
                            </div>
                        </Flex>
                    </div>
                    <div>
                        <img src={Menu}
                            alt='botao menu' />
                    </div>

                </Flex>
            </header>
        </>
    )
};

const DetailQuiz = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const onClickButtonSimple = () => {
        navigate('../quiz', { state: { titulo: state.cardTipoProp.titulo } });
    };

    return (
        <>
            <Header />
            <main>
                <div className='detail-quiz__card-container'>
                    <CardTipoQuiz bg={state.cardTipoProp.bg}
                        icon={state.cardTipoProp.icon}
                        titulo={state.cardTipoProp.titulo}
                        label={state.cardTipoProp.label}
                        nota={state.cardTipoProp.nota} />

                </div>
                <div className='detail-quiz__detail'>
                    <div>
                        <DetailQuizQuestions icon={LivroInfo}
                            titulo='10 Question'
                            label='10 point for a correct answer' />
                    </div>
                    <div>
                        <DetailQuizQuestions icon={Relgoio}
                            titulo='1 hour 20 min'
                            label='Total duration of the quiz' />
                    </div>
                </div>
                <div className='detail-quiz__explanation'>
                    <div>
                        <Texto weight='600'>
                            Please read the text below carefully
                            so you can understand it
                        </Texto>
                    </div>
                    <div className='detail-quiz__explanation-detail'>
                        <ul className='detail-quiz__explanation-detail__lista'>
                            <li>
                                <Texto fontSize={14}
                                    family='Nunito'>10 point awarded for a correct answer and no
                                    marks for a incorrect answer</Texto>
                            </li>
                            <li>
                                <Texto fontSize={14}
                                    family='Nunito'>Tap on options to select the correct answer</Texto>
                            </li>
                            <li>
                                <Texto fontSize={14}
                                    family='Nunito'>Click submit if you are sure you want to
                                    complete all the quizzes</Texto>
                            </li>
                        </ul>
                    </div>
                    <div className='detail-quiz__footer'>
                        <Flex aling='center'
                            justify='center'>
                            <ButtonSimple onClick={onClickButtonSimple}>Get Started</ButtonSimple>
                        </Flex>
                    </div>
                </div>
            </main>
        </>
    )
};

export default DetailQuiz;