import React from 'react'
import Grid from "@material-ui/core/Grid"
import LeftMain from "./LeftMain"
import RightMain from "./RightMain"
import styled from 'styled-components'

function Main() {

    const PcVer = styled.div`
        @media screen and (max-width:990px) {
            display: none;
        }
    `

    const MobileVer = styled.div`
        display: none;
        @media screen and (max-width:990px) {
            display: flex;
        }
    `

    return (
        <div>
            <PcVer>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                        <LeftMain/>
                    </Grid>
                    <Grid item xs={5}>
                        <RightMain/>
                    </Grid>
                </Grid>
            </PcVer>
            <MobileVer>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <LeftMain/>
                    </Grid>
                    <Grid item xs={12}>
                        <RightMain/>
                    </Grid>
                </Grid>
            </MobileVer>
        </div>
    )
}

export default Main
