import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles';
import getThemeColor from "../../utils/getThemeColor"

import Avatar from '../Avatar';

const Profile = () => {
    const {
        site: {
            siteMetadata: { name, position, description }
        },
    } = useStaticQuery(graphql`
        query MyQuery {
         site {
            siteMetadata {
                name
                description
                position
          }
        }
      }          
    `)

    return (
        <S.ProfileWrapper>
             <S.ProfileLink
                to="/"
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
            >
                <Avatar />

                <S.Author>
                {name}
                    <S.Position>{position}</S.Position>
                </S.Author>
            </S.ProfileLink>
            <S.Description>{description}</S.Description>
        </S.ProfileWrapper>
    )
}

export default Profile