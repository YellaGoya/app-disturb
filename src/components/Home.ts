import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  height: calc(100% - 76px);

  & > button {
    position: relative;
    display: block;
    margin: 5px auto;

    color: #323232;
    font-size: 1.4rem;
    font-family: 'pv';
    font-weight: 600;

    border: none;
    outline: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

export const InputWrapper = styled.div<{ editable: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;

  pointer-events: ${(props) => (props.editable ? 'auto' : 'none')};
  opacity: ${(props) => (props.editable ? '1' : '0.6')};

  transition: opacity 0.2s ease;

  & > * {
    color: #323232;
    font-size: 1.4rem;
    font-family: 'pv';
    font-weight: 600;
    font-feature-settings: 'tnum';
  }

  & > p {
    transform: translateY(-2px);
  }

  & > input {
    width: 2rem;
    border: none;

    outline: none;
    text-align: center;

    transition: color 0.2s ease;
    background-color: transparent;
  }

  & > input:focus {
    color: #ff6621;
  }
`;

export const ImgSpeaker = styled.img`
  position: absolute;
  bottom: 30px;
  left: 0;

  width: 100%;
  opacity: 0.8;
`;

export const HourInput = styled.input``;
export const MinuteInput = styled.input``;
