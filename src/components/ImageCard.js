import React, { useRef, useEffect, useState } from 'react';
import './ImageCard.css'

const ImageCard = ({id,src,description}) => {

    const [spans, setSpans] = useState(0)
    let enlarged = false
    const imageRef = useRef(null)

    const x = () => {
        const img = imageRef.current
        img.addEventListener('load', calcSpans)
    }

    const calcSpans = () => {
        const height = imageRef.current.clientHeight
        const spans = Math.ceil(height / 10 + 1)
        setSpans(spans)
        console.log(spans)
    }

    const enlargeImg = () => {
        const img = imageRef.current
        if(enlarged){
            img.style.transform = "scale(1)"
            img.style.transition = "transform 0.25s ease"
            enlarged = false
        }else {
            img.style.transform = "scale(1.5)"
            img.style.transition = "transform 0.25s ease"
            enlarged = true
        }
    }

    useEffect(x)

    return (
        <>
            <img 
                style={{gridRowEnd: `span ${spans}`}} 
                ref={imageRef} src={src} 
                alt={description}
                onClick={enlargeImg}
            />
        </>
    );
}

export default ImageCard;