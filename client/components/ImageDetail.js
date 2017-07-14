import React, {Component} from 'react';

const ImageDetail = (props) => {
  return (
    <div>
      <div>
        {props.image.title}
      </div>
    </div>
  );
};

export default ImageDetail;