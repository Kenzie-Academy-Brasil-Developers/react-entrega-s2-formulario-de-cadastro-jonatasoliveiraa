import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 22px;
  gap: 20px;

  p{
    color: #fff;
  }
  input {
    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    padding: 16px;
    color: #fff;
    outline: none;
    font-weight: 500;
    font-size: 1rem;
  }
  label {
    color: #fff;
  }
  .buttonLogin {
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
  select {
    background: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    padding: 16px;
    color: #868e96;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export default Form;
