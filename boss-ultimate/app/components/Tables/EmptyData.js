import React from 'react';
import tableStyles from 'ba-styles/Table.scss';
import TableIcon from '@material-ui/icons/Apps';

function EmptyData() {
  return (
    <div className={tableStyles.nodata}>
      <TableIcon />
      No Data
    </div>
  );
}

export default EmptyData;
