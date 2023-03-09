import './Description.css'

function Description() {
    return(
        <div className="description">
            <div className="text-box">
                <h1>About Rosetta</h1>
                <p>Global Publications plays an important role in OGA, especially when it comes to Global presence. 
                    The dashboard of Global Publications (right here) shows publications and co-publications by UW faculties. 
                    This dashboard shows UW co-authorship in different institutions that are outside of the USA. 
                    Tools like this are important as it demonstrates the influence UW faculties and alumni have on academic publications worldwide. 
                    It is an excellent tool to easily showcase and to be understood by others about how much impact UW has on other institutions.
                </p>
                <p>However, There has been a decrease in users of OGA’s Global Publications Data Dashboard as their old system for backend, 
                    Microsoft Academic Graph, has stopped providing services since 2019. 
                    Therefore, our project goal is to reconnect 
                    the backend to the OGA’s database and be able to have up-to-date data. 
                    Additionally, we want to broaden our project scope to not only the international data, 
                    but also the USA publication data and add an entry point on the iSchool website by directing users to our web page.
                </p>
            </div>
            <div className="image-box">
            <img src={require("./imgs/DescriptionImg.png")} alt="stock" width="200" height="200"/>
            </div>
        </div>
    )
}

export default Description;