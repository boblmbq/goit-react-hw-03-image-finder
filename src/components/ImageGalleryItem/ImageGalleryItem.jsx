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
    const { alt, smallImg, largeImg } = this.props;
    const { openModal } = this.state;
    return (
      <>
        <Li className="gallery-item">
          <Img
            src={smallImg}
            alt={alt}
            onClick={() => this.onImgClick(largeImg, alt)}
          />
          {openModal && (
            <Modal img={largeImg} alt={alt} onLeave={this.onImgClick} />
          )}
        </Li>
      </>
    );
  }
}

export default ImageGalleryItem;
