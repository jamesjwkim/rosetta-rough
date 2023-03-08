import './Navbar.css'

function Navbar() {
    return(
        <div class="topnav">
            <a class="active">Home</a>
            <a>Scholars</a>
            <a>Publications</a>
            <img src={require("./imgs/logo.png")} width="100" height="100"/>
        </div>
    )
}

export default Navbar;