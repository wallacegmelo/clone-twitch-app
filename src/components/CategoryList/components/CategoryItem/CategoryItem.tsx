import React from 'react'

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info
} from './styles'

interface iItemProps {
  item: {
    name: string,
    source: any
  }
}

const CategoryItem:React.FC<iItemProps> = ({item}) => {
  console.log(item)
  return (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9k</Info>
      </CategoryStatus>
    </CategoryContainer>
  )
}

export default CategoryItem