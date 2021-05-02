import React from 'react'

import {
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles'

interface iStreamProps {
  source: any
}

const StreamItem: React.FC<iStreamProps> = ({ source }) => {
  return (
    <StreamContainer>
      <StreamThumbnail source={source} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  )
}

export default StreamItem