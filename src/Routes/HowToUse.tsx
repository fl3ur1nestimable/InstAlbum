import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../Components/Card';
import TutorialStep from '../Components/TutorialStep';
import Tutorial from '../Components/Tutorial';

const HowToUse = () => {
  const { t } = useTranslation();
  const steps = [
    TutorialStep(t('howTo.section2.subsection1.title'), t('howTo.section2.subsection1.text'), './imgs/step1.png'),
    TutorialStep(t('howTo.section2.subsection2.title'), t('howTo.section2.subsection2.text'), './imgs/step2.png'),
    TutorialStep(t('howTo.section2.subsection3.title'), t('howTo.section2.subsection3.text'), './imgs/step3.png'),
    TutorialStep(t('howTo.section2.subsection4.title'), t('howTo.section2.subsection4.text'), './imgs/step4.png'),
  ];
  return (
    <>
      <Header />
      <div className='p-4 xl:pr-40 xl:pl-40'>
        <h1 className='font-bold text-red text-4xl lg:text-6xl text-center'>
          {t('howTo.title')}
        </h1>
        <section className='flex flex-col-reverse md:flex-row gap-4 md:items-center md:justify-between items-center mt-4'>
          <div className='flex flex-col items-center md:items-start gap-10 text-center md:text-left'>
            <h2 className='text-blue-dark text-2xl lg:text-3xl font-bold'>
              {t('howTo.section1.title')}
            </h2>
            <p className='text-black text-xl '>
              {t('howTo.section1.text')}
            </p>
          </div>
          <img 
            src="./imgs/upload.png" 
            alt="upload_img"
            className='w-40'
            />
        </section>
        <section className='flex flex-col gap-4 mt-4'>
          <h2 className='text-red text-2xl lg:text-3xl text-center md:text-right font-bold border-t p-4 border-blue-dark'>
            {t('howTo.section2.title')}
          </h2>
          <Tutorial steps={steps}></Tutorial>
        </section>
        <section className='flex flex-col justify-center mt-4 bg-rose-pale gap-4 p-8 rounded-md'>
          <h2 className='text-blue-dark text-2xl lg:text-3xl text-center font-bold'>
            {t('howTo.section3.title')}
          </h2>
          <div className='flex flex-col lg:flex-row gap-10 lg:justify-between items-center lg:items-stretch'>
              <Card content={['howTo.section3.options.gif.title','howTo.section3.options.gif.text']} imgSrc='./imgs/gif.png' />
              <Card content={['howTo.section3.options.video.title','howTo.section3.options.video.text']} imgSrc='./imgs/video.png' />
              <Card content={['howTo.section3.options.download.title','howTo.section3.options.download.text']} imgSrc='./imgs/collection.png' />
          </div>
        </section>
        <section className='flex flex-col items-center gap-4 mt-8 mb-8'>
          <h2 className='text-blue-dark text-2xl lg:text-3xl text-center font-bold'>
            {t('howTo.bottom-text')}
          </h2>
          <NavLink to='/create'>
            <Button text={t('howTo.button')} />
          </NavLink>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default HowToUse
