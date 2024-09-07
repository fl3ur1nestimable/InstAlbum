import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();

    return (
        <div className='font-arista'>
            <Header />
            <section className='flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between p-4 xl:pr-40 xl:pl-40 gap-4'>
                <div className='flex flex-col items-center md:items-start gap-10 text-center md:text-left'>
                    <h1 className='font-bold text-red text-4xl lg:text-6xl'>
                        {t('home.section1.title')}
                    </h1>
                    <h2 className='text-blue-dark text-2xl lg:text-3xl '>
                        {t('home.section1.subtitle')}
                    </h2>
                    <NavLink to='/create'>
                        <Button text={t('home.section1.button')} />
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
                    <Card content={['home.section2.card1.title','home.section2.card1.content']} imgSrc='./imgs/pictures.png' />
                    <Card content={['home.section2.card2.title','home.section2.card2.content']} imgSrc='./imgs/paint.svg' />
                    <Card content={['home.section2.card3.title','home.section2.card3.content']} imgSrc='./imgs/check.webp' />
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
                <NavLink to='/create'>
                    <Button text={t('home.section3.button')} />
                </NavLink>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
