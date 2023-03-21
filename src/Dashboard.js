import './Dashboard.css'

import React, { useEffect, useRef } from 'react';

const TableauDashboard = () => {
  const tableauRef = useRef(null);

  useEffect(() => {
    const vizElement = tableauRef.current;
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.onload = () => {
      new window.tableau.Viz(vizElement, 'https://public.tableau.com/views/capstone_16783377101340/Dashboard1');
    };
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div className='test'>
      <div className='tableauPlaceholder' id='my-tableau-dashboard' style={{ position: 'relative' }}>
        <noscript>
          <a href='#'>
            <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/ca/capstone_16783377101340/Dashboard1/1_rss.png' style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none', width: '900px', height: '650px' }} ref={tableauRef}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='capstone_16783377101340/Dashboard1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/ca/capstone_16783377101340/Dashboard1/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
      <div>
          <a className="tableau-link" href="https://public.tableau.com/views/capstone_16783377101340/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link" target="_blank">Open in larger tab</a>
      </div>
    </div>
  );
};

export default TableauDashboard;
