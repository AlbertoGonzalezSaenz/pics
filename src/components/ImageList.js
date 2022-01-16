import React from 'react';
import './ImageList.css'
import ImageCard  from './ImageCard';

const ImageList = ({pics}) => {
    const displayPics = pics.map(({id,urls:{regular}, description}) => <ImageCard key={id} id={id} src={regular} description={description}/>)

    return (
        <div className='image-list'>
            {displayPics}
        </div>
    )
}

export default ImageList;