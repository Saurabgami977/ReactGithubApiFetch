import { CircularProgress } from '@material-ui/core'
import React from 'react'

export default function Loader() {
    return (
        <div style={{
            margin: 'auto',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress />
        </div>
    )
}
