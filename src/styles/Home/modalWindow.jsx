import styled from 'styled-components';


export const ModalWindowStyles = styled.div`
  /* background: ${({open}) => open ? 'red':'green'}; */
  background: #1a1d42;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: ${({open}) => open ? 'translateX(0)': 'translateX(-250%)' };
  position: fixed;
  height: 55vh;
  width: 50%;
  top: 22.5vh;
  left: 25%;
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  @media screen and (max-width: 520px) {
    font-size: 12px;
    width: 90%;
    left: 5%;
  }
  .buttons {
    margin-top: 5vh;
    display: flex;
    width: 45%;
    justify-content: space-around;
    button {
      cursor: pointer;
      border-radius: 07px;
      font-size: 22px;
      color: white;
      border: none;
      width: 30%;
      height: 7vh;
      background: #009688;
      &:hover{
        background: #e62041;
      }
      @media screen and (max-width: 900px) {
        width: 45%;
        font-size: 17px;
      }
      @media screen and (max-width: 640px) {
        font-size: 14px;
      }
    }
  }
`