import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

 import * as S from './styles'; 

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage 
                src="../../images/person.png" 
                alt="Avatar" 
                placeholder='blurred' 
            />
        </S.AvatarWrapper>
    )
}

export default Avatar;