import styled from 'styled-components';
import media from "styled-media-query";

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
    list-style: none;
`;

export const MenuLinksItem = styled.li`
    padding: .5rem 0;

    .active {
        color: var(--highlight);
    }

    ${media.lessThan("large")`
        display: none;
    `}
`;

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--highlight);
    }
`;