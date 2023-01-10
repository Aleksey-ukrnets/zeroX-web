import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback){
    const observer = useRef()

    useEffect(()=>{
        let child = childRef.current
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0

        }
        observer.current = new IntersectionObserver(([target])=> {
            if(target.isIntersecting){
                console.log('isIntersecting')
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)
        return function (){
            observer.current.unobserve(child)
        }
    }, [callback])
}