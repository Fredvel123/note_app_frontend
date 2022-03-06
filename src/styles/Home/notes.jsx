import styled from "styled-components";
// icons
import { LinkOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const NotesStyles = styled.div`
  padding: 3vh 1%;
  width: 80%;
  margin-left: 10%;
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;  background: ${colors.blueDark};
  h2 {
    font-family: ${fonts.letter4};
  }
  /* border: 2px solid red; */
  .links {
    display: flex;
    justify-content: space-between;
    width: 20%;
    /* background: green; */
  }
  @media screen and (max-width: 800px ){
    width: 90%;
    margin-left: 5%;
  }
  @media screen and (max-width: 550px ){
    .links {
      width: 30%;
    }
    h2 {
      font-size: 18px;
    }
  }
`
export const LinkButton = styled(LinkOutlined)`
  color: white;
  font-size: 25px;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 550px ){
    font-size: 20px;
  }
`
export const RemoveButton = styled(DeleteOutlined)`
  font-size: 25px;
  color: white;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 550px ){
    font-size: 20px;
  }
`
export const EditButton = styled( EditOutlined )`
  font-size: 25px;
  color: white;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 550px ){
    font-size: 20px;
  }
`
export const Title = styled.h2`
  margin-left: 10%;
  margin-top: 5vh;
  font-family: ${fonts.letter2};
  @media screen and (max-width: 800px ){
    margin-left: 5%;
  }
  @media screen and (max-width: 550px ){
    font-size: 20px;
  }
`
export const Message = styled.h3`
  margin-left: 10%;
  margin-top: 3vh;
  font-family: ${fonts.letter4};
  font-size: 15px;
  letter-spacing: -0.2px;
  a {
    color: gray;
  }
  @media screen and (max-width: 800px ){
    margin-left: 5%;
  }
  @media screen and (max-width: 550px ){
    font-size: 15px;
  }
`