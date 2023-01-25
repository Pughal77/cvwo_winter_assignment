import { create } from "domain";

interface Props {
    ls:number[],
    setls : React.Dispatch<React.SetStateAction<number[]>>,
    setCreate: React.Dispatch<React.SetStateAction<boolean>>,
    create:boolean
}
const Create = ({ls,setls,setCreate,create}: Props) => {
    const handleCreate = (x: string) => {
        const a:number = parseInt(x);
        ls.push(a)
        setls(ls);
    }
    return ( <div className="create">
         <form onSubmit={(a)=>console.log(a)}>
            numbers only <br />
            put number here:<input type="text" />
            <input type="submit"/>
         </form>
         <button className="cancel" onClick={()=>setCreate(false)}>Cancel</button>
    </div> );
}
 
export default Create;