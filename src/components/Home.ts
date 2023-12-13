import styled from 'styled-components';

export const InputWrapper = styled.div<{ editable: boolean }>`
  pointer-events: ${(props) => (props.editable ? 'auto' : 'none')};
  opacity: ${(props) => (props.editable ? '1' : '0.5')};
`;
export const HourInput = styled.input``;
export const MinuteInput = styled.input``;
