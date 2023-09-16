import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    queryInput: '',
  };


  querySaving = input =>
    this.setState({
      queryInput: input.trim(),
    });

  render() {
    const { queryInput } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.querySaving} />
        <ImageGallery queryInput={queryInput} />
      </>
    );
  }
}
