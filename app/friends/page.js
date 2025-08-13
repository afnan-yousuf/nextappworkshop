"use client";

import { useEffect, useState } from "react";

export default function friendzz() {
  const [f, setf] = useState([]);
  useEffect(() => {

    fetch('api/friends').then((response)=>{
        return response.json()
    }).then((data)=>{
        setf(data)
    })

  },[]);

  return (
    <>
      <p>Friends List</p>
      <ul>{
        f.map((r,i)=>{
            return (
                <li className="text-lg text-pink-500 p-5" key={i}>{r.name}</li>
            )
        })
        }</ul>
    </>
  );
}
