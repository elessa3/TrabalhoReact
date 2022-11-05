import styled from "styled-components";

export const Titulo = styled.div`
    background-color: #00F;
    color: ${(props) => props.tema === "black" ? "#F00": "#0F0"}
`