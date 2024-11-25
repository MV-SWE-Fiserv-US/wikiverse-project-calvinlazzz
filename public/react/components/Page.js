import React from 'react'

export const Page = ({page, onClick}) => {
  return (
      <div onClick={() => onClick(page.slug)} style={{ cursor: 'pointer' }}>

    <h3>{page.title}</h3>
    </div>
  )
  
}
