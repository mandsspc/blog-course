import styled from 'styled-components';
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
    display: flex;

    ${media.lessThan("large")`
        flex-direction: column;
    `} 
`;

export const LayoutMain = styled.main`
    background: var(--background);
    min-heigth: 100vh;
    padding: 0 2.8rem 0 17rem;
    width: 100%;
    transition: background, color 0.5s;

    body#grid & {
        grid-template-areas:
          "posts"
          "pagination";
      }

    ${media.lessThan("large")`
        padding: 0 0 3rem 0;
    `}
`;