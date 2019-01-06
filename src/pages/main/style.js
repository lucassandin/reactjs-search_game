import styled from "styled-components";

export const StyleMain = styled.div`
  background: #919bff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px;
  text-align: center;
  font-size: 26px;

  button {
    width: 100%;
    padding: 15px;
    font-size: 13px;
    border: none;
    background: #915dff;
    color: #fff;
    margin: 30px 0 0;

    &:active {
      background: #7230ff;
    }
  }
`;
