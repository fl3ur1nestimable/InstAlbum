import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
    return (
        <>
            <header className='flex items-center justify-between p-4 bg-blue-pale z-10 sticky top-0'>
                <NavLink to='/' className="title flex items-center gap-2">
                    <Logo />
                    <h1 className='text-red font-bold text-5xl leading-3'>
                        InstAlbum
                    </h1>
                </NavLink>
                <Navbar />
            </header>
        </>
    )
}

export default Header
