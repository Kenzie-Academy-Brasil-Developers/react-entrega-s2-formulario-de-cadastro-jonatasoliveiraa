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
  @media (min-width: 768px) {
    .divHeader {
      width: 500px;
      margin: auto;
    }
  }
  @media (min-width: 1024px) {
    .divHeader {
      width: 830px;
      margin: auto;
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
  @media (min-width: 768px) {
    .divInfo {
      width: 500px;

      margin: auto;
    }
  }
  @media (min-width: 1024px) {
    .divInfo {
      width: 830px;
      margin: auto;
    }
  }
`;

export const Main = styled.main`
  margin: 22px 18px;
  .containerMain {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    align-items: center;

    .buttonAdd {
      background: #212529;
      border-radius: 4px;
      padding: 15px 15px 13px 15px;
      border: 1px solid #212529;
      img {
        width: 15px;
      }
    }
  }
  .containerList {
    margin-top: 20px;
    background-color: #212529;
    width: 100%;
    height: 416px;
    padding-bottom: 20px;
    border-radius: 4px;
    overflow: scroll;
    overflow-x: visible;
    ::-webkit-scrollbar {
      width: 10px;
      background-color: #212529;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #868e96;
      border-radius: 10px;
    }

    ul {
      width: 100%;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        display: flex;
        justify-content: space-between;
        background-color: #121214;
        padding: 15px;
        width: 85%;
        margin: auto;
        border-radius: 4px;
        .divTechs {
          display: flex;
          justify-content: space-between;
          width: 90%;

          p {
            color: #fff;
            font-weight: 700;
            font-size: 16px;
          }
          span {
            font-weight: 400;
            font-size: 12px;
            color: #868e96;
          }
        }
        button {
          background: none;
          border: none;
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: 500px;

    margin: 22px auto;
    .containerList {
      margin-top: 20px;
      background-color: #212529;
      width: 100%;
      height: 416.37px;
      border-radius: 4px;
      ul {
        width: 100%;
        padding-top: 20px;
        li {
          display: flex;
          justify-content: space-between;
          background-color: #121214;
          padding: 15px;
          width: 90%;
          margin: auto;
          border-radius: 4px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    width: 830px;

    margin: 22px auto;
    .containerList {
      margin-top: 20px;
      background-color: #212529;
      width: 100%;
      height: 416.37px;
      border-radius: 4px;
      ul {
        width: 100%;
        padding-top: 20px;
        li {
          display: flex;
          justify-content: space-between;
          background-color: #121214;
          padding: 15px;
          width: 90%;
          margin: auto;
          border-radius: 4px;
        }
      }
    }
  }
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  .modalPosition {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;

    .modalContainer {
      width: 90%;
      height: 400px;
      background: #212529;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .modalOptions{
        width: 100%;
        display: flex;
      flex-direction: column;
      gap: 30px;
      }

      .modalHeader {
        display: flex;
        color: #fff;
        justify-content: space-between;
        background: #343b41;
        padding: 20px;
        button {
          color: #868e96;
          font-weight: 700;
          background: none;
          border: none;
        }
      }
      .divform {
        button {
          padding: 16px;
          border-radius: 4px;
          font-family: "inter";
          font-weight: 500;
          font-size: 16px;
          background-color: #ff577f;
          color: #fff;
          cursor: pointer;
          border: 1px solid #ff577f;
        }
      }
    }
    @media (min-width: 428px) {
      .modalContainer {
        width: 369px;
      }
    }
  }
`;
