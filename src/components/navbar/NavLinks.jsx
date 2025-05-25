import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: '/new-apartment', text: 'thêm nhà trọ' },
    { id: 3, url: '/new-room', text: 'thêm phòng trọ' },
    { id: 4, url: '/new-charge', text: 'thêm phí dịch vụ' },
    // { id: 5, url: '/', text: 'home' },
  ]
  return (
    <div>
      {links.map((link) => {
        const {id, url, text} = link;
        return (
          <li key={id} className="hover:bg-orange-200 transition-all">
            <NavLink to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}

export default NavLinks
