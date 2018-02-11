import React, { Component } from 'react';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render () {
    return (
      <section className="library">
        {
          this.state.albums.map ( (album, index) =>
            <div key={index} >
              <img src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </div>
          )
        }
      {/*We'll use the .map() array method to convert
      the raw array data into an array of JSX elements
      that React can render. */}
      </section>
    );
  }
}

export default Library;
