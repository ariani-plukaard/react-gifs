import React, { Component } from 'react';

class Gif extends Component{
  handleClick = () => {
    // console.log(this.props.id);
    this.props.selectedGifFunction(this.props.id);
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=790b76113ad19091847e8e18e6ad32d99c29d31266c9c034&rid=giphy.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif
