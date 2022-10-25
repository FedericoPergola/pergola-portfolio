import './NavBar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {BiMessageSquareDetail} from 'react-icons/bi'


const NavBar = ()=>{
    return(
        <div className='menu'>
            <nav className='menu-content'>
                <a href='#'><AiOutlineHome/></a>
                <a href='#about'><BsPerson/></a>
                <a href='#projects'><AiOutlineProject/></a>
                <a href='#skills'><GiSkills/></a>
                <a href='#contact'><BiMessageSquareDetail/></a>
            </nav>
        </div>
    )
}

export default NavBar