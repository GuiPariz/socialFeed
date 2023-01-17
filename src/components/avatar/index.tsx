import styled, { css } from "styled-components";



export default function Avatar(props: { hasBorder: any; src: string | undefined; } ) {
  return (
    <SImage hasBorder={props.hasBorder}>
      <img src={props.src} />
    </SImage>
  );
}

interface SImageProps{
  hasBorder: boolean
}

const SImage = styled.div<SImageProps>`
  img {
    border-radius: 8px;
    ${props => props.hasBorder &&css`
    height: calc(3rem + 12px);
    width: calc(3rem + 12px);
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
    `}
    ${props => props.hasBorder === false &&css`
      height: 3rem;
      width: 3rem;
    `}
  }
`;
