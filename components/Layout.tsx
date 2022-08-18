import React, { FC } from 'react'
import Head from 'next/head'
import { Grid } from '@mui/material'

type Props = {
    children: any
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Grid container>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <Grid container direction={'row'} flexWrap={'nowrap'}>
                {children}
            </Grid>
        </Grid>
    )
}

export default Layout