import styled from 'styled-components';
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    height: 100vh;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.5rem;
    transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`;

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
      flex-direction: row;
    `}
`;

export const MenuBarLink = styled(AniLink)`
    display: block;

    &.active {
        span {
          color: var(--highlight);
        }
      }
`;

export const MenuBarItem = styled.span`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3rem;
    padding: 1rem;
    position: relative;
    width: 3.5rem;

    &.light {
        color: #d4d400;

        &:hover {
            color: #e2e240;
        }
    }

    &:hover {
        color: var(--highlight);
    }

    &.display {
        ${media.lessThan("large")`
          display: none;
        `}
      }
      ${media.greaterThan("large")`
        &:hover {
          color: var(--highlight);
        }
      `}
      ${media.lessThan("large")`
        height: 3.2rem;
        padding: .9rem;
        position: relative;
        width: 3.2rem;
      `}
`;

export const MenuBarItemLink = styled(AniLink)`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3rem;
    padding: 1rem;
    position: relative;
    width: 3.5rem;

    &.light {
        color: #d4d400;

        &:hover {
            color: #e2e240;
        }
    }

    &:hover {
        color: var(--highlight);
    }

    &.display {
        ${media.lessThan("large")`
          display: none;
        `}
      }
      ${media.greaterThan("large")`
        &:hover {
          color: var(--highlight);
        }
      `}
      ${media.lessThan("large")`
        height: 3.2rem;
        padding: .9rem;
        position: relative;
        width: 3.2rem;
      `}
`;