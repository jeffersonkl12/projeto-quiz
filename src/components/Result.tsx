import CircularProgress from './CircularProgress';
import Flex from './Flex';
import Texto from './Texto';
import './result.css';

const Result = () => {
    return (
        <>
            <div id='result-container'>
                <Flex>
                    <div style={{
                    }}>
                        <CircularProgress colour='#6FD0D7'
                            percentage={75}/>
                    </div>
                    <div className='result__content'>
                        <div>
                            <Texto weight='700'
                                color='#4E5C66'>Good Result!</Texto>
                        </div>
                        <div>
                            <Texto weight='400'
                                color='#4E5C66'
                                fontSize={'12px'}>Share your achievement
                                with your friend</Texto>
                        </div>
                    </div>
                </Flex>
            </div>
        </>
    )
};

export default Result;