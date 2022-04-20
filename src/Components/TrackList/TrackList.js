import React from 'react';
import './TrackList.css';
import '../Track/Track';


class TrackList extends React.Component {
  render () {
    return (
    <div className="TrackList">
    <Track />
    </div>
    )
  }
}

export default TrackList;
