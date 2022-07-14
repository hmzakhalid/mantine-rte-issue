import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from 'react'
import dynamic from 'next/dynamic';

const RichTextEditor =  dynamic(() => import('@mantine/rte'), {
  ssr: false,

  loading: () => null,
});

const Home: NextPage = () => {
  const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
  const [value, setValue] = React.useState(initialValue);

  return (
    <div className={styles.container}>
      <RichTextEditor 
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

export default Home
