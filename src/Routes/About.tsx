import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className='p-4 xl:pr-40 xl:pl-40'>
        <section className='flex flex-col-reverse md:flex-row gap-10 items-center md:items-stretch md:justify-between mt-4 p-4'>
          <div className='flex flex-col items-center md:items-start gap-10 text-center md:text-left'>
            <h2 className='font-bold text-red text-4xl lg:text-6xl text-center'>
              {t('about.section1.title')}
            </h2>
            <p className='text-black text-xl '>
              {t('about.section1.text')}
            </p>
          </div>
          <img
            src="./imgs/polaroid.png"
            alt="upload_img"
            className='w-60 rounded-md h-60 object-cover'
          />
        </section>
        <section className='flex flex-col-reverse md:flex-row-reverse gap-10 items-center md:items-stretch md:justify-between mt-4 rounded-md bg-rose-pale p-4'>
          <div className='flex flex-col items-center md:items-end gap-10 text-center md:text-right'>
            <h2 className='font-bold text-blue-dark text-4xl lg:text-6xl text-center'>
              {t('about.section2.title')}
            </h2>
            <p className='text-black text-xl '>
              {t('about.section2.text')}
            </p>
          </div>
          <img
            src="./imgs/polaroidPhotos.png"
            alt="upload_img"
            className='w-60 rounded-md h-60 object-cover'
          />
        </section>
        <section className='flex flex-col justify-center mt-4 gap-4 p-8 rounded-md'>
          <h2 className='text-blue-dark text-4xl lg:text-6xl text-center font-bold'>
            {t('about.section3.title')}
          </h2>
          <p className='text-black text-xl text-center'>
            {t('about.section3.text')}
          </p>
          <div className='flex flex-col lg:flex-row lg:justify-center items-center lg:items-stretch'>
              <Card content={['about.section3.team.member1.name','about.section3.team.member1.role']} imgSrc='./imgs/woman.png' />
              <Card content={['about.section3.team.member2.name','about.section3.team.member2.role']} imgSrc='./imgs/woman.png' />
              <Card content={['about.section3.team.member3.name','about.section3.team.member3.role']} imgSrc='./imgs/man.png' />
          </div>
        </section>
        <section className='flex flex-col items-center gap-4 mt-8 mb-8'>
          <h2 className='text-red text-4xl lg:text-6xl text-center font-bold mt-8'>
            {t('about.section4.title')}
          </h2>
          <p className='text-black text-xl text-center'>
            {t('about.section4.text')}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
