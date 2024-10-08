import { NavLink } from 'react-router-dom'
import { LuMenu,LuX } from 'react-icons/lu'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


const NavLinks = () => {
    const { t } = useTranslation();
    return (
        <>
            <NavLink to="/create">
                {t('header.create')}
            </NavLink>
            <NavLink to="/how-to-use">
                {t('header.howto')}
            </NavLink>
            <NavLink to="/about">
                {t('header.about')}
            </NavLink>
        </>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="md:w-1/3 lg:w-1/4 text-blue-dark font-semibold">
                <div className="hidden md:flex items-center justify-between gap-2 flex-nowrap text-nowrap text-xl">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='flex items-center justify-center text-3xl font-bold'>
                        {isOpen ? <LuX /> : <LuMenu />}
                    </button>
                    {isOpen && (
                        <div className='absolute top-16 left-0 w-full bg-blue-pale p-4 flex flex-col gap-3 text-xl'>
                            <NavLinks />
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar
