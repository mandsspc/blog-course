import React from 'react';

import * as S from './styles'

import Icons from './icons'
import Links from './content'

const SocialLinks = () => {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {Links.map((link, i) => {
                    const Icon = Icons[link.label]

                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksLink 
                                href={link.url}
                                title={link.label} 
                                target="_blank" 
                                rel="noopener noreferrer"
                             >
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    )
}

export default SocialLinks