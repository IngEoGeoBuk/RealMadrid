import React from 'react'
import { TopBlackHeaderNav, TopBlackHeaderNavLink, TopBlackHeaderMenu, TopBlackHeaderMenuList, 
    TopWhiteHeaderNav, TopWhiteHeaderNavLink, TopWhiteHeaderMenu, TopWhiteRightHeaderNavLink, TopWhiteRightHeaderNavLinkList, 
    TopWhiteHeaderNav2, TopWhiteHeaderMenu2, TopWhiteHeaderNavLink2Left, TopWhiteHeaderNavLink2Right } from './NavbarElements';
import './index.css'
import { Divider } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SelectLangauge from '../Header/SelectLangauge';
import Search from './Search';
import styled from 'styled-components';
import ENTRADAS from '../Header/ENTRADAS';

import SideBar from '../Header/SideBar' 
import SideBarMenu from '../Header/SideBarMenu';

import { NavLink } from 'react-router-dom'

function Navbar() {

    const PcVer = styled.div`
        @media screen and (max-width:990px) {
            display: none;
        }
    `

    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width:990px) {
            display: block;
        }
    `

    const TopWhiteRightHeaderNavLinkListStyle = {
        backgroundColor: "rgb(102, 102, 102)", margin:"1px", height:"0.8rem"
    }

    const TopWhiteHeaderNavLink2RightStyle = {
        backgroundColor: "rgb(222, 222, 222)", margin:"3px", height:"1.3rem"
    }

    return (
        <div>
            <PcVer>
                <TopBlackHeaderNav>
                    <TopBlackHeaderMenu>
                        <TopBlackHeaderNavLink to ="/RealMadrid">
                            <Divider orientation="vertical" style={{ backgroundColor: "rgb(143, 143, 143)", margin:"6px" }} />
                            <TopBlackHeaderMenuList>
                                <img src="https://i.esdrop.com/d/1tdODSd50j.png" width="100%" height="100%"/>
                            </TopBlackHeaderMenuList>
                            <Divider orientation="vertical" style={{ backgroundColor: "rgb(143, 143, 143)" , margin:"8px" }} />
                            <TopBlackHeaderMenuList>
                                <img src="https://i.esdrop.com/d/dSk2GBDCwA.jpg" width="100%" height="100%"/>
                            </TopBlackHeaderMenuList>
                            <TopBlackHeaderMenuList>
                                <MoreHorizIcon style={{ color:"white", marginLeft:"20px" }} />
                            </TopBlackHeaderMenuList>
                        </TopBlackHeaderNavLink>
                    </TopBlackHeaderMenu>
                </TopBlackHeaderNav>
                

                <TopWhiteHeaderNav>
                    <TopWhiteHeaderMenu>
                        <TopWhiteHeaderNavLink to="/RealMadrid">
                            <img src="https://i.esdrop.com/d/wqsKVhmsbw.svg" width="200rem"/>
                            <Divider orientation="vertical" style={{ backgroundColor: "rgb(222, 222, 222)" , margin:"8px", height:"2.5rem" }} />
                            <img src="https://i.esdrop.com/d/ZIO7h4JUo7.png" width="40rem"/> 
                            <TopWhiteRightHeaderNavLink>
                                <TopWhiteRightHeaderNavLinkList>
                                    ÚNETE AL EQUIPO
                                </TopWhiteRightHeaderNavLinkList>
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                                <TopWhiteRightHeaderNavLinkList>
                                    PALMARÉS
                                </TopWhiteRightHeaderNavLinkList>
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                                <TopWhiteRightHeaderNavLinkList>
                                    FUNDACIÓN
                                </TopWhiteRightHeaderNavLinkList>
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                                <TopWhiteRightHeaderNavLinkList>
                                    REGÍSTRATE
                                </TopWhiteRightHeaderNavLinkList>
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                                <TopWhiteRightHeaderNavLinkList>
                                    LOGIN
                                </TopWhiteRightHeaderNavLinkList>
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                                <TopWhiteRightHeaderNavLinkList>
                                    <SelectLangauge/>
                                </TopWhiteRightHeaderNavLinkList> 
                                <Divider orientation="vertical" style={TopWhiteRightHeaderNavLinkListStyle} />
                            </TopWhiteRightHeaderNavLink>              
                        </TopWhiteHeaderNavLink>
                    </TopWhiteHeaderMenu>
                </TopWhiteHeaderNav>

                <TopWhiteHeaderNav2>
                    <TopWhiteHeaderMenu2>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/inicio">
                            INICIO
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/futbol">
                            FÚTBOL
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/baloncesto">
                            BALONCESTO
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/elclub">
                            EL CLUB
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/socios">
                            SOCIOS
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/fans">
                            FANS
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/estadio">
                            ESTADIO BERNABÉU
                        </TopWhiteHeaderNavLink2Left>
                        <TopWhiteHeaderNavLink2Left to="/RealMadrid/rmtv" style={{paddingRight:"calc(50vw - 500px)"}}>
                            RMTV
                        </TopWhiteHeaderNavLink2Left>
                        
                        <TopWhiteHeaderNavLink2Right to="/RealMadrid/entradas">
                            ENTRADAS
                        </TopWhiteHeaderNavLink2Right>
                        <Divider orientation="vertical" style={TopWhiteHeaderNavLink2RightStyle} />
                        <TopWhiteHeaderNavLink2Right to="/RealMadrid/areavip">
                            ÁREA VIP
                        </TopWhiteHeaderNavLink2Right>
                        <Divider orientation="vertical" style={TopWhiteHeaderNavLink2RightStyle} />
                        <TopWhiteHeaderNavLink2Right to="/RealMadrid/tour">
                            TOUR
                        </TopWhiteHeaderNavLink2Right>
                        <Divider orientation="vertical" style={TopWhiteHeaderNavLink2RightStyle} />
                        <TopWhiteHeaderNavLink2Right to="/RealMadrid/madridstas">
                            MADRIDIS
                        </TopWhiteHeaderNavLink2Right>
                        <Divider orientation="vertical" style={TopWhiteHeaderNavLink2RightStyle} />
                        <TopWhiteHeaderNavLink2Right to="/RealMadrid/tienda">
                            TIENDA
                        </TopWhiteHeaderNavLink2Right>
                        <Divider orientation="vertical" style={TopWhiteHeaderNavLink2RightStyle} />
                        <Search />
                    </TopWhiteHeaderMenu2>
                </TopWhiteHeaderNav2>
            </PcVer>





            <MobileVer>
                <div>
                    <div style = {{ float:"left", display:"flex", alignItems:"center" }} >
                        <div>
                            <SideBar />
                            <SideBarMenu/>
                        </div>
                        <NavLink to="/RealMadrid/" style={{ textDecoration:"none", display:"flex" }}>
                            <img src="https://i.esdrop.com/d/99y3tIR7Yn.png" width="50vw" height="50vw"/>
                            <img src="https://i.esdrop.com/d/ZIO7h4JUo7.png" width="40vw" height="50vw"/>
                        </NavLink>
                    </div>
                    <div style = {{ float:"right" }} >
                        <div style = {{ padding:"0.4rem 0" }} >
                            <ENTRADAS/>
                        </div>
                    </div>
                </div>
            </MobileVer>
        </div>
    )
}

export default Navbar
