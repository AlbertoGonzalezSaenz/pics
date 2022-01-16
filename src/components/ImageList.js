import React from 'react';

const ImageList = ({pics}) => {
    const displayPics = () => {
        return pics.map(pic => <img key={pic.id} src={pic.urls.regular} />)
      }

    return (
        <div>
            {displayPics()}
        </div>
    )
}

export default ImageList;