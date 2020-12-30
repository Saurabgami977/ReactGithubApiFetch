import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default function Box(props) {
    const classes = useStyles();
    return (
        <Card >
            <CardContent>
                <div className={classes.flex}>
                    <Typography variant="h5" component="h2">
                        {props.id}.
                     </Typography>
                    <Avatar src={props.img} />
                </div>

                <Typography variant="h5" component="h2" style={{ marginTop: '20px' }}>
                    Name: {props.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.url} target="__blank">Visit profile</Button>
            </CardActions>
        </Card>
    )
}
