import React from 'react'
interface Props {
  ls:any[]
}
const BuildList = ({ls}:Props) => {
  return (
    <div>{ls.map(
      (lol: any) => (
        <h2>{lol}</h2>
      )
    )}</div>
  )
}

export default BuildList