import React, { FC, useEffect, useState } from 'react'
import { GetStaticProps } from 'next';
import Image from 'next/image'
import Link from 'next/link';

import { Box, Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { styled } from '@mui/material/styles';

const CustomizedPaper = styled(Paper)`
padding:1rem;
cursor:pointer;
margin:.5rem 0;

:hover {
  color: #0070f3;
}
`;

type Posts = {
    userId: number;
    id: number;
    title: number;
    body: string;
}

interface Props {
    posts: Array<Posts>;
    meow: object
}

const Posts: FC<Props> = ({ posts, image_random }: object) => {

    const [newArr, setNewArr] = useState([])

    useEffect(() => {
        const mergedArr = image_random.map((item, i) => Object.assign({}, item, posts[i]));
        setNewArr(mergedArr);
    }, [image_random,posts])

    return (
        <Container maxWidth={'md'}>
            <h2>Posts</h2>
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 600,
                    overflow: "hidden",
                    overflowY: "scroll",
                    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                }}
            >
                {newArr?.map(post => (
                    <Link key={post.id} href={`posts/${encodeURIComponent(post.id)}`} passHref>
                        <CustomizedPaper>
                            <Image src={post.download_url} width="300" height="150" alt={post.author} />
                            <Box >
                                <h5>{post.title}</h5>
                                {post.body.slice(0, 100) + '...'}
                            </Box>
                        </CustomizedPaper>
                    </Link>
                ))}
            </Box>
        </Container>
    )
}

Posts.getLayout = function getLayout(page) {
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
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const res_img = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const image_random = await res_img.json()

    return {
        props: {
            posts,
            image_random: image_random
        },
        revalidate: 5,
    }
}

export default Posts