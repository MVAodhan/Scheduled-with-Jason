import Head from 'next/head';

import { Box } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

import Container from '../components/kanban/Container';
import Column from '../components/kanban/Column';

import { useSupabase } from '../hooks/useSupabase.js';
import { useAtom } from 'jotai';

export default function Home() {
  const [eps, setEps] = useState([]);

  const supabase = useSupabase();

  useEffect(async () => {
    const { data, error } = await supabase
      .from('episodes')
      .select()
      .order('default_date', { ascending: true });

    setEps(data);
  }, []);

  let itemsTwo = [
    { id: 5, name: 'gary' },
    { id: 6, name: 'lil cado' },
    { id: 7, name: 'kevin' },
    { id: 8, name: 'quin' },
  ];

  return (
    <Box h="100vh" w="100vw">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav hProp="auto" />
      <Box
        w="100%"
        h="1vh"
        bgGradient="linear(to-r, #ff96bc,
      #ffc477 ,
      #fbe84a ,
      #c1f3a1 ,
      #96fce4 )"
      />
      <Header text="Upcoming Episodes" hProp="10vh" />

      <Box
        as="main"
        h="100%"
        w="100vw"
        d="flex"
        justifyContent="center"
        alignItems="center"
        color="blue"
      >
        <Container>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Container>
      </Box>
    </Box>
  );
}