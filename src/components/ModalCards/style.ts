import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as Progress from '@radix-ui/react-progress'

export const Overlay = styled(Dialog.Overlay)`
  background-color: green;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`
export const Content = styled(Dialog.Content)`
  width: 25rem;
  height: 37.5rem;

  min-width: 20rem;
  border-radius: 6px;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme['blue-200']};
  border: 0.4rem solid ${(props) => props.theme['yellow-300']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-800']};
  }
  img {
    width: 80%;
    height: auto;
    border: 2px solid ${(props) => props.theme['gray-800']};
    box-shadow: 0px 0px 10px 2px ${(props) => props.theme['yellow-300']};
    border-radius: 6px;
    margin: 1rem 0;
  }
`

export const Title = styled(Dialog.Title)`
  text-transform: uppercase;
`
export const Close = styled(Dialog.Close)`
  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['yellow-500']};
    transition: background-color 0.2s;
    cursor: pointer;
  }
`
export const Description = styled(Dialog.Description)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 10px;
    p {
      color: ${(props) => props.theme['gray-800']};

      font-weight: 500;
      line-height: 1.5rem;
    }
  }
`

export const ProgressRoot = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 99999px;
  flex: 2;

  height: 10px;
`
export const ProgressIndicador = styled(Progress.Indicator)`
  background-color: ${(props) => props.theme['yellow-300']};
  width: 0%;
  height: 100%;

  transition: transform 0.8s;
`
