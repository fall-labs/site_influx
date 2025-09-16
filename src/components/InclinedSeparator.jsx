import styled from "styled-components";

const InclinedSeparator = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "40px"};
  margin: -1px 0;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgcolorbefore || "#000"};
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgcolorafter || "#fff"};
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export default InclinedSeparator;
