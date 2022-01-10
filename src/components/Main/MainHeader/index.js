import React from "react"
import { LoadingDots, Dots, Title, Header } from "./MainHeaderElements"

const MainHeader = ({ loading, message, em }) => {
  return (
    <Header>
      <>
        <Title em={em}>
          {message}
          <sup>{em}</sup>
        </Title>
      </>
      {loading && (
        <LoadingDots>
          <p>Loading Analytics</p>
          <Dots />
          <Dots />
          <Dots />
        </LoadingDots>
      )}
    </Header>
  )
}

export default MainHeader
