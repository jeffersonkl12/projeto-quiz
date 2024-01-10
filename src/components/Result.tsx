import CircularProgress from './CircularProgress';
import Flex from './Flex';
import Texto from './Texto';
import './result.css';

const Result = () => {
    return (
        <>
            <div id='result-container'>
                <Flex aling='center'
                    h={'100%'}>
                    <div className='result-container__item'>
                        <CircularProgress colour='#6FD0D7'
                            percentage={75} />
                    </div>
                    <Flex column>
                        <div className='result-container__item'>
                            <Texto weight='700'
                                color='#4E5C66'>Good Result!</Texto>
                        </div>
                        <div className='result-container__item'>
                            <Texto weight='400'
                                color='#4E5C66'
                                fontSize={'12px'}>Share your achievement
                                with your friend</Texto>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </>
    )
};

export default Result;