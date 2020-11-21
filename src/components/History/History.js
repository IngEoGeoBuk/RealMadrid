import React from 'react';
import './History.css';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function History() {

    const PcVer = styled.div`
        @media screen and (max-width:767px) {
            display: none;
        }
    `

    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width:767px) {
            display: grid;
        }
    `

    return (
        <div>
            <PcVer>
                <div class="History">
                    <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                        <div class="HistoryBoxPadding">
                                <div class="HistoryBox">
                                    <div class="HistoryBoxTitle">HISTORIA FÚTBOL</div>
                                    <div><img src="https://i.esdrop.com/d/8jaO5ydYL1.jpg" width="100%" /></div>
                                    <div class="HistoryBoxContents">Historia del Real Madrid</div>
                                </div>
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                        <div class="HistoryBoxPadding">
                            <div class="HistoryBox">
                                <div class="HistoryBoxTitle">LEYENDAS FÚTBOL</div>
                                <div><img src="https://i.esdrop.com/d/DgpKERmQdC.jpg" width="100%" /></div>
                                <div class="HistoryBoxContents">Jugadores míticos del Real Madrid</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                        <div class="HistoryBoxPadding" >
                            <div class="HistoryBox">
                                <div class="HistoryBoxTitle">HISTORIA BALONCESTO</div>
                                <div><img src="https://i.esdrop.com/d/ieh2tkCv3V.jpg" width="100%" /></div>
                                <div class="HistoryBoxContents" style={{ paddingBottom:"0.7rem" }}>Historia del Real Madrid de<br></br>baloncesto</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                        <div class="HistoryBoxPadding">
                            <div class="HistoryBox">
                                <div class="HistoryBoxTitle">LEYENDAS BALONCESTO</div>
                                <div><img src="https://i.esdrop.com/d/5zL77oIJql.jpg" width="100%" /></div>
                                <div class="HistoryBoxContents">Jugadores míticos del Real Madrid</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </PcVer>

            <MobileVer>
                <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                    <div class="HistoryBoxPadding">
                        <div class="HistoryBox">
                            <div>
                                <div>
                                    <img src="https://i.esdrop.com/d/8jaO5ydYL1.jpg" width="130vw" />
                                </div>
                            </div>
                            <div>
                                <div class="HistoryBoxTitle">HISTORIA FÚTBOL</div>
                                <div class="HistoryBoxContents">Historia del Real Madrid</div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                    <div class="HistoryBoxPadding">
                        <div class="HistoryBox">
                            <div><img src="https://i.esdrop.com/d/DgpKERmQdC.jpg" width="130vw" /></div>
                            <div>
                                <div class="HistoryBoxTitle">LEYENDAS FÚTBOL</div>
                                <div class="HistoryBoxContents">Jugadores míticos del Real Madrid</div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                    <div class="HistoryBoxPadding" >
                        <div class="HistoryBox">
                            <div><img src="https://i.esdrop.com/d/ieh2tkCv3V.jpg" width="130vw" /></div>
                            <div>
                                <div class="HistoryBoxTitle">HISTORIA BALONCESTO</div>
                                <div class="HistoryBoxContents" style={{ paddingBottom:"0.7rem" }}>Historia del Real Madrid de<br></br>baloncesto</div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                    <div class="HistoryBoxPadding">
                        <div class="HistoryBox">
                            <div><img src="https://i.esdrop.com/d/5zL77oIJql.jpg" width="130vw" /></div>
                            <div>
                                <div class="HistoryBoxTitle">LEYENDAS BALONCESTO</div>
                                <div class="HistoryBoxContents">Jugadores míticos del Real Madrid</div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <br></br>
        </MobileVer>
    </div>
    )
}

export default History
