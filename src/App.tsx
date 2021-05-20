import React from 'react';
import {
  Container,
} from '@material-ui/core'



import MenuBar from './components/Navigation/MenuBar.component';
import PostList from './components/Posts/PostList.component';

function App() {
  return (
    <Container maxWidth='md'>
      <MenuBar />
      <PostList />
    </Container>
  );
}

export default App;
