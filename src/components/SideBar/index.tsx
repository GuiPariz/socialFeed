import styled from "styled-components";
import {PencilSimpleLine} from 'phosphor-react'
import Avatar from "../avatar";

export default function SideBar() {
  return (
    <SCard>
      <img
        src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      <SProfile>
          <Avatar hasBorder src="https://github.com/GuiPariz.png"/>
          <strong>Guilherme Pariz</strong>
          <span>Web Developer</span>
      </SProfile>
      <hr />
      <SButton>
        <PencilSimpleLine size={20}/>
        Editar seu perfil
      </SButton>
    </SCard>
  );
}

const SCard = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  img{
    width: 100% ;
    height: 72px;
    object-fit: cover;
  }
  hr{
    margin: 1.5rem 0;
   border: 1px solid var(--gray-600);
  }
`

const SProfile=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px );
  strong{
    margin-top: 1rem;
    font-weight: 700;
    font-size: 0.875rem,;
    line-height: 1.6;
    color: var(--gray-100);
  }
  span{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    color: var(--gray-400);
  }
`
const SButton = styled.button`
  color: var(--green-500);
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid var(--green-500);
  background-color: transparent;
  width: 12rem;
  display: flex;
  margin: 1.5rem auto 2rem;
  gap: 0.62rem;
  transition: color 0.2s, background-color 0.2s;
  :hover{
    background-color: var(--green-500);
    color: white;
  }
`