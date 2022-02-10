import styled from 'styled-components';
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

export const FormStyles = styled.form`
  padding: 4vh 0;
  padding-left: 8%;
  width: 30%;
  display: flex;
  flex-direction: column;
  .password {
    display: flex;
    justify-content: space-between ;
    input {
      margin-right: 28px;
      width: 95%;
    }
  }
  button {
    cursor: pointer;
    margin-top: 4vh;
    height: 6vh;
    border-radius: 50px;
    background: #009688;
    border: none;
    color: white;
    transition: .3s;
    &:hover {
      background: #bd1baf;
    }
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  span {
    font-family: ${fonts.letter1};
    cursor: pointer;
    position: absolute;
    margin: 0 10px;
    color: #f7f7f7a2;
    margin-top: 1.5vh;
  }
  input {
    padding-left: 10px;
    font-family: ${fonts.letter4};
    color: white;
    padding-top: 2vh;
    background: #272b4b;
    height: 8vh;
    margin-bottom: 2vh;
    border: 1px solid ${({state}) => state ? 'green' : '#272b4b'};
    border-radius: 20px;
    &:focus {
      outline: none;
      border: 1px solid ${({state}) => state && state !== null  ? 'green' : 'red'};
    }
    &::-webkit-input-placeholder {
      color: #ffffff8b;
    }
  }
  }
`