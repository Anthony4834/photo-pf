import './navbar.css';

const NavBar = () => {

    const navBarOptions = ["option" ,"option" ,"option" ,"option" ,"option" ];

    return <>
        <div className="navBarWrapper">
            <h1 className='navTitle'>Portfolio</h1>
            <ul className="navBar">
                {navBarOptions.map((option, key) => <li className="navBarOption" key={key}>{option}</li>)}
            </ul>
        </div>
    </>
}

export default NavBar;