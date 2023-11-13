import React from 'react';
import ListPost from '../src/component/ListPost';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
function ParticipantsPage({ pageProps }) {
  return (
    <>
      <Header />
      <ListPost />
      <Footer/>
    </>
  );
}

export default ParticipantsPage;
