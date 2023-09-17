import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { getImages } from 'utils/axios-fetching';
import Button from './Button';

export class App extends Component {
  state = {
    queryInput: '',
    page: 1,
    items: null,
    error: null,
    loadig: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.queryInput;
    const nextQuery = this.state.queryInput;
    if (prevQuery !== nextQuery) {
      this.setState({
        loading: true,
      });
      this.querySaving(nextQuery);
      try {
        const fetchedImages = await getImages(nextQuery);
        this.itemsSaving(fetchedImages);
      } catch (error) {
        this.setState({
          error,
        });
      }
    }
  }

  onSubmit = input => {
    this.querySaving(input);
  };

  itemsSaving = items => {
    this.setState({ items, loading: false });
  };

  querySaving = input =>
    this.setState({
      queryInput: input,
    });

  onButtonClick = () => {};

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {!items && <h1>Enter your query</h1>}
        {items && (
          <>
            <ImageGallery items={items} />
            <Button onClick={this.onButtonClick} />{' '}
          </>
        )}
      </>
    );
  }
}
