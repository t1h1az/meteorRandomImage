import React, {Component} from 'react';
import ImageDetail from './ImageDetail';

const IMAGES = [
  { title: 'this', image: 'http://dummyimage.com/100x80'},
  { title: 'what do you want', image: 'http://dummyimage.com/100x80'},
  { title: 'more pictures', image: 'http://dummyimage.com/100x80'},
  { title: 'no no no more', image: 'http://dummyimage.com/100x80'}
];

const ImageList = () => {
  const RenderedImages = IMAGES.map((image) => {
    return <ImageDetail image={image} />;
  
  });
  
  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;

