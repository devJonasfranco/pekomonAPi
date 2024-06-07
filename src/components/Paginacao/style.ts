import styled from 'styled-components'

export const ContainerPaginacao = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  gap: 32px;

  height: 6.25rem;
  /* background-color: red; */

  margin-top: -64px;
  span {
    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;
    /* background-color: green; */

    max-height: 1.875rem;
    width: 8rem;
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
    &:hover {
      cursor: pointer;
      transition: color 0.2s;
      color: ${(props) => props.theme['yellow-300']};
    }
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['yellow-300']};
    font-size: 1.125rem;
    font-weight: bold;
    background-color: ${(props) => props.theme['blue-500']};

    width: 20px;
    height: 30px;

    border-radius: 3px;
    &:hover {
      cursor: pointer;
      transition: color 0.2s;
      color: ${(props) => props.theme['yellow-500']};
      background-color: ${(props) => props.theme['blue-400']};
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme['yellow-500']};
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
    }
  }
  button {
    background-color: transparent;
    border: none;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:disabled svg {
      cursor: not-allowed;
    }
  }
`
interface NumeroPaginaType {
  $variante?: boolean
}

export const NumeroPaginasContainer = styled.p<NumeroPaginaType>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['yellow-300']};
  font-size: 1.125rem;
  font-weight: ${(props) => (props.$variante ? 'bold' : 'normal')};
  background-color: ${(props) => props.theme['blue-500']};
  border: 3px solid
    ${(props) => (props.$variante ? props.theme['yellow-500'] : 'none')};

  width: 20px;
  height: 30px;

  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transition: color 0.2s;
    color: ${(props) => props.theme['yellow-500']};
    background-color: ${(props) => props.theme['blue-400']};
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme['yellow-500']};
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }
`
