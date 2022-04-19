import styled from "styled-components";

export const Root = styled.div.attrs({
  "data-tbsc-name": "Login--Root",
})<{}>`
  max-width: 500px;
  margin: auto;
  padding: 30px;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);
  & label {
    display: block;
    margin-bottom: 10px;
  }
  & input[type="text"],
  & input[type="email"],
  & input[type="password"] {
    display: block;
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 18px;
  }

  & input[type="submit"] {
    margin-top: 20px;
    width: 100%;
    font-size: 17px;
  }

  & div {
    margin-bottom: 20px;
  }
`;
Root.displayName = "LoginRoot";
