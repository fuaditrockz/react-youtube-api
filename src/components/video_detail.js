import React, { Component } from 'react'

export class VideoDetail extends Component {
  render () {
    const props = this.props
    const video = props.video
    if (!video) {
      return (
        <div> Loading ...</div>
      )
    }
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={url} />
        </div>
        <div className='details'>
          <h1> {video.snippet.title} </h1>
          <div className='row'>
            <div className='col-md-3'>
              <p>{video.snippet.channelTitle}</p>
            </div>
            <div className='col-md-6'>
              <p>{video.snippet.publishedAt}</p>
            </div>
          </div>
          <p> {video.snippet.description} </p>
        </div>
      </div>
    )
  }
}

export default VideoDetail
