import BuildList from "./build_list";
const NavBar = () => {
    return ( 
        <nav className="NavBAr">
            <h2>Home</h2>
            <BuildList ls={[1,2,3]}/>
        </nav>
     );
}
 
export default NavBar;