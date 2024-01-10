import Avatar from '../../components/Avatar';
import Flex from '../../components/Flex';
import Sino from '../../assets/imgs/icon-sino.png';
import './home.css';
import Result from '../../components/Result';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <header className='homer__header'>
                    <Flex justify='space-between'
                        aling='center'>
                        <Flex aling='center'>
                            <Avatar />
                            <p className='homer__header-nome'>Hello, <label>Jessica</label></p>
                        </Flex>
                        <img src={Sino}
                            width={24}
                            height={24}/>
                    </Flex>
                </header>
                <main>
                    <div>
                        <Result/>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;