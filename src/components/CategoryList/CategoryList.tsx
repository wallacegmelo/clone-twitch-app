import React from 'react'

import data from './data'

import { CategoryItem } from './components'
import { List } from './styles'

const CategoryList: React.FC = () => {
  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  )
}

export default CategoryList