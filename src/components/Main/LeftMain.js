import React, { useState } from 'react'
import './Main.css'
import Grid from "@material-ui/core/Grid"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from 'react-router-dom'

function LeftMain() {

    const [InHover1, setInHover1] = useState(false);
    const [InHover2, setInHover2] = useState(false);
    const [InHover3, setInHover3] = useState(false);
    const [InHover4, setInHover4] = useState(false);
    const [InHover5, setInHover5] = useState(false);

    const hoverImgEnter = { opacity: "0.5" };
    const hoverImgLeave = { opacity: "1" };

    const PlayCircleOutlineIconStyle = {
        color: "gray",
        fontSize:"2rem"
    }

    const IconStyle = {
        color: "gray",
        fontSize:"2rem",
        border:"1px solid rgb(217, 217, 217)"
    }

    const IconPadding = {
        padding: "0.15rem"
    }

    const NavLinkStyle = {
        textDecoration: "none"
    }

    return (
        <div class="LeftMain">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div class="MainBox"
                        onMouseEnter = {() => setInHover1(true)}
                        onMouseLeave = {() => setInHover1(false)}
                    >
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="LeftMainBoxImg" style = {InHover1 ? hoverImgEnter : hoverImgLeave}>
                                <img src="https://i.esdrop.com/d/w3U5EUV3XW.jpg" width="100%"/>
                            </div>
                            <div class="LeftMainBoxTxt">
                                <div class="LeftMainBoxTxtTitle">
                                    NOTICA
                                </div>
                                <div class="LeftMainBoxTxtSubTitle">
                                    EL EXIGENTE CALENDARIO DEL REAL MADRID HASTA FINAL DE AÑO
                                </div>
                                <div class="LeftMainBoxTxtContents">
                                    El equipo disputará 8 partidos de Liga y 3 de la Champions League.
                                </div>
                                <div class="LeftMainBoxTxtMiddle">
                                    <div>
                                        <PlayCircleOutlineIcon style={PlayCircleOutlineIconStyle} />
                                    </div>
                                    <div class="LeftMainBoxTxtMiddleTxt">
                                        VER VÍDEO
                                    </div>
                                </div>
                            </div>
                            <div class="LeftMainBoxTxtFooter">
                                <div style = {IconPadding}>
                                    <TwitterIcon style={IconStyle}/>
                                </div>
                                <div style = {IconPadding}>
                                    <FacebookIcon style={IconStyle}/>
                                </div>
                            </div> 
                        </NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} xs={6}>
                    <div class="MainBox"
                        onMouseEnter = {() => setInHover2(true)}
                        onMouseLeave = {() => setInHover2(false)}
                    >
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="LeftMainBoxImg" style = {InHover2 ? hoverImgEnter : hoverImgLeave}>
                            <img src="https://i.esdrop.com/d/1x1Ax1I1a6.jpg" width="100%"/>
                        </div>
                        <div class="LeftMainBoxTxt">
                            <div class="LeftMainBoxTxtTitle">
                                NOTICA
                            </div>
                            <div class="LeftMainBoxTxtSubTitle">
                                PROGRAMACIÓN REALMADRID TV: ESTA NOCHE, ‘CÓDIGO DE DEFENSA’ Y ‘USS SEAVIPER’
                            </div>
                            <div class="LeftMainBoxTxtContents">
                                El canal blanco emite una doble sesión de cine a las 21:30 h y 23:15 h.
                            </div>
                            <div class="LeftMainBoxTxtMiddle">
                                <div>
                                    <PlayCircleOutlineIcon style={PlayCircleOutlineIconStyle} />
                                </div>
                                <div class="LeftMainBoxTxtMiddleTxt">
                                    VER VÍDEO
                                </div>
                            </div>
                        </div>
                        <div class="LeftMainBoxTxtFooter">
                            <div style = {IconPadding}>
                                <TwitterIcon style={IconStyle}/>
                            </div>
                            <div style = {IconPadding}>
                                <FacebookIcon style={IconStyle}/>
                            </div>
                        </div> 
                    </NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} xs={6}>
                    <div class="MainBox"
                        onMouseEnter = {() => setInHover3(true)}
                        onMouseLeave = {() => setInHover3(false)}
                    >
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="LeftMainBoxImg" style = {InHover3 ? hoverImgEnter : hoverImgLeave}>
                            <img src="https://i.esdrop.com/d/ZEIR7rgfkL.jpg" width="100%" />
                        </div>
                        <div class="LeftMainBoxTxt">
                            <div class="LeftMainBoxTxtTitle">
                                NOTICA
                            </div>
                            <div class="LeftMainBoxTxtSubTitle">
                                RAMOS BATE EL RÉCORD DE PARTIDOS DE SELECCIONES DE UN JUGADOR EUROPEO
                            </div>
                            <div class="LeftMainBoxTxtContents">
                                El capitán, que ya suma 177 encuentros con España, ha superado las internacionalidades de Buffon.
                            </div>
                            <div class="LeftMainBoxTxtMiddle">
                                <div>
                                    <PlayCircleOutlineIcon style={PlayCircleOutlineIconStyle} />
                                </div>
                                <div class="LeftMainBoxTxtMiddleTxt">
                                    VER VÍDEO
                                </div>
                            </div>
                        </div>
                        <div class="LeftMainBoxTxtFooter">
                            <div style = {IconPadding}>
                                <TwitterIcon style={IconStyle}/>
                            </div>
                            <div style = {IconPadding}>
                                <FacebookIcon style={IconStyle}/>
                            </div>
                        </div> 
                    </NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} xs={6}>
                    <div class="MainBox"
                        onMouseEnter = {() => setInHover4(true)}
                        onMouseLeave = {() => setInHover4(false)}
                    >
                    <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                        <div class="LeftMainBoxImg" style = {InHover4 ? hoverImgEnter : hoverImgLeave}>
                            <img src="https://i.esdrop.com/d/KW3oHDQBPm.jpg" width="100%" />
                        </div>
                        <div class="LeftMainBoxTxt">
                            <div class="LeftMainBoxTxtTitle">
                                VIDEO
                            </div>
                            <div class="LeftMainBoxTxtSubTitle">
                                ASÍ SERÁ EL ESTADIO SANTIAGO BERNABÉU
                            </div>
                            <div class="LeftMainBoxTxtContents">
                                Cierre de las cerchas norte y sur, entre Castellana y Padre Damián, determinantes en la nueva cubierta.
                            </div>
                            <div class="LeftMainBoxTxtMiddle">
                                <div>
                                    <PlayCircleOutlineIcon style={PlayCircleOutlineIconStyle} />
                                </div>
                                <div class="LeftMainBoxTxtMiddleTxt">
                                    VER VÍDEO
                                </div>
                            </div> 
                        </div>
                        <div class="LeftMainBoxTxtFooter">
                            <div style = {IconPadding}>
                                <TwitterIcon style={IconStyle}/>
                            </div>
                            <div style = {IconPadding}>
                                <FacebookIcon style={IconStyle}/>
                            </div>
                        </div> 
                    </NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} xs={6}>
                    <div class="MainBox"
                        onMouseEnter = {() => setInHover5(true)}
                        onMouseLeave = {() => setInHover5(false)}
                    >
                        <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                            <div class="LeftMainBoxImg" style = {InHover5 ? hoverImgEnter : hoverImgLeave}>
                                <img src="https://i.esdrop.com/d/dZoitnldIv.jpg" width="100%" />
                            </div>
                            <div class="LeftMainBoxTxt">
                                <div class="LeftMainBoxTxtTitle">
                                    NOTICA
                                </div>
                                <div class="LeftMainBoxTxtSubTitle">
                                    LOS VÍDEOS CONMEMORATIVOS DE LAS 13 COPAS DE EUROPA
                                </div>
                                <div class="LeftMainBoxTxtContents">
                                    Entre el 11 de mayo y el 13 de junio, el Real Madrid celebra los aniversarios de sus 13 títulos en la máxima competición continental.
                                </div>
                                <div class="LeftMainBoxTxtMiddle">
                                    <div>
                                        <PlayCircleOutlineIcon style={PlayCircleOutlineIconStyle} />
                                    </div>
                                    <div class="LeftMainBoxTxtMiddleTxt">
                                        VER VÍDEO
                                    </div>
                                </div>
                            </div>
                            <div class="LeftMainBoxTxtFooter">
                                <div style = {IconPadding}>
                                    <TwitterIcon style={IconStyle}/>
                                </div>
                                <div style = {IconPadding}>
                                    <FacebookIcon style={IconStyle}/>
                                </div>
                            </div> 
                        </NavLink>
                    </div>
                </Grid>
            </Grid>
            <NavLink to ="/RealMadrid/elclub" style={NavLinkStyle}>
                <div style={{ color:"rgb(2, 85, 165)", fontSize:"0.7rem", fontWeight:"700", alignItems:"center", paddingTop:"1rem" }}>
                        VER MÁS NOTICIAS
                </div>
            </NavLink>
        </div>
    )
}

export default LeftMain


