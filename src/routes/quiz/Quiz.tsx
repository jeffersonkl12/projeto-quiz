import { Link, useLocation } from 'react-router-dom';
import Flex from '../../components/Flex';
import './quiz.css';
import Texto from '../../components/Texto';
import Flecha from '../../assets/imgs/icon-flecha.png';
import Relogio from '../../assets/imgs/icon-relogio.png';
import Progress from '../../components/Progress';
import ButtonSimple from '../../components/ButtonSimple';

interface props {
    secondary?: boolean,
    label?: string,
    name?: string,
    value?: string | number | string[]
    checked?: boolean,
    onChange?: () => void
};

const RadioButtonSimple = ({ label, checked = false, name, value, secondary = false, onChange }: props) => {
    return (
        <>
            <label className="radio-button-simple__label">
                <input className="radio-button-simple__input"
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked} />
                <span className={`custom-radio-button-simple ${secondary ? 'secondary' : undefined}`} />
                <span className='radio-button-simple__label-info'>{label}</span>
            </label>
        </>
    )
};

interface choiceQuizProps {
    sucess?: boolean,
    label?: string,
    name?: string,
    checked?: boolean,
    onChange?: () => void

};

const ChoiceQuiz = ({ sucess, label, checked, onChange }: choiceQuizProps) => {

    let tipoQuiz;
    let secondary = false;

    if (sucess) {
        tipoQuiz = 'sucess'
    } else if (sucess === false) {
        tipoQuiz = 'failure';
        secondary = true;
    }

    return (
        <>
            <div className={`choice-quiz__container ${tipoQuiz}`}>
                <RadioButtonSimple secondary={secondary}
                    label={label}
                    checked={checked}
                    onChange={onChange} />
            </div>
        </>
    )
};

interface headerProps {
    titulo?: string
};

const Header = ({ titulo }: headerProps) => {
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
                                <Texto weight='600'>{titulo}</Texto>
                            </div>
                        </Flex>
                    </div>
                    <div className='header__clock-container'>
                        <Flex aling='center'
                            justify='center'>
                            <div className='header__clock-container__icon'>
                                <img src={Relogio}
                                    alt='botao menu' />
                            </div>
                            <div className='header__clock-container__hour'>
                                <Texto color='--azul-claro'
                                    family='Nunito'
                                    fontSize={12}>16:45</Texto>
                            </div>
                        </Flex>

                    </div>


                </Flex>
            </header>
        </>
    )
};



const Quiz = () => {
    const { state } = useLocation();

    return (
        <>
            <Header titulo={state.titulo} />
            <main>
                <div className='quiz__progress-container'>
                    <Progress value={64} />
                    <div className='quiz__progress-count'>
                        <Texto family='Nunito'
                            fontSize={14}
                            secondary>Completed 64%</Texto>
                    </div>
                </div>
                <div className='quiz__challenge-container'>
                    <div className='quiz__challenge-titulo'>
                        <Texto weight='600'>
                            The image below is a field image
                            used for?
                        </Texto>
                    </div>
                    <div className='quiz__challenge-img'>
                        <img />
                    </div>
                    <div className='quiz__challenge-answers'>
                        <div>
                            <ChoiceQuiz sucess={true}
                                label='Football'
                            />
                        </div>
                        <div>
                            <ChoiceQuiz label='Basketball'
                            />
                        </div>
                        <div>
                            <ChoiceQuiz label='Volleyball'
                                sucess={false}
                                checked
                            />
                        </div>
                        <div>
                            <ChoiceQuiz label='Shuttlecock'
                            />
                        </div>
                    </div>
                </div>
                <div className='quiz__button-container'>
                    <Flex aling='center'
                        justify='space-between'>
                        <div className='quiz__button-item'>
                            <ButtonSimple secondary>Previous</ButtonSimple>
                        </div>
                        <div className='quiz__button-item'>
                            <ButtonSimple>Next</ButtonSimple>
                        </div>
                    </Flex>
                </div>
            </main>
        </>
    )
};

export default Quiz;