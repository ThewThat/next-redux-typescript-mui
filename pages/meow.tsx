import React, { FC, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { Container, Grid } from '@mui/material';

interface Props {
    meow: any;
}

const Meow: FC<Props> = ({ meow }) => {

    useEffect(() => {
        console.log(meow);
    }, [])

    return (
        <Container maxWidth={'md'}>
            <h2>Meow Random</h2>
            <Image src={meow.url} width="300" height="300" alt={meow.file} />
        </Container>
    )
}

Meow.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Grid item xs={6}>
                <Sidebar />
            </Grid>
            <Grid item xs={6}>
                {page}
            </Grid>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://meow.senither.com/v1/random')
    const response = await res.json()

    return {
        props: {
            meow: response.data,
        },
        revalidate: 5,
    }
}

export default Meow
