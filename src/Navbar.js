import './Navbar.css'

function Navbar() {
    return(
        <div class="topnav">
            <div class="left-nav">
                <a class="active">Home</a>
                <a>Scholars</a>
                <a>Publications</a>
            </div>
            <div class="mid-nav">
                <img src={require("./imgs/logo.png")} width="100" height="100"/>
            </div>
            <div class="right-nav">
                <a>Sign In</a>
            </div>
        </div>
    )
}

export default Navbar;