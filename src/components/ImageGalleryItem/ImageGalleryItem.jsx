import React, { Component } from 'react';
import { Img, Li } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    openModal: false,
  };
  onImgClick = () => {
    this.setState(prev => ({
      openModal: !prev.openModal,
    }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props;
    const { openModal } = this.state;
    return (
      <>
        <Li className="gallery-item">
          <Img
            src={webformatURL}
            alt={tags}
            onClick={() => this.onImgClick(largeImageURL, tags)}
          />
          {openModal && (
            <Modal img={largeImageURL} alt={tags} onLeave={this.onImgClick} />
          )}
        </Li>
      </>
    );
  }
}

export default ImageGalleryItem;
