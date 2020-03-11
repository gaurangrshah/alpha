/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Image, Text } from '@theme-ui/components'
import React, { useState } from 'react'
import profile from "../../../assets/images/jammers-greg.png"


export const AboutInfo = () => {
  return (
    <>
      <Image src={profile} sx={{
        width: '10em',
        height: '10%',
        borderRadius: '50%',
        clipPath: 'circle(50% at 50% 50%)',
        order: 2,
      }} />
      <Text sx={{
        color: 'altText',
        fontSize: 5,
        fontWeight: '600',
        flex: 1,
        px: 3,
        py: 4
      }}>
        Gaurang Shah
      </Text>
    </>
  )
}
