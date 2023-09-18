import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = props => {
  const { items } = props;
  return (
    <ImageGalleryStyled className="gallery">
      {items.map(arr => {
        return <ImageGalleryItem key={arr.id} {...arr} />;
      })}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
