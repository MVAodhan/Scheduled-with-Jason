import Head from 'next/head';

import { Box } from '@chakra-ui/react';

import { useEffect } from 'react';

import { useSupabase } from '../hooks/useSupabase.js';

import Link from 'next/link';

import Header from '../components/Header';
import Auth from '../components/Auth';

import { sessionAtom } from '../atoms';
import { useAtom } from 'jotai';

export default function Home() {
  const [session, setSession] = useAtom(sessionAtom);

  const supabase = useSupabase();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(supabase.auth.session());
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header text="Log In" />

      <Box
        as="main"
        h="90vh"
        w="100vw"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Auth />
        <Link href="/forgot-password">
          <a>Forgot Password</a>
        </Link>
      </Box>
    </Box>
  );
}
