import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'
import { AuthorsArray } from 'types/api'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard = ({
  name,
  role,
  photo,
  socialLinks,
  description
}: AuthorsArray) => (
  <S.Card key={name}>
    <S.Image>
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={photo.alternativeText}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
