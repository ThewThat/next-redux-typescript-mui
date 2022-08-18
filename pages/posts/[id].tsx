import React, { FC, useEffect } from "react"
import { GetStaticProps, GetStaticPaths } from 'next';
import { Paper, Grid, Box, Container } from "@mui/material";
import Link from "next/link";

import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

type Post = {
  userId: number;
  id: number;
  title: number;
  body: string;
}

interface Props {
  posts: Array<Post>;
}

const Post: FC<Props> = ({ post }: any) => {

  return (
    <Container maxWidth={'md'}>
      <Paper sx={{ p: 2, my: 5 }}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href="/posts" passHref>
          Back To Posts
        </Link>
      </Paper>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const res = await fetch(url)
  const posts = await res.json()

  const paths = posts.map((post: any) => {
    return {
      params: { id: String(post.id) },
    }
  })

  return {
    paths,
    fallback: false,
  }
};

Post.getLayout = function getLayout(page) {
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const id = params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
};

export default Post