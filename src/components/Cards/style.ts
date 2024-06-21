import styled from 'styled-components'

export const ContainerCards = styled.div`
  /* background: red; */
  min-height: 900px;

  display: flex;
  padding: 0 5rem;
  justify-content: flex-start;

  gap: 0.1rem 2rem;

  flex-wrap: wrap;

  /* section {
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
  } */
  button {
    border: 0.4rem solid ${(props) => props.theme['yellow-300']};
    width: 12.5rem;
    height: 15.625rem;
    border-radius: 0.3125rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${(props) => props.theme['blue-200']};
    &:hover {
      background-color: ${(props) => props.theme['blue-300']};
      box-shadow: 1px 1px 8px 2px ${(props) => props.theme['yellow-500']};
    }
    header {
      margin-bottom: -10px;
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      color: ${(props) => props.theme['gray-700']};
    }
    img {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    footer {
      width: 100%;
      padding: 10px;
    }
    p {
      border-bottom: 1px solid ${(props) => props.theme['gray-800']};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  button:nth-child(n + 5) {
    margin-top: -6rem;
  }
`
