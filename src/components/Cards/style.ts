import styled from 'styled-components'

export const ContainerCards = styled.div`
  /* background: red; */
  min-height: 900px;

  display: flex;
  padding: 0 5rem;
  justify-content: flex-start;

  gap: 0.1rem 2rem;

  flex-wrap: wrap;

  section {
    border: 0.4rem solid ${(props) => props.theme['yellow-300']};
    width: 12.5rem;
    height: 15.625rem;
    border-radius: 0.3125rem;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['blue-200']};
  }
  section:nth-child(n + 5) {
    margin-top: -6rem;
  }
  button {
    border: 0.4rem solid ${(props) => props.theme['yellow-300']};
    width: 12.5rem;
    height: 15.625rem;
    border-radius: 0.3125rem;

    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['blue-200']};
    &:hover {
      background-color: ${(props) => props.theme['blue-300']};
      box-shadow: 1px 1px 8px 2px ${(props) => props.theme['yellow-500']};
    }
  }
  button:nth-child(n + 5) {
    margin-top: -6rem;
  }
`
