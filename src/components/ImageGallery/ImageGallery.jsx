import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Component } from 'react';
import axios from 'axios';
import Button from 'components/Button';

const KEY = '38611269-e32dffa05ef058278d905c8af';
const BASE_URL = axios.create({
  method: 'get',
  baseURL: `https://pixabay.com/api/?key=${KEY}&orientation=horizontal&safesearch=true&per_page=12&`,
});

class ImageGallery extends Component {
  state = {
    items: null,
    status: 'idle',
    error: null,
  };
  page = 1;

  async componentDidUpdate(prevProps) {
    const { queryInput } = this.props;
    const prevInput = prevProps.queryInput;
    if (prevInput !== queryInput) {
      this.page = 1;
      const hits = await this.getImages(this.props.queryInput);
      this.setState({
        items: hits,
      });
    }
  }

  getImages = async (query = '') => {
    this.setState({
      status: 'pending',
    });

    try {
      const imgs = await BASE_URL.get(`q=${query}&page=${this.page}`);
      const {
        data: { hits },
      } = imgs;
      this.setState({
        status: 'resolved',
      });
      return hits;
    } catch (error) {
      this.setState({
        status: 'rejected',
        error: error.message,
      });
    }
  };

  onButtonClick = async e => {
    e.preventDefault();
    this.page += 1;
    const newImages = await this.getImages(this.props.queryInput);
    this.setState(prev => ({
      items: prev.items.concat(newImages),
    }));
  };

  render() {
    const { status, items, error } = this.state;

    if (status === 'idle') {
      return <h1>Enter name of a picture</h1>;
    }
    if (status === 'pending') {
      return <h1>Loading</h1>;
    }
    if (status === 'rejected') {
      return <h1>{error}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryStyled className="gallery">
            <ImageGalleryItem allItems={items} />
          </ImageGalleryStyled>
          <Button onClick={this.onButtonClick} />
        </>
      );
    }
  }
}

export default ImageGallery;
