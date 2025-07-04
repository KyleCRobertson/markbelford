import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const NavLink = styled(Link)`
  color: #585756;
  display: block;
  &.active {
    color: #585756;
    text-decoration: underline solid #000000;
    text-underline-offset: 4px;
    font-weight: 800;
  }
`;