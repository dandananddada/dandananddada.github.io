import React from "react"
// import * as Styled from "./games.styled.js"
// import { aliyun as imageSource } from "../../helper/image"

const GamesTemplate = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <React.Fragment>
     { JSON.stringify(data) }
    </React.Fragment>
  )
}
export default GamesTemplate
