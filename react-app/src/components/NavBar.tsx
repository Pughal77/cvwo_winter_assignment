import { useState } from "react";
import BuildList from "./BuildList";
import Create from "./Create";
const NavBar = () => {
    const [nums,setNums] = useState<number[]>([0,1,2]);
    const [create,setCreate] = useState<boolean>(false)
    const handleCreate = ()=>{
        setCreate(true);
    }
    return ( 
        <nav className="NavBar">
            <h2>Home</h2>
            <BuildList ls={nums} setls={setNums}/>
            <button onClick={()=>handleCreate()}>Create</button>
            {create && <Create create={create} setCreate={setCreate}setls={setNums} ls={nums}/>}
        </nav>
     );
}
 
export default NavBar;