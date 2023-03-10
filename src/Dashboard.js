import './Dashboard.css'

function TableauDashboard() {
  return (
    <div className='test'>
        <div>
        <iframe src="http://public.tableau.com/views/capstone_16783377101340/Dashboard1?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:language=en-US&amp;:loadOrderID=0" width="900" height="650"></iframe>
        </div>
        <div>
            <a className="tableau-link" href="https://public.tableau.com/views/capstone_16783377101340/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link" target="_blank">Open in larger tab</a>
        </div>
    </div>
  );
}

export default TableauDashboard;
