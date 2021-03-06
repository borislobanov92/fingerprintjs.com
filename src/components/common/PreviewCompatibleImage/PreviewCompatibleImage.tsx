import React from 'react'
import Img, { GatsbyImageFluidProps, GatsbyImageProps } from 'gatsby-image'

export type ImageInfo = GatsbyImageProps & {
  childImageSharp?: GatsbyImageProps
  image?: string | { childImageSharp: GatsbyImageProps }
}

interface Props {
  className: string
  imageInfo?: ImageInfo | string
}

const PreviewCompatibleImage = ({ className, imageInfo }: Props) => {
  if (!imageInfo) {
    return <p>PreviewCompatibleImage can not be rendered (no imageInfo)</p>
  }

  const imageStyle = { borderRadius: '5px' }

  if (typeof imageInfo === 'string') {
    return <img className={className} style={imageStyle} src={imageInfo} alt='' />
  }

  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && typeof image != 'string' && isFluid(image.childImageSharp)) {
    return <Img className={className} style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (childImageSharp && isFluid(childImageSharp)) {
    return <Img className={className} style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img className={className} style={imageStyle} src={image} alt={alt} />

  return null
}

function isFluid(imageInfo: ImageInfo): imageInfo is GatsbyImageFluidProps {
  return (imageInfo as GatsbyImageFluidProps).fluid !== undefined
}

export default PreviewCompatibleImage
