import React, { Component } from 'react';
import '.././styles/PlayerBar.css';
import { Row, Col, Navbar } from 'react-bootstrap';

class PlayerBar extends Component {
  render() {
    return (
      <Navbar fixedBottom>
       <Row className="show-grid">
         <Col sm={8} smOffset={2} xs={10} xsOffset={1} className="player-bar">

           <Row className="player-buttons">
             <Col xs={12}>

              <Col xs={4} className="button-text">
                 <button className="ion-btn" onClick={this.props.handlePrevClick}>
                   <span className="ion-skip-backward"></span>
                </button>
              </Col>

              <Col xs={4} className="button-and-text">
                <button className="ion-btn" onClick={this.props.handleSongClick}>
                  <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                </button>
              </Col>

              <Col xs={4} className="text-button">
                <button className="ion-btn" onClick={this.props.handleNextClick}>
                  <span className="ion-skip-forward"></span>
                </button>
              </Col>

            </Col>
          </Row>

          <Row id="current-song-display">

            <Col xs={12} className="button-and-text">
              {this.props.currentSong.title}
            </Col>

            <Col xs={12} className="button-and-text">
              {this.props.artist}
            </Col>

          </Row>

          <Row id="time-control">
            <Col xs={6} className="current-time text-button">{this.props.formatTime(this.props.currentTime)}</Col>
            <Col xs={6} className="total-time button-text">{this.props.formatTime(this.props.duration)}</Col>
            <Col xs={12}>
              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
              />
            </Col>
          </Row>

          <Row id="volume-control">
            <Col xs={8} xsOffset={2}>
              <Col xs={6} className="icon ion-volume-low text-button"></Col>
              <Col xs={6} className="icon ion-volume-high button-text"></Col>
              <Col xs={12}>
                <input
                  type="range"
                  className="seek-bar"
                  value={this.props.value}
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={this.props.handleVolumeChange}
                />
             </Col>

           </Col>
          </Row>

         </Col>
       </Row>
     </Navbar>

    );
  }
}

export default PlayerBar;
