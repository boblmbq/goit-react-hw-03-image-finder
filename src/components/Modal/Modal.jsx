import { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
const rootModal = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.closeModal)
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.onLeave();
    }
  };

  render() {
    const { img, alt } = this.props;
    return createPortal(
      <Overlay className="overlay">
        <ModalStyled className="modal">
          <img src={img} alt={alt} />
        </ModalStyled>
      </Overlay>,
      rootModal
    );
  }
}

export default Modal;
