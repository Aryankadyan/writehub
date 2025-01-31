import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-post",
      active: !authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-post",
      active: !authStatus,
    },


  ]
  return (
 <header className='py-3 shadow bg-slate-400'>
  <Container>
    <nav className='flex'>
      <div className='mr-5'>
        <Link to= '/'>
        <Logo width='88px'/>
        </Link>
      </div>
      <ul className='flex ml-auto'>
        {navItems.map((item)=>  
        item.active ? (
          <li key={item.name}>
            <button onClick={()=> navigate(item.slug)}
            className='inline-block px-8 py-4 duration-200 hover:bg-teal-200 rounded-full'
              >{item.name}</button>
          </li>
        ) : null

        )}
        { authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>

    </nav>
  </Container>


 </header>
  )
}

export default Header
