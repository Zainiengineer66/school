import { useEffect, useRef, useState } from 'react'
export function useReveal(){const ref=useRef(null),[visible,setVisible]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);o.disconnect()}},{threshold:.12});if(ref.current)o.observe(ref.current);return()=>o.disconnect()},[]);return[ref,visible]}
export function Reveal({children,className=''}){const [ref,visible]=useReveal();return <div ref={ref} className={`reveal ${visible?'show':''} ${className}`}>{children}</div>}
