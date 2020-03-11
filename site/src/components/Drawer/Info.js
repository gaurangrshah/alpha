/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Image, Text } from '@theme-ui/components'
import React, { useState } from 'react'
import { Link } from 'gatsby'

import Drawer from './Drawer'
import Portal from "../../elements/Portal"
import profile from "../../assets/images/jammers-greg.png"

export default function Info() {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.persist()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Box
        sx={{
          fontSize: ['1', '2'],
        }}
      >
        <a
          as={Link}
          onClick={handleClick}
          sx={{
            zIndex: 100,
            color: 'text',
            position: 'fixed',
            fontSize: ['1', null, '2'],
            cursor: 'pointer',
            bottom: 7,
            right: '0',
            padding: 1,
            bg: 'redHighlight',
            borderTopLeftRadius: 'lg',
            transform: 'scale(0.9) translateX(-16px)',
            transfrom: '',
            borderBottomLeftRadius: 'lg',
            transition: 'transform 300ms ease-in',
            overflow: 'hidden',
            fontFamily: 'sans',
            '&:hover': {
              transform: 'scale(1) translateX(-21px)',
              color: 'secondaryHover'
            }
          }}
        >
          {!isOpen ? 'curious?' : 'About Me'}
        </a>
      </Box>
      <Portal>
        <Drawer isOpen={isOpen}>
          <Box
            sx={{ display: ['block', null, 'flex'], justifyContent: 'space-between', fontFamily: 'sans' }}
          >
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
          </Box>
        </Drawer>
      </Portal>
    </>

  )
}
