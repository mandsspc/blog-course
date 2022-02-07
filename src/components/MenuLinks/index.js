import React from 'react'
import * as S from './styles';
import getThemeColor from "../../utils/getThemeColor"

import Links from './content'

const MenuLinks = () => {
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {Links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink
                            cover
                            direction="left"
                            bg={getThemeColor()}
                            duration={0.6}
                            to={link.url}
                            activeClassName="active"
                        >
                            {link.label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
        
    )
}

export default MenuLinks;