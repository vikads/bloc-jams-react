import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '.././styles/Library.css';
import { Row, Col, Image } from 'react-bootstrap';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: albumData
    };
  }

  render () {
    return (
      <Row className="library show-grid">
        {
          this.state.albums.map ( (album, index) =>

              <Col xs={12} sm={4} md={6}  key={index} className="libraryAlbumSection">
                <Link to={`/album/${album.slug}`}  className="libraryAlbumInfo">
                  <Image responsive src={album.albumCover} alt={album.title} />
                  <div className="libraryAlbumTitle">{album.title}</div>
                  <div className="libraryAlbumArtist">{album.artist}</div>
                  <div className="libraryAlbumSongsLength">{album.songs.length} songs</div>
                </Link>

            </Col>
          )
        }
      {/*We'll use the .map() array method to convert
      the raw array data into an array of JSX elements
      that React can render. */}
      </Row>
    );
  }
}

export default Library;
