import { LuInstagram, LuFacebook, LuLinkedin } from 'react-icons/lu'
import { FaSquareXTwitter , FaTiktok, FaSquareYoutube} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../Utils/LanguageSwitcher'


const Footer = () => {
    
    const { t } = useTranslation();

    return (
        <>
            <footer className='p-4 bg-blue-dark flex flex-col items-center gap-4'>
                <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4'>
                    <NavLink to='/' className='text-red font-bold text-4xl'>
                        InstAlbum
                    </NavLink>
                    <div className='flex items-center gap-4 text-white text-4xl'>
                        <LuInstagram className='cursor-pointer' />
                        <LuFacebook  className='cursor-pointer'/>
                        <LuLinkedin  className='cursor-pointer'/>
                        <FaSquareXTwitter className='cursor-pointer' />
                        <FaTiktok  className='cursor-pointer'/>
                        <FaSquareYoutube className='cursor-pointer' />
                    </div>
                </div>
                <div className='text-sm flex flex-col md:flex-row items-center justify-between w-full gap-4'>
                    <LanguageSwitcher />
                    <p className='text-white'>&copy; InstAlbum. {t('footer.copyright')}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
