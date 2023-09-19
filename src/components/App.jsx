import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { getImages } from 'utils/axios-fetching';
import Button from './Button';

export class App extends Component {
  state = {
    queryInput: '',
    page: 1,
    items: [],
    error: null,
    loadig: false,
    loadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { queryInput: prevQuery, page: prevPage } = prevState;
    const { queryInput: nextQuery, page: nextPage } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({
        loading: true,
      });
      try {
        const fetchedImages = await getImages(nextQuery, nextPage);
        const { hits, totalHits } = fetchedImages;
        this.itemsAdding(hits, totalHits);
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

  itemsAdding = (items, totalItems) => {
    this.setState(prev => ({
      items: [...prev.items, ...items],
      loading: false,
      loadMore: this.state.page < Math.ceil(totalItems / 12),
    }));
  };

  querySaving = input =>
    this.setState({
      page: 1,
      items: [],
      loadMore: false,
      queryInput: input,
    });

  onButtonClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { items, loadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {items.length > 0 ? (
          <ImageGallery items={items} />
        ) : (
          <h1>Enter your query</h1>
        )}
        {loadMore && <Button onClick={this.onButtonClick} />}
      </>
    );
  }
}
