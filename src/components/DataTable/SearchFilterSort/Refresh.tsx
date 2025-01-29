import React from 'react';
import RefreshLogo from 'src/media/RefreshLogo';
import { refreshContext } from 'src/providers/refreshProvider';

const Refresh: React.FC = () => {
  const { setRefresh} = React.useContext(refreshContext);

  return (
    <span onClick={() => {
      setRefresh(true);
    }}>
      <RefreshLogo />
    </span>
  );
};

export default Refresh;
