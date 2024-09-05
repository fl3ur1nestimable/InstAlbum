import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeCard from '../Components/HomeCard';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <Header />
            <section className='flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between p-4 xl:pr-40 xl:pl-40'>
                <div className='flex flex-col items-center md:items-start gap-10 text-center md:text-left'>
                    <h1 className='font-bold text-red text-4xl lg:text-6xl'>
                        {t('home.section1.title')}
                    </h1>
                    <h2 className='text-blue-dark text-2xl lg:text-3xl '>
                        {t('home.section1.subtitle')}
                    </h2>
                    <NavLink to='/create'>
                        <button className='rounded-md border-rose border-4 bg-blue-dark p-4 text-white hover:bg-white hover:text-blue-dark'>
                            {t('home.section1.button')}
                        </button>
                    </NavLink>
                </div>
                <img 
                    src="./imgs/homehero1.jpeg" 
                    alt="Polaroid Photos on a table"
                    className='rounded-xl w-2/3 md:w-auto aspect-video object-cover'
                />
            </section>

            <section className='p-4 xl:pr-40 xl:pl-40 flex flex-col bg-rose-pale w-full mt-20 gap-10'>
                <h1 className='font-bold text-blue-dark text-4xl lg:text-6xl text-center'>
                    {t('home.section2.title')}
                </h1>
                <div className='flex flex-col lg:flex-row gap-10 lg:justify-between items-center lg:items-stretch'>
                    <HomeCard sectionId={2} cardId={1} imgSrc='./imgs/pictures.png' />
                    <HomeCard sectionId={2} cardId={2} imgSrc='./imgs/paint.svg' />
                    <HomeCard sectionId={2} cardId={3} imgSrc='./imgs/check.webp' />
                </div>
            </section>

            <section className='p-4 xl:pr-40 xl:pl-40 flex flex-col items-center mt-10 mb-10 gap-10 w-full '>
                <h1 className='font-bold text-red text-4xl lg:text-6xl text-center'>
                    {t('home.section3.title')}
                </h1>
                <h2 className='text-blue-dark text-2xl lg:text-3xl text-center '>
                    {t('home.section3.subtitle')}
                </h2>
                <h3 className='text-red text-xl text-center'>
                    {t('home.section3.message')}
                </h3>
                <button className='rounded-md border-rose border-4 bg-blue-dark p-4 text-white hover:bg-white hover:text-blue-dark'>
                    <NavLink to='/create'>
                        {t('home.section3.button')}
                    </NavLink>
                </button>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
