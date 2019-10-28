import React from 'react';
import './App.css'

import Header from './components/Header';
import Container from './components/Container';
import Comment from './components/Comment';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Card name='João Silva' date='04 Jun 2019' data='React é Muito bom!!'>
          <Comment comment='concordo!!' user_comment='Marcelo Silva' />
          <Comment comment='demais!!' user_comment='Maria Silva' />
        </Card>

        <Card name='Roberto Gomes' date='04 Jun 2019' data='Bom dia Galera !!'>
          <Comment comment='Bom dia Amigo' user_comment='Marcelo Silva' />
        </Card>

        <Card name='Julio' date='04 Jun 2019' data='Aprendendo React na rocketseat !!'>
          <Comment comment='Que top cara, vou começar também' user_comment='Marcelo Silva' />
        </Card>
      </Container>
    </>
  );
}
