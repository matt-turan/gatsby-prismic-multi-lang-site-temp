import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicLink } from '@prismicio/react'

const Header = ({disabledMenu}) => {
  const queryData = useStaticQuery(graphql`
  {
    prismicTopMenu {
      id
      data {
        menu_links {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
  }
  `)

  const navigation = queryData.prismicTopMenu
  const topNav = navigation.data.menu_links

  console.log(topNav)

  //get header menus
  return (
    <header className='header d-flex align-items-center'>
      <div className='container'>
        <nav className='navbar-expand-lg navbar'>
          <div className='header__logo'></div>

          {/* Menu */}
          {(disabledMenu)?
          [] :
          <div className='collapse navbar-collapse flex-row-reverse' id="navbarNav">
            <ul className='navbar-nav'>
              {topNav.map((navItem, index) => {
                return (
                  <li key={`link-${index}`} className='nav-item'>
                    <PrismicLink field={navItem.link.url}>
                      {navItem.label.text}
                    </PrismicLink>
                  </li>
                )
              })}
            </ul>
          </div>
          }
        </nav>
      </div>
    </header>
  )
}

export default Header
