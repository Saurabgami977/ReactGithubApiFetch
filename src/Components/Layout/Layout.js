import { Grid } from '@material-ui/core'
import React from 'react'
import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'

export default function Layout(props) {
    return (
        <div>
            <Grid container direction="column">
                <Navbar />
                <Content />
            </Grid>
        </div>
    )
}
