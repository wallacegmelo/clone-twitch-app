import React from 'react'
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../styles/colors'

import { Avatar, Button, Container, OnlineStatus, SideOptions } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <SideOptions>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </SideOptions>
    </Container>
  )
}

export default Header