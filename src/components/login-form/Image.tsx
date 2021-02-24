import React from 'react'
import styled from "styled-components"

const ProfilePic = styled.img`
  width: 160px;
  border-radius: 100px;
  margin: 0 auto;
  position: relative;
  bottom: 80px;
  box-shadow: 1px 14px 10px 1px rgba(0,0,0,0.1)
`

function Image(props: {imageUrl: string}) {
  return (
    <ProfilePic src={props.imageUrl} alt="avatar"></ProfilePic>
  )
}

export default Image
