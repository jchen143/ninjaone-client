import React from 'react';

import Home from "src/components/Home";
import Providers from './Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  );
};

export default App;
