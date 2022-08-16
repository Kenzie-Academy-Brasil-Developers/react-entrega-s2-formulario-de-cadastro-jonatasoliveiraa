import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  p{
    color: red;
  }

  .divForm {
    background-color: #212529;
    width: 90%;
    height: 100%;
    border-radius: 4px;
    h2 {
      text-align: center;
      color: #fff;
    }
  }
  @media (min-width: 425px){
    .divForm {
      width: 369px;

    }
  }
  .divOptions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 22px;
    text-align: center;
    color: #868e96;
    font-weight: 600;
  }
  .register {
    padding: 16px;
    border-radius: 4px;
    font-family: "inter";
    font-weight: 500;
    font-size: 16px;
    background-color: #868e96;
    color: #fff;
    border: 1px solid #868e96;
    text-decoration: none;
  }
`;

export default Container;
