import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = item => {
  return (
    <ImageGalleryStyled className="gallery">
      <ImageGalleryItem />
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
