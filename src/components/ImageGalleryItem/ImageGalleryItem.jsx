import { Img, Li } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ allItems }) => {
  return (
    <>
      {allItems.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Li className="gallery-item" key={id}>
          <Img src={webformatURL} alt={tags} data-large-image={largeImageURL} />
        </Li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
