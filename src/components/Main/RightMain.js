import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid"
import './Main.css'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FiltrarEventos from "./FiltrarEventos";
import { NavLink } from 'react-router-dom'

function RightMain() {

    const [Open1, setOpen1] = useState(false);

    const handleToggle1 = () => {
        setOpen1((Open1) => !Open1);
    }

    const [Open2, setOpen2] = useState(false);

    const handleToggle2 = () => {
        setOpen2((Open2) => !Open2);
    }

    const [Open3, setOpen3] = useState(false);

    const handleToggle3 = () => {
        setOpen3((Open3) => !Open3);
    }

    const RightMainIconStyle = {
        fontSize:"2rem",
        margin:"0.2rem"
    }

    return (
        <div class="RightMain">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <NavLink to ="/RealMadrid/rmtv" style={{textDecoration: "none"}}>
                        <div class="MainBox">
                                <div class="RightMainBox">
                                    <div>
                                        <DesktopMacIcon style={RightMainIconStyle} />
                                    </div>
                                    <div class="RightMainBoxTopTxt">REALMADRID TV</div>
                                </div>
                            <div class="RightMainBox1Img">
                                <div style={{ paddingTop:"0.4rem" }}>
                                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="7%" height="7%" />
                                </div>
                                <div class="RightMainBox1ImgTop">
                                    RealMadrid TV
                                </div>
                                <div class="RightMainBox1ImgBottom">
                                    Fútbol. Liga 2020/21. R. Madrid-Huesca
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </Grid>
                <Grid item xs={12}>
                    <div class="MainBox">
                        <NavLink to ="/RealMadrid/elclub" style={{textDecoration: "none"}}>
                            <div class="RightMainBox">
                                <div>
                                    <CalendarTodayIcon style={RightMainIconStyle} />
                                </div>
                                <div class="RightMainBoxTopTxt">AGENDA DEL REAL MADRID</div>
                            </div>
                        </NavLink>
                        <div class="RightMainBoxEvents">
                            <div style={{ padding:"0 0.5rem" }}>
                                <FiltrarEventos/>
                            </div>
                            <div style={{ padding:"0 0.5rem", fontSize:"0.8rem", fontWeight:"500" }}>
                                Todos los eventos
                            </div>
                        </div>

                        <div class="RightMainBoxMatchBig" 
                            onClick={handleToggle1}
                        >
                            {Open1 ? 
                            <div class="RightMainBoxMatchSamll" style={{ width:"100%", padding:"0.5rem 1rem" }}>
                                <img src="https://i.esdrop.com/d/0Q5ebiw61T.png" width="8%" height="8%" />
                                <div class = "RightMainBoxMatchSamll1">
                                    <div>ENTRENAMIENTO<br></br></div>
                                    <div style={{ fontWeight:"600" }}>Martes, 17 nov</div>
                                    <div>11:00H<br></br></div>
                                </div>
                            </div> : 
                            <div style={{ width:"100%" }}>
                                <div style={{ display:"flex", paddingTop:"1.5rem", paddingBottom:"1rem" }}>
                                    <div style={{ padding:"0 4rem" }}>
                                        <img src="https://i.esdrop.com/d/99y3tIR7Yn.png" width="60rem"/>
                                    </div>
                                    <div class="RightMainBoxMatchTxt">
                                        <div style={{ fontWeight:"500"}} >ENTRENAMIENTO</div>
                                        Ciudad Real Madrid<br></br>
                                        Puerta cerrada<br></br>
                                        Rueda de prensa: no.<br></br>
                                    </div>
                                </div>
                                <div style={{ alignItems:"center" }}>
                                    <div class="MobileMatchBig">Martes, 17 de noviembre</div>
                                    <div>11:00 h</div><br></br>
                                </div>
                            </div>
                            }

                        </div>
                        <div onClick={handleToggle2}>
                            {Open2 ? 
                                <div class="RightMainBoxMatchSamllClick">
                                    <div class="RightMainBoxMatchSamllClickTop">
                                        <div class="SmallBoxTeam">Villareal</div>
                                        <div class="VS">VS</div>
                                        <div class="SmallBoxTeam">Real Madrid</div>
                                    </div>
                                    <br></br>
                                    <div class="RightMainBoxMatchSamllClickMiddle">
                                        <img src="https://i.esdrop.com/d/lsWv95yMRz.png" width="15%" height="15%"/>
                                        <img src="https://i.esdrop.com/d/nCo0qLwqTm.png" width="8%" height="8%"/>
                                        <img src="https://i.esdrop.com/d/0Q5ebiw61T.png" width="15%" height="15%" />
                                    </div>
                                    <div class="RightMainBoxMatchSamllClickBottom">
                                        <div class="BottomHead">sáb, 21 nov</div>
                                        <div class="BottomContents">
                                        16:15H<br></br>
                                        Estadio de la Cerámica<br></br><br></br>
                                        Por:Movistar LaLiga (opción de audio de Realmadrid TV)
                                        </div>
                                    </div>
                                </div> :
                                <div class="RightMainBoxMatchSamll">
                                    <img src="https://i.esdrop.com/d/lsWv95yMRz.png" width="8%" height="8%"/>
                                    <img src="https://i.esdrop.com/d/0Q5ebiw61T.png" width="8%" height="8%" />
                                    <div style={{ padding:"0 0.5rem" }}>
                                        Villarreal<br></br>
                                        Real Madrid
                                    </div>
                                    <div>
                                        LA LIGA<br></br>
                                        <div style={{ fontWeight:"500" }}>sáb, 21 nov</div>
                                        16:15H<br></br>
                                        Estadio de la Cerámica<br></br><br></br>
                                        Por:Movistar LaLiga (opción de audio de Realmadrid TV)
                                    </div>
                                </div>
                            }
                        </div>

                        <div onClick={handleToggle3}>
                            {Open3 ? 
                                <div class="RightMainBoxMatchSamllClick">
                                    <div class="RightMainBoxMatchSamllClickTop">
                                        <div class="SmallBoxTeam">Inter de Milán</div>
                                        <div class="VS">VS</div>
                                        <div class="SmallBoxTeam">Real Madrid</div>
                                    </div>
                                    <br></br>
                                    <div class="RightMainBoxMatchSamllClickMiddle">
                                        <img src="https://i.esdrop.com/d/pJKMvDMFZs.png" width="15%" height="15%"/>
                                        <img src="https://i.esdrop.com/d/nCo0qLwqTm.png" width="8%" height="8%"/>
                                        <img src="https://i.esdrop.com/d/0Q5ebiw61T.png" width="15%" height="15%" />
                                    </div>
                                    <div class="RightMainBoxMatchSamllClickBottom">
                                        <div class="BottomHead">mié, 25 nov</div>
                                        <div class="BottomContents">
                                        21:00H<br></br>
                                        San Siro<br></br><br></br>
                                        Por:Movistar Liga de Campeones (opción de audio de Realmadrid TV)
                                        </div>
                                    </div>
                                </div> :
                                <div class="RightMainBoxMatchSamll">
                                    <img src="https://i.esdrop.com/d/pJKMvDMFZs.png" width="8%" height="8%"/>
                                    <img src="https://i.esdrop.com/d/0Q5ebiw61T.png" width="8%" height="8%" />
                                    <div style={{ padding:"0 0.5rem" }}>
                                        Inter de Milán<br></br>
                                        Real Madrid
                                    </div>
                                    <div>
                                        CHAMPIONS LEAGUE<br></br>
                                        <div style={{ fontWeight:"600" }}>mié, 25 nov</div>
                                        21:00H<br></br>
                                        San Siro<br></br><br></br>
                                        Por:Movistar Liga de Campeones (opción de audio de Realmadrid TV)
                                    </div>
                                </div>
                            }
                        </div>

                        <NavLink to ="/RealMadrid/futbol" style={{textDecoration: "none"}}>
                            <div style={{ padding:"2rem 0", borderTop: "1px solid rgb(217, 217, 217)" }}>
                                <button class="RightMainBtn">
                                    VER TODO EL CALENDARIO
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default RightMain