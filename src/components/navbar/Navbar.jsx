import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://images.pexels.com/photos/53159/man-old-fisherman-portrait-53159.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="profile" />
                    
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default Navbar
