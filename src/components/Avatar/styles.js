import styled from 'styled-components';
import media from 'styled-media-query'
import { GatsbyImage } from 'gatsby-plugin-image'

export const AvatarWrapper = styled.div`
    .gatsby-image-wrapper {
        border-radius: 50%;
        height: 4.75rem;
        width: 4.75rem;
        margin: auto;
    
        ${media.lessThan("large")`
            height: 2.75rem;
            width: 2.75rem;
        `}
    }
    `;
