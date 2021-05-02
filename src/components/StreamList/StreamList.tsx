import React from 'react'

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { StreamItem } from './components'
import { List } from './styles'

const StreamList: React.FC = () => {
  return (
    <List>
      <StreamItem source={streamThumbnail} />
      <StreamItem source={streamThumbnail} />
      <StreamItem source={streamThumbnail} />
    </List>
  )
}

export default StreamList