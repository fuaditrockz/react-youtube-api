import React, { Component } from 'react'
import VideoListItem from './video_list_item'

export class VideoList extends Component {
  render () {
    const props = this.props
    return (
      <ul className='col-md-4 list-group'>
        {props.videos.map((video) => (
          <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
          />
        ))}
      </ul>
    )
  }
}

// const VideoList = (props) => {
//   const videoItems = props.videos.map((video, id) => {
//     return <VideoListItem key={id} video={video} />
//   })

//   return (
//     <ul className="col-md-4 list-group">
//       {videoItems}
//     </ul>
//   )
// }

export default VideoList
