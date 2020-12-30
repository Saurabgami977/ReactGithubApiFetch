import { AppBar, Avatar, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))
export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <Grid item position="sticky">
                <AppBar>
                    <Toolbar>
                        <Typography className={classes.typographyStyles}>
                            GitHub
                        </Typography>
                        <Avatar src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.0-1/p240x240/89242177_1290107174711924_5052128858728300544_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=PhsQwI08IlUAX9BJEgn&_nc_ht=scontent.fktm6-1.fna&tp=6&oh=8434ac681a100bba1ee206d5cd66e4a1&oe=60132413" />
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    )
}
