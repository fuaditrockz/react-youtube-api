import React, { Component } from 'react'

export class VideoListItem extends Component {
  render () {
    const props = this.props
    const video = props.video
    const onVideoSelect = props.onVideoSelect
    // console.log(video) // ini berguna untuk melihat data data yang bisa dipakai pada API Youtube
    return (
      <li
        className='list-group-item'
        onClick={() => onVideoSelect(video)}
      >
        <div className='video-list media'>
          <div className='media-left'>
            <img
              className='media-object'
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              style={{width: `${video.snippet.thumbnails.default.width}`}}
            />
          </div>
          <div className='media-body'>
            <h4 className='media-heading'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem
