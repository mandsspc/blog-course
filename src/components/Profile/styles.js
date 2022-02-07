import styled from 'styled-components';
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.div`
    color: var(--texts);
    display: flex;
    flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    tansition: color 0.5s;
    cursor: pointer;

    ${media.lessThan("large")`
       display: flex;
       text-align: left;
    `}
`;

export const Author = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 0.5rem;
    color: #var(--texts);
    
    &:hover {
        color: var(--highlight);
    }

    ${media.lessThan("large")`
        font-size: 1.2rem;
        margin: 0 0 0 10px;
    `}
`
export const Position = styled.h3`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--texts);
    margin-top: 6px;
    
    &:hover {
        color: var(--highlight);
    }

    ${media.lessThan("large")`
        font-size: 0.8rem;
        margin-top: 0.2rem;
    `}
`;

export const Description = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-heigth: 1.4rem;
    padding: 5px 0;

    ${media.lessThan("large")`
        display: none;
    `}
`;