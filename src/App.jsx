import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Form } from './components/Form';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Form />
    </ChakraProvider>
  );
}

export default App;
