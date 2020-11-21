import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./TrophyItem";
import "./Trophy.css";
import styled from 'styled-components'

function Trophy() {

    // 990일떄 4개, 767일떄 1개

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

    const MobileVerBorder = {
        border:"none"
    }

    const breakPoints1 = [
        { width: 0, itemsToShow: 1 },
        { width: 14, itemsToShow: 2 },
        { width: 28, itemsToShow: 3 },
        { width: 42, itemsToShow: 4 },
        { width: 56, itemsToShow: 5 },
        { width: 70, itemsToShow: 6 },
        { width: 84, itemsToShow: 7 },
        { width: 100, itemsToShow: 8 },
    ];

    const breakPoints2 = [
        { width: 0, itemsToShow: 1 },
        { width: 25, itemsToShow: 2 },
        { width: 50, itemsToShow: 3 },
        { width: 75, itemsToShow: 4 },
    ];

    const breakPoints3 = [
        { width: 0, itemsToShow: 1 },
    ]

    return (
        <div>
            <PcVer>
                <div style={{ paddingTop: "1rem" }}>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="2%" height="2%"/>
                </div>
                <div style={{ fontSize:"1.5rem", fontWeight:"400", paddingTop:"1rem" }}>
                    PALMARÉS DEL REAL MADRID
                </div>
                <div class="Trophy">
                    <Carousel breakPoints={breakPoints1}>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/RyuPg8eOXU.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeo FIFA al Mejor<br></br>Club del Siglo XX</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/GNKfLnUhzQ.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas de Europa</div>
                                <div class="TrophyNumber">13</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/e75wrU0D9I.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Mundiales de<br></br>Clubes</div>
                                <div class="TrophyNumber">7</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/z50K4wmxu8.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>Europa</div>
                                <div class="TrophyNumber">4</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/bY9hsZhE82.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas de la UEFA</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Ligas</div>
                                <div class="TrophyNumber">34</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas del Rey</div>
                                <div class="TrophyNumber">19</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>España</div>
                                <div class="TrophyNumber">11</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/MmXN3rO5vg.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copa de la Liga</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/pgC3UPD8Pk.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Pequeñas Copas<br></br>del Mundo</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas Latinas</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/soqIT1Z7P5.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Campeonatos<br></br>Regionales</div>
                                <div class="TrophyNumber">18</div>
                            </div>
                        </Item>
                        <Item style={{borderRight:"none"}}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/XDHQ6dXWaN.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeos<br></br>Mancomunados</div>
                                <div class="TrophyNumber">5</div>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </PcVer>

            <Medium>
                <div style={{ paddingTop: "1rem" }}>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="4%" height="4%"/>
                </div>
                <div style={{ fontSize:"1.5rem", fontWeight:"400", paddingTop:"1rem" }}>
                    PALMARÉS DEL REAL MADRID
                </div>
                <br></br>
                <div class="Trophy">
                    <Carousel breakPoints={breakPoints2}>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/RyuPg8eOXU.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeo FIFA al Mejor<br></br>Club del Siglo XX</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/GNKfLnUhzQ.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas de Europa</div>
                                <div class="TrophyNumber">13</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/e75wrU0D9I.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Mundiales de<br></br>Clubes</div>
                                <div class="TrophyNumber">7</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/z50K4wmxu8.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>Europa</div>
                                <div class="TrophyNumber">4</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/bY9hsZhE82.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas de la UEFA</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Ligas</div>
                                <div class="TrophyNumber">34</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas del Rey</div>
                                <div class="TrophyNumber">19</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>España</div>
                                <div class="TrophyNumber">11</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/MmXN3rO5vg.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copa de la Liga</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/pgC3UPD8Pk.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Pequeñas Copas<br></br>del Mundo</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="70%"/></div>
                                <div class="TrophyTitle">Copas Latinas</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div><img src="https://i.esdrop.com/d/soqIT1Z7P5.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Campeonatos<br></br>Regionales</div>
                                <div class="TrophyNumber">18</div>
                            </div>
                        </Item>
                        <Item style={{borderRight:"none"}}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/XDHQ6dXWaN.jpg" width="70%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeos<br></br>Mancomunados</div>
                                <div class="TrophyNumber">5</div>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </Medium>
            <MobileVer>
            <div style={{ paddingTop: "0.5rem" }}>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="4%" height="4%"/>
                </div>
                <div style={{ fontSize:"1rem", fontWeight:"400", paddingTop:"0.3rem" }}>
                    PALMARÉS DEL REAL MADRID
                </div>
                <br></br>
                <div class="Trophy" style={{ margin:"5%" }}>
                    <Carousel breakPoints={breakPoints3}>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/RyuPg8eOXU.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeo FIFA al Mejor<br></br>Club del Siglo XX</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/GNKfLnUhzQ.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Copas de Europa</div>
                                <div class="TrophyNumber">13</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/e75wrU0D9I.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Mundiales de<br></br>Clubes</div>
                                <div class="TrophyNumber">7</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/z50K4wmxu8.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>Europa</div>
                                <div class="TrophyNumber">4</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/bY9hsZhE82.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Copas de la UEFA</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Ligas</div>
                                <div class="TrophyNumber">34</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/AeQgFioHk0.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Copas del Rey</div>
                                <div class="TrophyNumber">19</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Supercopas de<br></br>España</div>
                                <div class="TrophyNumber">11</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/MmXN3rO5vg.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Copa de la Liga</div>
                                <div class="TrophyNumber">1</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/pgC3UPD8Pk.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Pequeñas Copas<br></br>del Mundo</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/lbf8MJJiyB.jpg" width="50%"/></div>
                                <div class="TrophyTitle">Copas Latinas</div>
                                <div class="TrophyNumber">2</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/soqIT1Z7P5.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Campeonatos<br></br>Regionales</div>
                                <div class="TrophyNumber">18</div>
                            </div>
                        </Item>
                        <Item style={MobileVerBorder}>
                            <div>
                                <div><img src="https://i.esdrop.com/d/XDHQ6dXWaN.jpg" width="50%"/></div>
                                <div class="TrophyTitle TrophyTitle2">Trofeos<br></br>Mancomunados</div>
                                <div class="TrophyNumber">5</div>
                            </div>
                        </Item>
                    </Carousel>
                </div>
                <br></br>
            </MobileVer>
        </div>
    )
}

export default Trophy;