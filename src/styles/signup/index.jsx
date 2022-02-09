import styled from "styled-components";
// icons
import { MobileOutlined } from '@ant-design/icons';
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

const image = 'https://images.unsplash.com/photo-1501446393885-828292b7670a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'

export const SignUpStyles = styled.div`
  background:  linear-gradient(to right, #222831, #222831d3, #9198e5c0), url(${image}); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const HeaderStyles = styled.header`
  width: 100%;
  height: 17vh;
  display: grid;
  grid-template-columns: 25% 5% 10%;
  align-items: center;   
  padding: 0 5%;
  .icon {
    display: flex;
    align-items: center;
    h2 {
      font-family: ${fonts.letter3};
      font-weight: 300;
    }
  }
  a {
    font-family: ${fonts.letter1};
    margin-left: 5%;
    color: ${colors.gray};
    transition: .3s;
    &:hover {
      color: white;
    }
  }
`

export const IconMain = styled(MobileOutlined)`
  font-size: 35px;
`