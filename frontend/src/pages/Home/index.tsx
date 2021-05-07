import React from 'react';
import Box from '@material-ui/core/Box';

const Home: React.FC = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginTop={7}>
        <img src="https://images.even3.com.br/jqmjbZmIKW--hc87Mg0gnKikecg=/fit-in/250x250/smart/even3.blob.core.windows.net/logos/8.80c714c8abe24affa5f6.png"/>
        <h2 style={{ color: '#6075b7' }}>Seja bem-vindo ao Canal Digital</h2>
      </Box>
    </>
  );
}

export default Home;
