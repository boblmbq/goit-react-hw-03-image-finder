import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    openModal: false,
  };

  render() {
    const { items } = this.props;
    return (
      <ImageGalleryStyled className="gallery">
        {items.map(arr => {
          return <ImageGalleryItem key={arr.id} {...arr} />;
        })}
      </ImageGalleryStyled>
    );
  }
}

export default ImageGallery;
