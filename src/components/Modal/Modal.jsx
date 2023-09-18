import { Component } from 'react';
import { Overlay,  ImgWrapper } from './Modal.styled';
import { createPortal } from 'react-dom';
const rootModal = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.props.onLeave();
    }
  };

  render() {
    const { img, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal} className="overlay">
        <ImgWrapper className="modal">
          <img src={img} alt={alt} />
        </ImgWrapper>
      </Overlay>,
      rootModal
    );
  }
}

export default Modal;
