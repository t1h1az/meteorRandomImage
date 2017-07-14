import React, {Component} from 'react';
import ImageDetail from './ImageDetail';

const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);
  const RenderedImagesA = validImages.map((image) => {
      return <ImageDetail image={image} key={image.id}/>;
  });

  return (
    <ul className="media-list list-group">
      {RenderedImagesA}
    </ul>
  );
};

export default ImageList;
