import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./EspecialesItem";
import "./Especiales.css";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Especiales() {

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

    const breakPoints1 = [
        { width: 0, itemsToShow: 1 },
        { width: 25, itemsToShow: 2 },
        { width: 50, itemsToShow: 3 },
        { width: 75, itemsToShow: 4 },
    ];

    const breakPoints2 = [
        { width: 0, itemsToShow: 1 },
    ];

    return (
        <div>
            <PcVer>
                <div style= {{ backgroundColor:"black" }}>
                    <br></br>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="2%" height="2%"/>
                    <div style={{ color:"gray", backgroundColor:"black", fontSize:"1.5rem" }}>ESPECIALES</div>
                </div>

                <div class="Especiales">
                    <Carousel breakPoints={breakPoints1}>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/Oi6lcjJmMS.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents">¡LA DÉCIMA!</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/I0xDoxDpTy.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents">¡LA DECIMOTERCERA!</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/7dnUK9n04i.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents" style = {{ paddingBottom:"1vw" }}>ALFREDO DI STÉFANO, EL MEJOR JUGADOR DE<br></br>TODOS LOS TIEMPOS</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/u7XpwDeRgr.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents">¡LA 34ª LIGA!</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/5furZKXZe6.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents">¡UNDÉCIMA SUPERCOPA DE ESPAÑA!</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/bMrTQrtwCG.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                        <div class="EspecialesBoxContents">MODRIC, PREMIO THE BEST 2018</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                    </Carousel>
                </div>
            </PcVer>




            <Medium>
            <div style= {{ backgroundColor:"black" }}>
                    <br></br>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png"  width="4%" height="4%"/>
                    <div style={{ color:"gray", backgroundColor:"black", fontSize:"1.5rem" }}>ESPECIALES</div>
                </div>

                <div class="Especiales">
                    <Carousel breakPoints={breakPoints1}>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/Oi6lcjJmMS.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/I0xDoxDpTy.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/7dnUK9n04i.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/u7XpwDeRgr.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/5furZKXZe6.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div><img src="https://i.esdrop.com/d/bMrTQrtwCG.jpg" width="100%" /></div>
                                        <div class="EspecialesBoxTitle">ESPECIAL</div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                    </Carousel>
                </div>
            </Medium>


            
            <MobileVer>
            <div style= {{ backgroundColor:"black" }}>
                    <br></br>
                    <img src="https://i.esdrop.com/d/9kPaHCUZ3K.png" width="4%" height="4%"/>
                    <div style={{ color:"gray", backgroundColor:"black", fontSize:"1.5rem" }}>ESPECIALES</div>
                </div>

                <div class="Especiales">
                    <Carousel breakPoints={breakPoints2}>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox" >
                                        <div class="EspecialesBoxMobile" >
                                            <img src="https://i.esdrop.com/d/Oi6lcjJmMS.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents">¡LA DÉCIMA!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div class="EspecialesBoxMobile" >
                                            <img src="https://i.esdrop.com/d/I0xDoxDpTy.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents">¡LA DECIMOTERCERA!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div class="EspecialesBoxMobile" >
                                            <img src="https://i.esdrop.com/d/7dnUK9n04i.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents" style = {{ paddingBottom:"1vw" }}>ALFREDO DI STÉFANO,<br></br>EL MEJOR JUGADOR DETODOS<br></br> LOS TIEMPOS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div class="EspecialesBoxMobile" >
                                            <img src="https://i.esdrop.com/d/u7XpwDeRgr.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents">¡LA 34ª LIGA!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div class="EspecialesBoxMobile">
                                            <img src="https://i.esdrop.com/d/5furZKXZe6.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents">¡UNDÉCIMA SUPERCOPA<br></br> DE ESPAÑA!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to ="/RealMadrid/elclub" style={{ textDecoration:"none" }}>
                                <div class="EspecialesBoxPadding">
                                    <div class="EspecialesBox">
                                        <div class="EspecialesBoxMobile" >
                                            <img src="https://i.esdrop.com/d/bMrTQrtwCG.jpg" width="200vw" height="250vw" />
                                            <div>
                                                <div class="EspecialesBoxTitle">ESPECIAL</div>
                                                <div class="EspecialesBoxContents">MODRIC,<br></br>PREMIO THE BEST 2018</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </Item>
                    </Carousel>
                </div>
            </MobileVer>
        </div>
    )
}

export default Especiales;