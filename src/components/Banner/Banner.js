import React from 'react'
import './Banner.css'
import Grid from "@material-ui/core/Grid"
import { NavLink } from 'react-router-dom'

function Banner() {
    return (
        <div class="Banner">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    
                    <NavLink to ="/RealMadrid/elclub" style={{textDecoration: "none"}}>
                        <img src="https://i.esdrop.com/d/ylFAEXx5zp.jpg" width="100%"/>
                    </NavLink>
                        <div class="BannerTxt">
                            <div class="BannerTxtTop">
                                NOTICIA
                            </div>
                            <div class="BannerTxtBottom">
                                Horarios y resultados de los madridistas convocados con sus selecciones
                            </div>
                        </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner