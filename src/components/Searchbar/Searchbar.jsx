import { Component } from 'react';
import { Button, Input, SearchbarStyled, SearchForm } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    input: '',
  };

  onInputChange = e => {
    this.setState({
      input: e.currentTarget.value.trim().toLowerCase(),
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input)

  };
  render() {
    const { input } = this.state;

    return (
      <SearchbarStyled className="searchbar">
        <SearchForm onSubmit={this.onFormSubmit} className="form">
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <Input
            onChange={this.onInputChange}
            className="input"
            value={input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
