import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    openModal: false,
  };

  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <ImageGalleryStyled className="gallery">
        {items.map(arr => {
          return (
            <ImageGalleryItem
              key={arr.id}
              alt={arr.tags}
              smallImg={arr.webformatURL}
              largeImg={arr.largeImageURL}
            />
          );
        })}
      </ImageGalleryStyled>
    );
  }
}

export default ImageGallery;
