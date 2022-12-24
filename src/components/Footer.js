import React, { useEffect } from 'react'
import axios from 'axios'
export default function Footer() {
    useEffect(() => {
     axios.get('https://zerox.pro/api/twitter')
     .then((resp) => {
        console.log(resp)
     })
    }, [])
    
  return (
    <div style={{width:'100%', height: '300px', background: '#DAFF01', position:'relative', bottom: '0'}}>footer</div>
  )
}
