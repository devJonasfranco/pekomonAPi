import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10.5rem;
  margin: 0 auto;

  /* background: green; */

  display: flex;
  align-items: center;
  justify-content: center;
`
export const SearchPokemon = styled.div`
  width: 37.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 3px solid ${(props) => props.theme['yellow-500']};
  border-radius: 8px 8px 8px 8px;

  input {
    width: 100%;
    height: 2rem;
    border: none;
    background: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-900']};

    padding-left: 0.9375rem;
    border-radius: 5px 0 0 5px;
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-200']};
    }

    &:hover {
      background-color: ${(props) => props.theme['gray-400']};
      transition: background-color 0.2s;
      &::placeholder {
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }
  svg {
    margin-right: 10px;
    color: ${(props) => props.theme['yellow-500']};
  }
`
