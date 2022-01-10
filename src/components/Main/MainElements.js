import styled from "styled-components"

export const Wrapper = styled.div`
  background: linear-gradient(to right, #5327ee, #943bf3);
  position: absolute;
  color: white;
  min-width: 100%;
  //min-height: 100%;
`
export const MainTvl = styled.div`
  //background-color: rgba(264, 264, 264, 0.1);
  text-align: left;
  padding-left: 45px;
  margin-bottom: 50px;
  margin-top: 20px;
  h3 {
    font-size: 30px;
    color: #ffbbff;
  }

  @media screen and (max-width: 700px) {
    text-align: center;
    padding: 0px;
  }
`
