import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className='h-[50px] flex items-center w-full pl-[30px]'>
         <Link to="/">Home</Link>
      </header>
   )
}

export default Header