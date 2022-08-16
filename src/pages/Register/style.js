import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 20px;

  .divForm {
    background-color: #212529;
    width: 90%;
    height: 100%;
    border-radius: 4px;
    margin-bottom: 60px;
    padding-bottom:20px;

    span{
      color: red;
      font-size: 14px;

    }
    
      h2 {
        text-align: center;
        color: #fff;
        padding-top: 20px;
      }
      p {
        text-align: center;
        color: #868e96;
        font-weight: 400;
        font-size: 12px;
        padding: 20px;
      }
    }
    @media (min-width: 425px){
    .divForm {
      width: 369px;

    }
  }
    .divHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin-top: 50px;
      margin-bottom: 10px;
      a {
        text-decoration: none;
        color: #fff;
        background-color: #212529;
        padding: 15px 18px;
        font-weight: 600;
        border-radius: 4px;
      }
    }
    @media (min-width: 425px){
    .divHeader {
      width: 369px;

    }
  }  
`;

export default Container;
