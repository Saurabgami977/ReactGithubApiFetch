import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import Boxes from './Boxes/Boxes';
import axios from '../../axios'

export default function Content() {

    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get('users')
            .then(res => {
                setUsers(res.data);
                setIsLoading(false);
            })
    }, [])

    let data = '';
    if (isLoading === false) {
        data = users.map(user => (
            <Boxes
                name={user.login}
                id={user.id}
                img={user.avatar_url}
                url={user.html_url}
                key={user.id}
            />
        ))
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <Grid item container>
                <Grid item sm={2} />
                <Grid container item xs={12} sm={8} spacing={3}>
                    {data}
                </Grid>
                <Grid item sm={2} />
            </Grid>
        </div>
    )
}
