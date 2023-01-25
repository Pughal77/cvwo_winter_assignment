import React from 'react'
interface Props {
  ls:any[]
  setls: React.Dispatch<React.SetStateAction<any[]>>
}
const BuildList = ({ls, setls }:Props) => {
  function handleDelete(x:number): void {
    setls(ls.filter((elem)=>elem !== x))
    }
  return (
    <div>{ls.map(
      (lol: any) => (
        <div key={lol}>
        <h2>{lol}</h2>
        <button className="delete" onClick={() => handleDelete(lol)}>Delete</button>
        </div>
      )
    )}</div>
  )
}

export default BuildList