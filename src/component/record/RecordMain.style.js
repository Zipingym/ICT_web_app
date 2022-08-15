import styled from "styled-components";

export const Wrapper = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Content = styled.section`
    margin:100px 30px;
    max-width:1100px; 
    display:grid;
    grid-template-rows:repeat(3,1fr);
    grid-template-columns:repeat(3,1fr);
    
    row-gap:30px;
    column-gap:30px;

    @media (max-width:1120px) {
        row-gap:5px;
        column-gap:5px;
    }

    > a {
        text-decoration:none;
    }

`

// 그냥 각각 사이즈를 줘야할 듯

export const WriteB = styled.div`
    width:100%; 
    height:calc(100% - 3px);
    background-color:#ebebeb;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:gray; 
`

export const WirteBPlus = styled.div`
    font-size:100px;
    @media (max-width:800px){
        font-size:70px;
    }
    font-weight:bold;
`

export const WirteBComment = styled.b`
    @media (max-width:800px){
        font-size:13px;
    }
    font-size:15px;
`

export const PostWrapper = styled.div`
    position:relative;
`

export const PostImg = styled.img`
    width:100%;
`

export const PostInfo = styled.div`
    width:100%;
    height:calc(100% - 4px);
    background-color:rgba(0,0,0,0.5);
    position:absolute;
    top:0px;
    left:0px; 
    color:white;  
    font-weight:bold;
    font-size:x-large;
    display:flex;
    justify-content:center;
    align-items:center;
`