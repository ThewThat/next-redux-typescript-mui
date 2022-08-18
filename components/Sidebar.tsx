import React,{FC} from 'react'
import Link from 'next/link';

import { Paper, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';

type Props = {}

const CustomizedPaper = styled(Paper)`
padding:1rem;
cursor:pointer;

:hover {
  color: #0070f3;
  border-color: #0070f3;
}
`;

const Sidebar:FC = (props: Props) => {
  return (
    <Grid spacing={2} container direction={'column'} >
         <Grid item>
          <Link href="/" passHref>
            <CustomizedPaper variant='outlined'
            >
              <h2>HOME&rarr;</h2>
              <p>Home Page</p>
            </CustomizedPaper>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/todo" passHref>
            <CustomizedPaper variant='outlined'
            >
              <h2>TODO LIST [REDUX] &rarr;</h2>
              <p>TODO LIST Page</p>
            </CustomizedPaper>
          </Link>
        </Grid>
        <Grid item>

          <Link href="/posts" passHref>
            <CustomizedPaper variant='outlined'
            >
              <h2>POSTS [SSR Fetch Data] &rarr;</h2>
              <p>POSTS Page</p>
            </CustomizedPaper>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/meow" passHref>
            <CustomizedPaper variant='outlined'
            >
              <h2>MEOW [SSR Fetch IMG Data] &rarr;</h2>
              <p>Meow Page</p>
            </CustomizedPaper>
          </Link>
        </Grid>
      </Grid>
  )
}

export default Sidebar