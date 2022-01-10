import styled from "styled-components"

export const ProductWrapper = styled.div`
  //background-color: rgba(264, 264, 264, 0.1);
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`

export const ProductRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: left;
  margin: 20px;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`
export const Product = styled.div``

export const LeverageProduct = styled.div`
  margin: 0px 50px 20px 50px;
  //padding: 20px;
  --size: 220px;
  border-radius: 50px;
  background-color: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: var(--size);
  height: var(--size);

  img {
    :nth-child(1) {
      margin-top: -10px;
      width: 80px;
      height: 80px;
      @media screen and (min-width: 900px) {
        margin-top: 0px;
        width: 100px;
        height: 100px;
      }
    }
    :nth-child(2) {
      margin-top: 15px;
      width: 100px;
      height: auto;
      @media screen and (min-width: 900px) {
        margin-top: 10px;
        margin-bottom: -5px;
        width: 150px;
      }
    }
  }
  h4 {
    font-weight: 500;
    //margin-top: 20px;
    margin-top: 15px;
    color: #5327ee;
    background: white;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    padding: 40px;
  }
`

export const LendProduct = styled.div`
  margin: 0px 50px 20px 50px;
  //padding: 20px;
  --size: 220px;
  border-radius: 50px;
  background-color: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: var(--size);
  height: var(--size);

  img {
    :nth-child(1) {
      //margin-top: 0px;
      margin-bottom: -15px;
      width: 80px;
      height: 80px;
      @media screen and (min-width: 900px) {
        //margin-top: 10px;
        //margin-bottom: -10px;
        width: 100px;
        height: 100px;
      }
    }
    :nth-child(2) {
      margin: -20px 15px -20px 0;
      width: 100px;
      height: auto;
      @media screen and (min-width: 900px) {
        width: 120px;
        height: auto;
        margin-bottom: -35px;
      }
    }
  }
  h4 {
    font-weight: 500;
    //margin-top: 20px;
    margin-top: 15px;
    color: #5327ee;
    background: white;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;

    @media screen and (min-width: 900px) {
      font-size: 18px;
      width: 200px;
    }
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    padding: 40px;
  }
`
export const EarnProduct = styled.div`
  margin: 0px 50px 20px 50px;
  //padding: 20px;
  --size: 220px;
  border-radius: 50px;
  background-color: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: var(--size);
  height: var(--size);

  h3 {
    margin-top: 15px;

    font-weight: 500;
    font-size: 30px;
    em {
      font-style: normal;
      color: #ffbbff;
    }

    @media screen and (max-width: 900px) {
      font-size: 22px;
    }
  }

  img {
    margin-top: -5px;
    @media screen and (min-width: 900px) {
      margin-top: 10px;
    }
    width: 180px;
    height: 80px;
    @media screen and (min-width: 900px) {
      width: 220px;
      height: 100px;
    }
  }
  h4 {
    font-weight: 500;
    margin-top: 10px;

    color: #5327ee;
    background: white;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;

    @media screen and (min-width: 900px) {
      font-size: 18px;
      width: 200px;
    }
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    padding: 40px;
  }
`
