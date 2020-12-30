import { Grid } from '@material-ui/core'
import React from 'react'
import Box from './Box/Box'

export default function Boxes(props) {
    return (
        <Grid item sm={6} xs={12} md={3}>
            <Box
                name={props.name}
                id={props.id}
                img={props.img}
                url={props.url} />
        </Grid>
    )
}
