import React, {Component} from 'react';
import ImageDetail from './ImageDetail';
import axios from 'axios';

const IMAGESA = [
  { title: 'this', link: 'http://dummyimage.com/100x80', description: 'afaefu a elkfjh akfjh ekjh  kjhaefka jekjl'},
  { title: 'what do you want', link: 'http://dummyimage.com/100x80', description: 'afaefu a elkfjh akfjh ekjh  kjhaefka jekjl'},
  { title: 'more pictures', link: 'http://dummyimage.com/100x80', description: 'afaefu a elkfjh akfjh ekjh  kjhaefka jekjl'},
  { title: 'no no no more', link: 'http://dummyimage.com/100x80', description: 'afaefu a elkfjh akfjh ekjh  kjhaefka jekjl'}
];

const ImageList = (props) => {
  const RenderedImagesA = IMAGESA.map((image) => {
    console.log(props.images);
    return <ImageDetail image={image} key={image.title}/>;
  });

  return (
    <ul className="media-list list-group">
      {RenderedImagesA}
    </ul>
  );
};

export default ImageList;
