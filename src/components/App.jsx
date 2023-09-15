import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    queryInput: '',
  };

  querySaving = input => {
    if (input !== this.state.queryInput) {
      // чи не буде так краще написати??
      this.setState({
        queryInput: input.trim(),
      });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.querySaving} />
        <ImageGallery />
      </>
    );
  }
}
