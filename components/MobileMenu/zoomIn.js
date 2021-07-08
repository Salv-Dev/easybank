import styled, { keyframes } from 'styled-components';

const BaseAnimation = styled.div`  
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingFunction};      
  animation-delay: ${props => props.delay};  
  animation-iteration-count: ${props => props.iterationCount};  
  animation-direction: ${props => props.direction}; 
  animation-fill-mode: ${props => props.fillMode};  
  animation-play-state:  ${props => props.playState};  
  display: ${props => props.display};
`;
BaseAnimation.defaultProps = {  
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'forwards',
  playState: 'running',
  display: 'block'
};

const ZoomInAnimation = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const ZoomIn = styled(BaseAnimation)`
    position: fixed;
    top: 0;
    left: 20px;
    right: 20px;
    z-index: 1;
    animation-name: ${ZoomInAnimation};
`;

export default ZoomIn;