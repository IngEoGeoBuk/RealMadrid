import React, { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {

    const PcVer = styled.div`
        @media screen and (max-width:990px) {
            display: none;
        }
    `

    const Medium = styled.div`
        display: none;
        @media screen and (max-width:990px) and (min-width:767px) {
            display: grid;
        }
    `

    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width:767px) {
            display: grid;
        }
    `

    const [InHover1, setInHover1] = useState(false);
    const [InHover2, setInHover2] = useState(false);
    const [InHover3, setInHover3] = useState(false);
    const [InHover4, setInHover4] = useState(false);

    const hoverImgEnter = { color:"rgb(157, 157, 157)", padding:"1rem" };
    const hoverImgLeave = { color:"rgb(194, 194, 194)", padding:"1rem" };

    const IconStyle = {
        fontSize:"2rem",
    }

    const NavLinkStyle = {
        textDecoration: "none"
    }
    return (
        <div>
            <PcVer>
                <div style={{ backgroundColor:"rgb(240, 240, 240)", borderTop:"1px solid rgb(153, 153, 153)" }}>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                <div class="FooterTop">
                    <a href="https://www.facebook.com/RealMadrid/" target="_blank">
                        <div class 
                            onMouseEnter = {() => setInHover1(true)}
                            onMouseLeave = {() => setInHover1(false)}
                            style={InHover1 ? hoverImgEnter : hoverImgLeave}
                        >
                            <FacebookIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://instagram.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover2(true)}
                            onMouseLeave = {() => setInHover2(false)}
                            style={InHover2 ? hoverImgEnter : hoverImgLeave}
                        >
                            <InstagramIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://twitter.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover3(true)}
                            onMouseLeave = {() => setInHover3(false)}
                            style={InHover3 ? hoverImgEnter : hoverImgLeave}
                        >
                            <TwitterIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover4(true)}
                            onMouseLeave = {() => setInHover4(false)}
                            style={InHover4 ? hoverImgEnter : hoverImgLeave}
                        >
                            <YouTubeIcon style={IconStyle}/>
                        </div>
                    </a>
                </div>
                <div class="MiniMenu">
                    <div class="MiniMenuBox">   
                        <NavLink to ="/RealMadrid/futbol" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                FÚTBOL
                            </div>
                            <div class="MiniMenuBoxSub">
                                Primer Equipo
                            </div>
                            <div class="MiniMenuBoxSub">
                                Cantera
                            </div>
                            <div class="MiniMenuBoxSub">
                                Equipo Femenino
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/baloncesto" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                BALONCESTO
                            </div>
                            <div class="MiniMenuBoxSub">
                                Calendario
                            </div>
                            <div class="MiniMenuBoxSub">
                                Clasificación
                            </div>
                            <div class="MiniMenuBoxSub">
                                Noticias
                            </div>
                            <div class="MiniMenuBoxSub">
                                Vídeos
                            </div>
                            <div class="MiniMenuBoxSub">
                                Fotos
                            </div>
                            <div class="MiniMenuBoxSub">
                                WiZink Center
                            </div>
                            <div class="MiniMenuBoxSub">
                                Plantilla
                            </div>
                            <div class="MiniMenuBoxSub">
                                Cantera
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                EL CLUB
                            </div>
                            <div class="MiniMenuBoxSub">
                                Transparencia
                            </div>
                            <div class="MiniMenuBoxSub">
                                Palmarés
                            </div>
                            <div class="MiniMenuBoxSub">
                                Historia
                            </div>
                            <div class="MiniMenuBoxSub">
                                Estadio
                            </div>
                            <div class="MiniMenuBoxSub">
                                Ciudad Real Madrid
                            </div>
                            <div class="MiniMenuBoxSub">
                                Fundación Real<br></br>Madrid
                            </div>
                            <div class="MiniMenuBoxSub">
                                Escuela Universitaria<br></br> Real Madrid
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/socios" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                SOCIOS
                            </div>
                            <div class="MiniMenuBoxSub">
                                Atención al Socio
                            </div>
                            <div class="MiniMenuBoxSub">
                                Socios
                            </div>
                            <div class="MiniMenuBoxSub">
                                Abonados
                            </div>
                            <div class="MiniMenuBoxSub">
                                Trámites
                            </div>
                            <div class="MiniMenuBoxSub">
                                Ventajas y<br></br>Descuentos
                            </div>
                            <div class="MiniMenuBoxSub">
                                Ganadores concursos
                            </div>
                            <div class="MiniMenuBoxSub">
                                Normas de acceso
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/fans" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                FANS
                            </div>
                            <div class="MiniMenuBoxSub">
                                Peñas
                            </div>
                            <div class="MiniMenuBoxSub">
                                Redes sociales
                            </div>
                            <div class="MiniMenuBoxSub">
                                Wallpapers
                            </div>
                            <div class="MiniMenuBoxSub">
                                Publicaciones
                            </div>
                            <div class="MiniMenuBoxSub">
                                Promociones
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/estadio" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                ESTADIO BERNABÉU
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/rmtv" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                RMTV
                            </div>
                        </NavLink>
                    </div>
                    <div class="MiniMenuBox">
                        <NavLink to ="/RealMadrid/tienda" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                TIENDA
                            </div>
                        </NavLink>
                        <NavLink to ="/RealMadrid/areavip" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                ÁREA VIP
                            </div>
                        </NavLink>
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                PRENSA
                            </div>
                        </NavLink>
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                VER TODOS LOS<br></br>PATROCINADORES
                            </div>
                        </NavLink>
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="MiniMenuBoxMain">
                                MAPA DEL SITIO
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div class="FooterBottom">
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png" width="2%" height="2%" />
                </div>
                <div class="Copyright">
                    <div>Real Madrid © 2020 Todos los derechos reservados</div>
                    <div>VER TODOS LOS PATROCINADORES · Aviso Legal · Politica de Privacidad · Política de Cookies</div>
                    <div>Gestionar notificaciones</div>
                </div>
            </PcVer>

            <Medium>
            <div style={{ backgroundColor:"rgb(240, 240, 240)", borderTop:"1px solid rgb(153, 153, 153)" }}>
                    <br></br><br></br><br></br>
                </div>
                <div class="FooterTop">
                    <a href="https://www.facebook.com/RealMadrid/" target="_blank">
                        <div class 
                            onMouseEnter = {() => setInHover1(true)}
                            onMouseLeave = {() => setInHover1(false)}
                            style={InHover1 ? hoverImgEnter : hoverImgLeave}
                        >
                            <FacebookIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://instagram.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover2(true)}
                            onMouseLeave = {() => setInHover2(false)}
                            style={InHover2 ? hoverImgEnter : hoverImgLeave}
                        >
                            <InstagramIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://twitter.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover3(true)}
                            onMouseLeave = {() => setInHover3(false)}
                            style={InHover3 ? hoverImgEnter : hoverImgLeave}
                        >
                            <TwitterIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover4(true)}
                            onMouseLeave = {() => setInHover4(false)}
                            style={InHover4 ? hoverImgEnter : hoverImgLeave}
                        >
                            <YouTubeIcon style={IconStyle}/>
                        </div>
                    </a>
                </div>
                <div class="MiniMenu">
                    <div style={{ display:"flex" }} >
                        <div class="MiniMenuBox">   
                            <NavLink to ="/RealMadrid/futbol" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    FÚTBOL
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/baloncesto" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    BALONCESTO
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    EL CLUB
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/socios" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    SOCIOS
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/fans" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    FANS
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/estadio" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    ESTADIO BERNABÉU
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/rmtv" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    RMTV
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div style={{ display:"flex" }} >
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/tienda" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    TIENDA
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/areavip" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    ÁREA VIP
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    PRENSA
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    VER TODOS LOS<br></br>PATROCINADORES
                                </div>
                            </NavLink>
                        </div>
                        <div class="MiniMenuBox">
                            <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                                <div class="MiniMenuBoxMain">
                                    MAPA DEL SITIO
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div class="FooterBottom">
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png" width="4%" height="4%" />
                </div>
                <div class="Copyright">
                    <div>Real Madrid © 2020 Todos los derechos reservados</div>
                    <div>VER TODOS LOS PATROCINADORES · Aviso Legal · Politica de Privacidad · Política de Cookies</div>
                    <div>Gestionar notificaciones</div>
                </div>
            </Medium>

            <MobileVer>
            <div style={{ backgroundColor:"rgb(240, 240, 240)", borderTop:"1px solid rgb(153, 153, 153)" }}>
                    <br></br><br></br>
                </div>
                <div class="FooterTop">
                    <a href="https://www.facebook.com/RealMadrid/" target="_blank">
                        <div class 
                            onMouseEnter = {() => setInHover1(true)}
                            onMouseLeave = {() => setInHover1(false)}
                            style={InHover1 ? hoverImgEnter : hoverImgLeave}
                        >
                            <FacebookIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://instagram.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover2(true)}
                            onMouseLeave = {() => setInHover2(false)}
                            style={InHover2 ? hoverImgEnter : hoverImgLeave}
                        >
                            <InstagramIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://twitter.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover3(true)}
                            onMouseLeave = {() => setInHover3(false)}
                            style={InHover3 ? hoverImgEnter : hoverImgLeave}
                        >
                            <TwitterIcon style={IconStyle}/>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/realmadrid" target="_blank">
                        <div class
                            onMouseEnter = {() => setInHover4(true)}
                            onMouseLeave = {() => setInHover4(false)}
                            style={InHover4 ? hoverImgEnter : hoverImgLeave}
                        >
                            <YouTubeIcon style={IconStyle}/>
                        </div>
                    </a>
                </div>
                <div class="MiniMenu">
                    <NavLink to ="/RealMadrid/futbol" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            FÚTBOL
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/baloncesto" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            BALONCESTO
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            EL CLUB
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/socios" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            SOCIOS
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/fans" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            FANS
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/estadio" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            ESTADIO BERNABÉU
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/rmtv" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            RMTV
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/tienda" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            TIENDA
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/areavip" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            ÁREA VIP
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            PRENSA
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            VER TODOS LOS<br></br>PATROCINADORES
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="MiniMenuBoxMain">
                            MAPA DEL SITIO
                        </div>
                    </NavLink>
                </div>
                <div class="FooterBottom">
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png" width="4%" height="4%" />
                </div>
                <div class="Copyright">
                    <div>
                        <div>Real Madrid © 2020 Todos los derechos reservados</div>
                    </div>
                    <div>
                        <div>VER TODOS LOS PATROCINADORES · Aviso Legal · Politica de Privacidad · Política de Cookies</div>
                    </div>
                    <div>
                        <div>Gestionar notificaciones</div>
                    </div>
                </div>
            </MobileVer>
        </div>
    )
}

export default Footer
