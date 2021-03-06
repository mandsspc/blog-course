import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1.5rem 0;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : '#var(--highlight)'};
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  min-height: 70px;
  min-width: 70px;
  margin-left: 2rem;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.8rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1rem;
`