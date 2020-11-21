import React from 'react';
import Banner from '../components/Banner/Banner';
import Main from '../components/Main/Main';
import History from '../components/History/History';
import Especiales from '../components/Especiales/Especiales';
import Trophy from '../components/Trophy/Trophy';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components'

function LandingPage() {

    const PcVer = styled.div`
    @media screen and (max-width:990px) {
        display: none;
    }
    `

    return (
        <div>
            {/* 990일떄가 mobile ver */}
            <PcVer><br></br></PcVer>
            <Banner/>
            <Main/>
            <br></br><br></br>
            <History/>
            <Especiales/>
            <Trophy/>
            <br></br><br></br>
            <Footer/>
        </div>
    )
}

export default LandingPage
