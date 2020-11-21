import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const TopBlackHeaderNav = styled.nav`
  background: black;
  height: 2.0em;
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
`

export const TopBlackHeaderNavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  vertical-align: center;
  text-decoration: none;
  padding: 0 calc((110vw - 1400px) / 2);
  height: 100%;
  cursor: pointer;
`

export const TopBlackHeaderMenu = styled.div`
  display: flex;
  align-items: right;
  flex-wrap: wrap;
  flex-direction: column;
`

export const TopBlackHeaderMenuList = styled.div`
    padding: 0 0.2rem;
  }
`




export const TopWhiteHeaderNav = styled.div`
    background: white;
    height: 5.0em;
    display: flex;
    padding: 0;
  }
`

export const TopWhiteHeaderNavLink = styled(Link)`
  display: flex;
  align-items: center;
  vertical-align: center;
  text-decoration: none;
  padding-left: calc((83vw - 1000px) / 2);
  height: 100%;
  cursor: pointer;
`

export const TopWhiteHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`

export const TopWhiteRightHeaderNavLink = styled.div`
  text-decoration: none;
  color: rgb(102, 102, 102);
  display: flex;
  padding-left: 30vw;
  padding-bottom: 5vh;
`

export const TopWhiteRightHeaderNavLinkList = styled.div`
  padding: 0 0.3rem;
  font-size: 0.7rem;
`




export const TopWhiteHeaderNav2 = styled.div`
    background: white;
    height: 1.0em;
    display: flex;
    padding: 0;
  }
`

export const TopWhiteHeaderMenu2 = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  // padding-top: 0.5rem;
  padding-left: calc((83vw - 1000px) / 2);
`

export const TopWhiteHeaderNavLink2Left = styled(Link)`
  display: flex;
  align-items: center;
  vertical-align: center;
  text-decoration: none;
  padding: 0.5rem 0.3rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.7rem;
  color: rgb(102, 102, 102);

  &.active {
    color:black;
    text-decoration: underline black;
    text-underline-position: under;
  }
`

export const TopWhiteHeaderNavLink2Right = styled(Link)`
  display: flex;
  align-items: center;
  vertical-align: center;
  text-decoration: none;
  padding: 0.5rem 0.3rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  color: rgb(2, 122, 197);

  &.active {
    text-decoration: underline rgb(2, 122, 197);
    // text-underline-position: under;
  }
`