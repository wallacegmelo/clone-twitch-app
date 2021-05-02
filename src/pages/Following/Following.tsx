import React from 'react'
import { View, FlatList } from 'react-native'

import { CategoryList, Header, Heading, StreamList, Title } from '../../components'

import { Container, Main, Wrapper } from './styles'

interface Item {
  key: string,
  render: () => JSX.Element,
  isTitle?: boolean
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <CategoryList /> },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      { key: 'C2', render: () => <StreamList /> },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true
      },
      { key: 'C3', render: () => <View /> },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      { key: 'C4', render: () => <View /> }
    ]

    const indexes: number[] = []

    items.forEach((item, index) => item.isTitle && indexes.push(index))

    return {
      data: items,
      indexes
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  )
}

export default Following