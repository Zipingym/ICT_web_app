import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Main = styled.div`
  width: 100vw;
  height: 150px;
  background-color: black;
  //border-top: solid 2px black;
`

export const Linked = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px white;
`

export const A = styled(Link)`
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
  &:hover{
    text-decoration:underline;
  }
  font-weight: bold;
  color: white;
`

export const FooterImgPart = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 25px;
`

export const IntroduceBy = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SchoolText = styled.div`
  font-size: 15px;
  margin-left: 40px;
  margin-right: 40px;
  color: white;
`

export const DucamiText = styled.div`
  font-size: 15px;
  color: white;
`