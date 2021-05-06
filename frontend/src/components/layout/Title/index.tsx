import React from 'react';
import { TitleBox } from './styles';

const Title: React.FC = ({ children }) => {

  return (
    <TitleBox>
      {children}
    </TitleBox>
  );
}

export default Title