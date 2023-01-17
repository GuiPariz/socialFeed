import styled from "styled-components";
import igniteLogo from '../../assets/igniteIcon.svg'
export default function Header() {
  return (
    <SHeader>
      <img src={igniteLogo} alt="Logo Ignite" />
      Ignite Feed
    </SHeader>
  );
}

const SHeader = styled.header`
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 41 px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-800)  ;
  padding: 1.25rem 0;
  img{
    width: 4rem;
    height: 3.75rem;
  }
`;
