import './Dashboard.css'

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';


const TableauDashboard = () => {

  return (
    <div className='test'>
      <Helmet>
        <script src="https://tableau.washington.edu/javascripts/api/tableau.embedding.3.latest.min.js" type="module" />
      </Helmet>
      <tableau-viz id='tableau-viz' src='https://tableau.washington.edu/views/Global_Publications_2023/GlobalPublicationsOverview' width='1000' height='700' hide-tabs toolbar='bottom'></tableau-viz>
      <a className="tableau-link" href="https://tableau.washington.edu/views/Global_Publications_2023/GlobalPublicationsOverview" target="_blank">Open in larger tab</a>
    </div>
  );
};

export default TableauDashboard;
