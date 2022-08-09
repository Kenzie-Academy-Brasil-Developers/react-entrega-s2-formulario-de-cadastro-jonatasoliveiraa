import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #212529;
  .divHeader {
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 18px;
    align-items: center;
   
    .buttonLogout {
      text-decoration: none;
      color: #fff;
      background-color: #212529;
      padding: 15px 18px;
      font-weight: 600;
      border-radius: 4px;
      border: 1px solid #212529;
      cursor: pointer;
    }
  }
  @media (min-width: 768px){
      .divHeader{
        margin: 0 180px;
      }
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 118px;
  border-bottom: 1px solid #212529;
  .divInfo {
    height: 100%;
    color: #fff;
    display: flex;
    font-weight: 700;
      font-size: 18px;

    justify-content: space-between;
    margin: 0 18px;
    align-items: center;
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #868e96;
    }
  }
  @media (min-width: 768px){
      .divInfo{
        margin: 0 180px;
      }
    }
`;
