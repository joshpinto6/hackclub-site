import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode
} from 'theme-ui'
import { useEffect, useRef, useState, useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import BGImg from '../components/background-image'
import ForceTheme from '../components/force-theme'
import Footer from '../components/footer'
import Stage from '../components/stage'
import Carousel from '../components/index/carousel'
import Clubs from '../components/index/cards/clubs'
import HCB from '../components/index/cards/hcb'
import Hackathons from '../components/index/cards/hackathons'
import OuternetImgFile from '../public/home/outernet-110.jpg'
import Konami from 'react-konami-code'
import JSConfetti from 'js-confetti'
import Secret from '../components/secret'
import MailingList from '../components/index/cards/mailing-list'
import Icon from '../components/icon'
import GitHub from '../components/index/github'
import Comma from '../components/comma'
import Highway from '../components/index/cards/highway'
import Scrapyard from '../components/index/cards/scrapyard'
import Neighborhood from '../components/index/cards/neighborhood'
import HighSeas from '../components/index/cards/highseas'
import Shipwrecked from '../components/index/cards/shipwrecked'
import Juice from '../components/index/cards/juice'
import Tooltip from '../components/index/tooltip'
/** @jsxImportSource theme-ui */

const HeaderCarousel = ({ images, memberCount }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    setProgress(0)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    )
    setProgress(0)
  }, [images.length])

  useEffect(() => {
    // handle slides
    const intervalTime = 6000
    const progressInterval = 65

    const timer = setInterval(nextSlide, intervalTime)

    const progressTimer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) return 100
        return prevProgress + (100 * progressInterval) / intervalTime
      })
    }, progressInterval)

    return () => {
      clearInterval(timer)
      clearInterval(progressTimer)
    }
  }, [nextSlide])

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <BGImg
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={index === 0}
            gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
          />
        </Box>
      ))}

      <Box
        as="button"
        onClick={prevSlide}
        aria-label="Previous image"
        sx={{
          position: 'absolute',
          left: ['5px', '10px', '30px'],
          top: '55%',
          transform: 'translateY(-50%)',
          bg: isDark ? '#333' : '#fdf6ee',
          border: isDark ? '4px solid #555' : '4px solid #e4d6c3',
          borderRadius: '50%',
          width: ['45px', '60px', '70px'],
          height: ['45px', '60px', '70px'],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all 0.2s',
          boxShadow: isDark
            ? '0 4px 8px rgba(0,0,0,0.4)'
            : '0 4px 8px rgba(0,0,0,0.25)',
          '&:hover': {
            bg: isDark ? '#444' : '#fdf6ee',
            transform: 'translateY(-50%) scale(1.1) rotate(-5deg)',
            boxShadow: isDark
              ? '0 6px 12px rgba(0,0,0,0.5)'
              : '0 6px 12px rgba(0,0,0,0.3)'
          },
          '&:active': {
            transform: 'translateY(-50%) scale(0.95)'
          }
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L8 12L15 6"
            stroke={isDark ? '#999' : '#a89985'}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>

      <Box
        as="button"
        onClick={nextSlide}
        aria-label="Next image"
        sx={{
          position: 'absolute',
          right: ['5px', '10px', '30px'],
          top: '55%',
          transform: 'translateY(-50%)',
          bg: isDark ? '#333' : '#fdf6ee',
          border: isDark ? '4px solid #555' : '4px solid #e4d6c3',
          borderRadius: '50%',
          width: ['45px', '60px', '70px'],
          height: ['45px', '60px', '70px'],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: isDark
            ? '0 4px 8px rgba(0,0,0,0.4)'
            : '0 4px 8px rgba(0,0,0,0.25)',

          '&:hover': {
            bg: isDark ? '#444' : '#fdf6ee',
            transform: 'translateY(-50%) scale(1.1) rotate(5deg)',
            boxShadow: isDark
              ? '0 6px 12px rgba(0,0,0,0.5)'
              : '0 6px 12px rgba(0,0,0,0.3)'
          },
          '&:active': {
            transform: 'translateY(-50%) scale(0.95)'
          }
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L16 12L9 18"
            stroke={isDark ? '#999' : '#a89985'}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>

      <Box
        as="a"
        href={images[currentIndex].href}
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          zIndex: 15
        }}
      >
        <Badge
          as="span"
          variant="pill"
          sx={{
            zIndex: '10',
            bg: isDark ? '#333' : '#fdf6ee',
            color: isDark ? '#eee' : '#513f31',
            opacity: 1,
            fontWeight: 'bold',
            transition: '0.3s ease',
            animation: 'fadeIn 0.5s',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 }
            },
            display: 'none',
            '@media (min-width: 56em)': {
              display: 'block'
            },
            borderRadius: '12px',
            border: isDark ? '3px solid #444' : '3px solid #e4d6c3',
            boxShadow: isDark
              ? '0 4px 12px rgba(0,0,0,0.3)'
              : '0 4px 12px rgba(0,0,0,0.15)',
            py: 1,
            px: 2,
            fontSize: '14px',
            letterSpacing: '0.02em',
            transform: 'rotate(-1deg)',
            '&:hover': {
              transform: 'rotate(1deg) scale(1.05)',
              boxShadow: isDark
                ? '0 6px 14px rgba(0,0,0,0.4)'
                : '0 6px 14px rgba(0,0,0,0.2)'
            }
          }}
          title={images[currentIndex].caption || images[currentIndex].alt}
        >
          <Icon
            glyph="pin"
            size={22}
            style={{
              marginRight: '6px',
              transform: 'translateY(-1px)',
              verticalAlign: 'middle',
              color: isDark ? '#eee' : 'inherit'
            }}
          />
          <Text
            as="span"
            sx={{
              display: 'inline-block',
              position: 'relative',
              top: '1px',
              color: isDark ? '#eee' : 'inherit'
            }}
          >
            {images[currentIndex].alt}
          </Text>
        </Badge>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: ['96px', '118px'],
          right: ['60px', '75px', '90px'],
          zIndex: 13,
          width: '18px',
          height: '12px',
          background: isDark
            ? 'linear-gradient(to bottom, #886c4d, #5d4222)'
            : 'linear-gradient(to bottom, #a88c6d, #7d623c)',
          borderRadius: '4px 4px 0 0',
          boxShadow: isDark
            ? '0 -2px 4px rgba(0,0,0,0.25)'
            : '0 -2px 4px rgba(0,0,0,0.15)',
          border: isDark ? '2px solid #5d4222' : '2px solid #7d623c'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '0px',
          right: ['65px', '80px', '95px'],
          zIndex: 13,
          width: '16px',
          height: '30px',
          background: isDark
            ? 'linear-gradient(to bottom, #5d4222, #422e16)'
            : 'linear-gradient(to bottom, #7d623c, #624e30)',
          borderRadius: '0 0 4px 4px',
          boxShadow: isDark
            ? '0 2px 4px rgba(0,0,0,0.25)'
            : '0 2px 4px rgba(0,0,0,0.15)',
          border: isDark ? '2px solid #5d4222' : '2px solid #7d623c'
        }}
      />

      <Box
        as="a"
        href="/slack"
        sx={{
          position: 'absolute',
          bottom: '20px',
          textDecoration: 'none',
          right: '10px',
          zIndex: 15,
          width: ['120px', '150px', '180px'],
          height: ['80px', '100px', '100px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: isDark ? '#eee' : '#513f31',
          fontWeight: 'bold',
          padding: '10px',
          paddingTop: '15px',
          transform: 'rotate(2deg)',
          background: isDark
            ? 'linear-gradient(to bottom, #c8b995, #b29c74)'
            : 'linear-gradient(to bottom, #e8d9b5, #d2bc94)',
          borderRadius: '12px',
          border: isDark ? '4px solid #5d4222' : '4px solid #7d623c',
          boxShadow: isDark
            ? '0 4px 8px rgba(0,0,0,0.4), inset 0 1px 3px rgba(255,255,255,0.2)'
            : '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '@keyframes populationBounce': {
            '0%': { transform: 'rotate(2deg) translateY(0)' },
            '20%': { transform: 'rotate(4deg) translateY(-8px)' },
            '40%': { transform: 'rotate(6deg) translateY(-4px)' },
            '60%': { transform: 'rotate(4deg) translateY(-6px)' },
            '80%': { transform: 'rotate(5deg) translateY(-2px)' },
            '100%': { transform: 'rotate(3deg) translateY(0)' }
          },
          '&:hover': {
            animation: 'populationBounce 0.6s ease-in-out',
            boxShadow: isDark
              ? '0 8px 20px rgba(0,0,0,0.45), inset 0 1px 3px rgba(255,255,255,0.2)'
              : '0 8px 20px rgba(0,0,0,0.25), inset 0 1px 3px rgba(255,255,255,0.3)',
            transform: 'rotate(4deg) scale(1.05)'
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark
              ? 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.15) 100%)'
              : 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.1) 100%)',
            borderRadius: '9px',
            pointerEvents: 'none'
          }
        }}
      >
        <Text
          sx={{
            fontSize: ['10px', '11px', '15px'],
            mb: '0px',
            fontFamily:
              '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
            textShadow: isDark
              ? '0 1px 0 rgba(0,0,0,0.3)'
              : '0 1px 0 rgba(255,255,255,0.6)',
            color: isDark ? '#513f31' : '#665040'
          }}
        >
          Current Population
        </Text>
        <Text
          sx={{
            fontSize: ['24px', '18px', '32px'],
            fontWeight: 'bold',
            fontFamily:
              '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
            textShadow: isDark
              ? '0 1px 0 rgba(0,0,0,0.3)'
              : '0 1px 0 rgba(255,255,255,0.6)',
            color: isDark ? '#3d2e25' : '#513f31'
          }}
        >
          <Comma>{memberCount ?? 66549}</Comma>
        </Text>
      </Box>

      <Flex
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          justifyContent: 'center',
          gap: 2,
          zIndex: 10
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => {
              setCurrentIndex(index)
              setProgress(0)
            }}
            sx={{
              position: 'relative',
              width: index === currentIndex ? '18px' : '14px',
              height: index === currentIndex ? '18px' : '14px',
              borderRadius: '50%',
              bg:
                index === currentIndex ? '#ec3750' : 'rgba(255, 255, 255, 0.6)',
              border: '2px solid',
              borderColor: index === currentIndex ? '#ec3750' : 'white',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow:
                index === currentIndex
                  ? '0 0 8px rgba(236, 55, 80, 0.5)'
                  : isDark
                    ? '0 0 4px rgba(0,0,0,0.4)'
                    : 'none',
              overflow: 'hidden',
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `conic-gradient(
                    rgba(255, 255, 255, 0.7) ${progress}%, 
                    transparent ${progress}% 100%
                  )`,
                  borderRadius: 'inherit'
                }}
              />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

function ToolCard({ icon, name, desc, href }) {
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Box
      as="a"
      href={href || `/projects`}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      sx={{
        width: ['30%', '100px', '140px'],
        minWidth: ['90px', '100px', '110px'],
        height: ['110px', '120px', '130px'],
        bg: isDark ? '#333' : '#fff',
        borderRadius: '12px',
        border: `2px solid ${isDark ? '#444' : '#e0e0e0'}`,
        p: 2,
        textDecoration: 'none',
        color: isDark ? '#eee' : '#1f2d3d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 2,
        position: 'relative',
        textAlign: 'center',
        transition:
          'transform 0.15s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.15s, border-color 0.15s, background-color 0.15s',
        boxShadow: isDark
          ? '0 2px 8px rgba(0,0,0,0.2)'
          : '0 2px 8px rgba(0,0,0,0.05)',
        '&:hover, &:focus': {
          transform: 'translateY(-5px) rotate(-2deg)',
          boxShadow: isDark
            ? '0 8px 16px rgba(0,0,0,0.3)'
            : '0 8px 16px rgba(0,0,0,0.1)',
          borderColor: isDark ? '#555' : '#c0392b',
          outline: 'none',
          bg: isDark ? '#444' : '#fff9f9'
        }
      }}
    >
      <Box
        sx={{
          width: '46px',
          height: '46px',
          borderRadius: '12px',
          bg: isDark ? 'rgba(236, 55, 80, 0.15)' : 'rgba(236, 55, 80, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          color: '#ec3750',
          transition: 'transform 0.2s ease-out, background-color 0.2s ease-out',
          '&:hover': {
            transform: 'scale(1.1) rotate(10deg)',
            bg: isDark ? 'rgba(236, 55, 80, 0.25)' : 'rgba(236, 55, 80, 0.15)'
          }
        }}
      >
        <Icon glyph={icon} size={28} />
      </Box>
      <Text
        sx={{
          fontWeight: 800,
          fontSize: 1,
          mb: '1px',
          lineHeight: 1.25,
          color: isDark ? '#eee' : 'inherit'
        }}
      >
        {name}
      </Text>
      <Text
        sx={{
          fontSize: 0,
          color: isDark ? '#888' : '#718096',
          lineHeight: 1.25
        }}
      >
        {desc}
      </Text>
    </Box>
  )
}

function Page({
  hackathonsData,
  bankData,
  slackData,
  gitHubData,
  stars,
  game,
  carouselCards
}) {
  let [gameImage, setGameImage] = useState('')
  let [gameImage1, setGameImage1] = useState('')
  let [reveal, setReveal] = useState(false)
  const [hover, setHover] = useState(true)
  let [github, setGithub] = useState(0)
  let [slackKey, setSlackKey] = useState(0)
  let [key, setKey] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [colorMode] = useColorMode()
  const isDark = colorMode === 'dark'

  const { asPath } = useRouter()

  let jsConfetti = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    jsConfetti.current = new JSConfetti()

    window.kc = `In the days of old, when gaming was young \nA mysterious code was found among \nA sequence of buttons, pressed in a row \nIt unlocked something special, we all know \n\nUp, up, down, down, left, right, left, right \nB, A, Start, we all have heard it's plight \nIn the 8-bit days, it was all the rage \nAnd it still lives on, with time, it will never age \n\nKonami Code, it's a legend of days gone by \nIt's a reminder of the classics we still try \nNo matter the game, no matter the system \nThe code will live on, and still be with them \n\nSo the next time you play, take a moment to pause \nAnd remember the code, and the Konami cause \nIt's a part of gaming's history, and a part of our lives \nLet's keep it alive, and let the Konami Code thrive!\n`
    window.paper = `Welcome, intrepid hacker! We'd love to have you in our community. Get your invite at hack.af/slack. Under "Why do you want to join the Hack Club Slack?" add a 🦄 and we'll ship you some exclusive stickers! `
  }, [])

  const easterEgg = () => {
    alert('Hey, you typed the Konami Code!')

    jsConfetti.current.addConfetti({
      confettiColors: [
        '#ec3750',
        '#ff8c37',
        '#f1c40f',
        '#33d6a6',
        '#5bc0de',
        '#338eda',
        '#a633d6'
      ]
    })
  }

  useEffect(() => {
    if (reveal && !hover) {
      setTimeout(() => {
        setReveal(false)
      }, 2000)
    }
  }, [reveal, hover])

  const spotlightRef = useRef()
  useEffect(() => {
    const handler = event => {
      var rect = document.getElementById('spotlight').getBoundingClientRect()
      var x = event.clientX - rect.left //x position within the element.
      var y = event.clientY - rect.top //y position within the element.

      spotlightRef.current.style.background = isDark
        ? `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(40, 40, 40, 0) 10px,
            rgba(17, 17, 17, 0.92) 80px
          )`
        : `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(132, 146, 166, 0) 10px,
            rgba(249, 250, 252, 0.9) 80px
          )`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [isDark])

  const headerImages = [
    {
      src: OuternetImgFile,
      alt: 'Outernet in Cabot, VT',
      href: 'https://outernet.hackclub.com/',
      width: 3000,
      height: 2000
    },
    {
      src: '/home/flagship_4.jpg',
      alt: 'Flagship 2019 in San Francisco, CA',
      href: '#',
      width: 3000,
      height: 2000
    },
    {
      src: '/home/zephyr-spacex.jpeg',
      alt: 'SpaceX HQ Tour in Los Angeles, CA',
      href: 'https://workshops.hackclub.com/vip-newsletters/021/',
      width: 3000,
      height: 2000
    },
    {
      src: '/hackathons/mahacks.jpeg',
      alt: 'MA Hacks in Boston, MA',
      href: "#'",
      width: 3000,
      height: 2000
    },
    {
      src: '/home/event.jpg',
      alt: 'Lion City Hacks in Singapore',
      href: 'https://lioncityhacks.com/',
      width: 3000,
      height: 2000
    },
    {
      src: '/home/wonderland.jpg',
      alt: 'Wonderland in Boston, MA',
      href: 'https://wonderland.hackclub.com/',
      width: 3000,
      height: 2000
    }
  ]

  return (
    <>
      <Meta
        as={Head}
        title="A Home for High School Hackers"
        description="Hack Club is a global nonprofit network of high school makers & coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
        image="https://cloud-lgl7kg862-hack-club-bot.vercel.app/0start__1_.png"
      />
      <Head>
        <meta
          property="og:logo"
          content="https://assets.hackclub.com/icon-rounded.png"
          size="512x512"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ForceTheme theme={colorMode} />
      <Nav />
      <Box
        as="main"
        sx={{
          overflowX: 'hidden',
          position: 'relative',
          bg: isDark ? '#111' : 'white'
        }}
      >
        <Secret
          reveal={reveal}
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseOut={() => {
            setReveal(false)
          }}
        />
        <Konami action={easterEgg}>
          {"Hey, I'm an Easter Egg! Look at me!"}
        </Konami>
        <Box
          as="header"
          sx={{
            bg: 'dark',
            pt: [5, 6],
            pb: [2, 3],
            overflowY: 'hidden',
            textAlign: 'left',
            position: 'relative',
            paddingTop: '0px !important',
            overflowX: 'hidden',
            height: 'auto',
            minHeight: '500px'
          }}
        >
          <HeaderCarousel
            images={headerImages}
            memberCount={slackData.total_members_count}
          />

          <Box
            sx={{
              width: '90vw',
              maxWidth: [null, 'layout'],
              position: 'relative',
              mx: 'auto',
              py: [4, 4, 4],
              paddingTop: [
                '110px !important',
                '120px !important',
                '146px !important'
              ],
              px: ['45px', '60px', '90px'],
              textShadow: 'text',
              zIndex: 5
            }}
          >

            <Heading>
              <Text
                as="h4"
                sx={{
                  color: 'white',
                  textAlign: ['center', 'left', 'left'],
                  mb: [1, 1, 3],
                  zIndex: 1,
                  textAlign: 'left',
                  lineHeight: 1.2,
                  width: '100%',
                  position: 'relative',
                  fontSize: ['32px', '38px', '46px'],
                  fontWeight: 800,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.01em'
                }}
              >
                Welcome to Hack Club,
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content'
                  }}
                >
                  <Text
                    as="span"
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                        height: '4px',
                        background: 'red',
                        borderRadius: '4px',
                        transform: 'rotate(-5deg)',
                        opacity: 0.8,
                        zIndex: 2
                      }
                    }}
                  >
                    a home
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-10px',
                      transform: 'rotate(-8deg)',
                      fontFamily:
                        '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                      fontSize: ['16px', '18px', '22px'],
                      color: 'red',
                      fontWeight: 'bold',
                      textShadow:
                        '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                      zIndex: 3
                    }}
                  >
                    Your home
                  </Text>
                </Box>
                {' for Highschool Hackers'}
              </Text>
              <Text
                as="h5"
                sx={{
                  color: isDark ? 'white' : '#7F6A4C',
                  mb: [0, 0, 3],
                  mt: [2, 2, 3],
                  zIndex: 1,
                  display: 'inline-block',
                  textAlign: 'left',
                  borderRadius: '1.5rem 0.75rem 2rem 1rem',
                  px: [2, 3],
                  py: [2, 1, 2],
                  bg: isDark ? '#333' : 'rgba(253,246,238,0.8)',
                  border: isDark ? '4px solid #555' : '4px solid rgb(156, 132, 98)',
                  lineHeight: [1.3, 1.4],
                  width: '100%',
                  position: 'relative',
                  fontSize: ['16px', '18px', '20px'],
                  textShadow: 'none',
                  fontWeight: 400,
                  transform: 'rotate(-1deg)',
                  transformOrigin: 'left bottom',
                  fontFamily:
                    '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                  // letterSpacing: '0em',
                  boxShadow: isDark
                    ? '2px 3px 8px rgba(0,0,0,0.25)'
                    : '2px 3px 8px rgba(0,0,0,0.15)'
                }}
              >
                {/* Decorative push pin */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    transform: 'translateX(-50%)',
                    width: '24px',
                    height: '24px',
                    zIndex: 10,
                    display: ['none', 'none', 'block'],
                  }}
                >
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isDark
                        ? 'linear-gradient(135deg, #ff5252 0%, #b71c1c 100%)'
                        : 'linear-gradient(135deg, #ff5252 0%, #e53935 100%)',
                      border: '1px solid',
                      borderColor: isDark ? '#c62828' : '#ffcdd2',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      position: 'relative'
                    }}
                  >

                  </Box>
                </Box>
                We're a global network of high school makers & coding clubs building passion<Text sx={{ display: ['none', 'inline', 'inline'] }}> and connection</Text>.
              </Text>
              <Box sx={{ display: ['flex', 'block', 'flex'], mt: ['12px', '16px', '6px'], pt: 0 }}>
                <Button
                  variant="cta"
                  as="a"
                  href="/slack"
                  mt={0}
                  mr={3}
                  sx={{
                    transformOrigin: 'center left',
                    borderRadius: '10px',
                    py: [2, 2, 2],
                    height: 'fit-content',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)'
                    }
                  }}
                >
                  <Icon glyph="welcome" size={24} color="white" />
                  <div sx={{ display: ['none', 'block', 'block'] }}>Join Slack</div>
                  <div sx={{ display: ['block', 'none', 'none'] }}>Slack</div>                </Button>
                <Button
                  variant="cta"
                  as="a"
                  href="/philosophy"
                  mt={[3, 2, 0]}
                  sx={{
                    transformOrigin: 'center left',
                    backgroundImage: t => t.util.gx('green', 'blue'),
                    borderRadius: '10px',
                    py: [2, 2, 2],
                    height: 'fit-content',
                    marginTop: [0, undefined, undefined],
                    boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)'
                    }
                  }}
                >
                  <Icon glyph="compass" size={24} color="white" />
                  <div sx={{ display: ['none', 'block', 'block'] }}>Our Philosophy</div>
                  <div sx={{ display: ['block', 'none', 'none'] }}>Ethos</div>
                </Button>
              </Box>
            </Heading>

          </Box>
        </Box>
        <Box
          as="section"
          sx={{
            py: [1, 2, '30px'],
            pt: 4,
            color: isDark ? 'white' : 'black',
            background: isDark
              ? 'linear-gradient(to bottom, #222, #111)'
              : 'linear-gradient(to bottom, #fff9f0, #fff)',
            borderRadius: ['0px', '0px', '32px'],
            position: 'relative',
            zIndex: 2
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto'
            }}
          >
            <Text
              variant="title"
              sx={{
                fontSize: ['36px', 4, 5],
                fontWeight: 900,
                color: isDark ? '#eee' : '#513f31',
                textShadow: isDark
                  ? '1px 1px 0 rgba(0,0,0,0.6)'
                  : '1px 1px 0 rgba(255,255,255,0.6)',
                mb: 2
              }}
            >
              Our{' '}
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
              >
                <Text
                  as="span"
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      width: '100%',
                      height: '4px',
                      background: 'red',
                      borderRadius: '4px',
                      transform: 'rotate(-5deg)',
                      opacity: 0.8,
                      zIndex: 2
                    }
                  }}
                >
                  Modus Operandi
                </Text>
                <Text
                  as="span"
                  sx={{
                    position: 'absolute',
                    top: '-15px',
                    left: '-5px',
                    transform: 'rotate(-8deg)',
                    fontFamily:
                      '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                    fontSize: ['18px', '20px', '28px'],
                    color: 'red',
                    fontWeight: 'bold',
                    textShadow:
                      '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                    zIndex: 3
                  }}
                >
                  secret formula
                </Text>
              </Box>{' '}
            </Text>
            <Grid
              columns={[1, 1, 3]}
              gap={[3, 4]}
              sx={{ alignItems: 'center', marginTop: '48px' }}
            >
              <Box
                sx={{
                  borderRadius: 'extra',
                  bg: isDark
                    ? 'rgba(255, 140, 55, 0.15)'
                    : 'rgba(255, 237, 209, 0.6)',
                  p: [2, 3],
                  boxShadow: isDark
                    ? '0 8px 32px rgba(255, 140, 55, 0.2)'
                    : '0 8px 32px rgba(255, 140, 55, 0.12)',
                  transform: ['none', 'none', 'rotate(-1deg)'],
                  transition: 'transform 0.2s ease-in-out',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  border: isDark ? '2px solid rgba(255, 140, 55, 0.3)' : 'none',
                  '&:hover': {
                    transform: ['none', 'none', 'rotate(0deg) scale(1.02)']
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    opacity: 0.15,
                    color: 'orange',
                    transform: 'rotate(10deg)',
                    zIndex: 0
                  }}
                >
                  <Icon glyph="code" size={100} />
                </Box>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ['28px', '32px', '36px'],
                    color: 'orange',
                    mb: 2,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Build Almost Anything
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['16px', '18px', '20px'],
                    pb: 3,
                    lineHeight: 1.4
                  }}
                >
                  Hardware projects, games, web apps, AI—Hack Clubbers create
                  with no limits. We provide tools and support to turn your
                  ideas into reality.
                </Text>
                <Button
                  variant="outline"
                  as="a"
                  href="https://ysws.hackclub.com/"
                  sx={{
                    borderRadius: 'circle',
                    fontWeight: 'bold',
                    py: 2,
                    px: 3,
                    mt: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    fontSize: 2,
                    borderWidth: 2,
                    borderColor: 'orange',
                    color: 'orange',
                    bg: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(255, 140, 55, 0.2)'
                    }
                  }}
                >
                  <Icon glyph="explore" size={30} />
                  See Projects
                </Button>
              </Box>

              <Box
                sx={{
                  borderRadius: 'extra',
                  bg: isDark
                    ? 'rgba(51, 142, 218, 0.15)'
                    : 'rgba(231, 245, 255, 0.6)',
                  p: [2, 3],
                  boxShadow: isDark
                    ? '0 8px 32px rgba(51, 142, 218, 0.2)'
                    : '0 8px 32px rgba(51, 142, 218, 0.12)',
                  transform: ['none', 'none', 'rotate(1deg)'],
                  transition: 'transform 0.2s ease-in-out',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  border: isDark ? '2px solid rgba(51, 142, 218, 0.3)' : 'none',
                  '&:hover': {
                    transform: ['none', 'none', 'rotate(0deg) scale(1.02)']
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-15px',
                    opacity: 0.15,
                    color: 'blue',
                    transform: 'rotate(5deg)',
                    zIndex: 0
                  }}
                >
                  <Icon glyph="channel" size={120} />
                </Box>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ['28px', '32px', '36px'],
                    color: 'blue',
                    mb: 2,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Collaborate & Connect
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['16px', '18px', '20px'],
                    pb: 3,
                    lineHeight: 1.4
                  }}
                >
                  Teen coders collaborate here, not compete. We build a
                  community grounded in learning and creativity through events,
                  clubs, and hackathons.
                </Text>
                <Button
                  variant="outline"
                  as="a"
                  href="/conduct"
                  sx={{
                    borderRadius: 'circle',
                    fontWeight: 'bold',
                    py: 2,
                    px: 3,
                    mt: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    fontSize: 2,
                    borderWidth: 2,
                    borderColor: 'blue',
                    color: 'blue',
                    bg: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(51, 142, 218, 0.2)'
                    }
                  }}
                >
                  <Icon glyph="friend" size={30} />
                  Code of Conduct
                </Button>
              </Box>
              <Box
                sx={{
                  borderRadius: 'extra',
                  bg: isDark
                    ? 'rgba(166, 51, 214, 0.15)'
                    : 'rgba(233, 216, 253, 0.6)',
                  p: [2, 3],
                  boxShadow: isDark
                    ? '0 8px 32px rgba(166, 51, 214, 0.2)'
                    : '0 8px 32px rgba(166, 51, 214, 0.12)',
                  transform: ['none', 'none', 'rotate(-1.5deg)'],
                  transition: 'transform 0.2s ease-in-out',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  border: isDark ? '2px solid rgba(166, 51, 214, 0.3)' : 'none',
                  '&:hover': {
                    transform: ['none', 'none', 'rotate(0deg) scale(1.02)']
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    opacity: 0.15,
                    color: 'purple',
                    transform: 'rotate(8deg)',
                    zIndex: 0
                  }}
                >
                  <Icon glyph="checkmark" size={90} />
                </Box>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ['28px', '32px', '36px'],
                    color: 'purple',
                    mb: 2,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Learn By Doing
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['16px', '18px', '20px'],
                    pb: 3,
                    lineHeight: 1.4
                  }}
                >
                  Not just tutorials— real projects. Build your skills and
                  portfolio with a global community of teen hackers ready to
                  help you learn and grow.
                </Text>
                <Button
                  variant="outline"
                  as="a"
                  href="https://toolbox.hackclub.com/"
                  sx={{
                    borderRadius: 'circle',
                    fontWeight: 'bold',
                    py: 2,
                    px: 3,
                    mt: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    fontSize: 2,
                    borderWidth: 2,
                    borderColor: 'purple',
                    color: 'purple',
                    bg: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(166, 51, 214, 0.2)'
                    }
                  }}
                >
                  <Icon glyph="code" size={30} />
                  Start Coding
                </Button>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box
          id="spotlight"
          as="section"
          sx={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9))`
              : `linear-gradient(rgba(249, 250, 252, 0.9), rgba(249, 250, 252, 0.9))`,
            position: 'relative',
            // marginBottom: [1, 2, 3],
            paddingTop: [2, 3, 4],
            marginTop: [2, 3, 4],
            bg: isDark ? '#111' : 'snow',
            transition: 'background-color 0.2s ease-in-out'
          }}
        >
          <Box
            as="div"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url('https://icons.hackclub.com/api/icons/${isDark ? '0x444' : '0x8492a6'}/glyph:rep.svg')`,
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat',
              opacity: 0.1,
              transition: 'opacity 0.2s ease-in-out'
            }}
          />
          <Box
            ref={spotlightRef}
            sx={{
              position: 'absolute',
              zIndex: 2,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: isDark ? 'rgba(17,17,17,0.92)' : 'rgba(249,250,252,0.9)',
              pointerEvents: 'none',
              transition: 'background-color 0.2s ease-in-out'
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto',
              zIndex: 5
            }}
          >
            <Box>
              <Text
                variant="title"
                sx={{
                  fontSize: ['36px', 4, 5],
                  fontWeight: 900,
                  color: isDark ? '#eee' : '#513f31',
                  textShadow: isDark
                    ? '1px 1px 0 rgba(0,0,0,0.6)'
                    : '1px 1px 0 rgba(255,255,255,0.6)',
                  mb: 2
                }}
              >
                Engage with fellow{' '}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content'
                  }}
                >
                  <Text
                    as="span"
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                        height: '4px',
                        background: 'red',
                        borderRadius: '4px',
                        transform: 'rotate(-5deg)',
                        opacity: 0.8,
                        zIndex: 2
                      }
                    }}
                  >
                    students
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-5px',
                      transform: 'rotate(-8deg)',
                      fontFamily:
                        '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                      fontSize: ['18px', '20px', '28px'],
                      color: 'red',
                      fontWeight: 'bold',
                      textShadow: isDark
                        ? '1px 1px 0 #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333'
                        : '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                      zIndex: 3
                    }}
                  >
                    makers
                  </Text>
                </Box>{' '}
              </Text>
              <Text
                variant="subtitle"
                as="p"
                sx={{
                  fontSize: ['18px', '20px', '22px'],
                  pb: [3, 0, 0],
                  color: isDark ? '#aaa' : '#665040',
                  fontWeight: 600,
                  maxWidth: '80%',
                  mb: 4
                }}
              >
                We gather both online and in-person to share our love of code
                and make things together! Check out some of our active{' '}
                <Tooltip content="Programs where Hack Clubbers work on personal projects. When you ship (post) something you've made, we ship you stickers or other rewards!">
                  You Ship We Ship
                </Tooltip> programs!
              </Text>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr', '2fr 1fr'],
                gap: 4,
                mb: 3,
                '& > div': {
                  borderRadius: '1.75rem',
                  padding: '8px !important',
                  border: isDark ? '5px solid #333' : '5px solid #e4d6c3',
                  boxShadow: isDark
                    ? '0 12px 36px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)'
                    : '0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
                  background: isDark ? '#222' : '#fdf6ee',
                  transition:
                    'transform 0.2s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s',
                  overflow: 'hidden',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(-1deg)',
                    boxShadow: isDark
                      ? '0 16px 48px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)'
                      : '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.1)'
                  }
                }
              }}
            >
              <Box sx={{ alignContent: 'center' }}>
                <Neighborhood />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  paddingTop: '32px',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ mb: 0 }}>
                  <Highway />
                </Box>
                <Box>
                  <Scrapyard />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mb: 7,
                mt: 4,
                borderRadius: '1.75rem',
                padding: '8px !important',
                border: isDark ? '5px solid #333' : '5px solid #e4d6c3',
                boxShadow: isDark
                  ? '0 12px 36px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)'
                  : '0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
                background: isDark ? '#222' : '#fdf6ee',
                transition:
                  'transform 0.2s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s',
                overflow: 'hidden',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-8px) rotate(-1deg)',
                  boxShadow: isDark
                    ? '0 16px 48px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)'
                    : '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ['1fr', '1fr', '1fr 1fr 1fr'],
                  gap: 3
                }}
              >
                <HighSeas />
                <Shipwrecked />
                <Juice />
              </Box>
            </Box>
          </Box>
        </Box>
        <Carousel cards={carouselCards} />


        <Box sx={{ marginTop: [4, 5, 6] }}>
          <Box py={[4, 5, '0px']}>
            <Box
              sx={{
                width: '90vw',
                maxWidth: 'layout',
                margin: 'auto',
                position: 'relative'
              }}
            >
              <Box
                as="section"
                sx={{
                  width: '100%',
                  maxWidth: 'layout',
                  margin: '0 auto 64px',
                  borderRadius: '1.75rem',
                  border: isDark ? '5px solid #444' : '5px solid #c0392b',
                  background: isDark
                    ? 'linear-gradient(135deg, #67282f 0%, #461216 100%)'
                    : 'linear-gradient(135deg, #e84545 0%, #c0392b 100%)',
                  boxShadow: isDark
                    ? '0 12px 40px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.4), inset 0 1px 10px rgba(255,255,255,0.1)'
                    : '0 12px 40px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.12), inset 0 1px 10px rgba(255,255,255,0.2)',
                  px: [2, 3, 2.5],
                  py: [4, 5, 6],
                  pb: '32px !important',
                  pt: ['80px', '90px', '100px'],
                  position: 'relative',
                  overflow: 'visible',
                  transform: 'rotate(-0.5deg)',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '15px',
                    left: '5%',
                    right: '5%',
                    height: '8px',
                    background: isDark ? '#461216' : '#a33a38',
                    borderRadius: '3px',
                    zIndex: 0,
                    opacity: 0.7
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: ['-70px', '-80px', '-90px'],
                    left: 0,
                    width: '100%',
                    height: ['100px', '130px', '140px'],
                    background: isDark
                      ? 'linear-gradient(to bottom, #67282f, #461216)'
                      : 'linear-gradient(to bottom, #e74c3c, #c0392b)',
                    borderRadius: '1.75rem 1.75rem 0 0',
                    border: isDark ? '5px solid #444' : '5px solid #c0392b',
                    borderBottom: 'none',
                    transform: 'rotateX(60deg)',
                    transformOrigin: 'bottom',
                    boxShadow: isDark
                      ? 'inset 0 5px 15px rgba(255,255,255,0.1), 0 -4px 10px rgba(0,0,0,0.3)'
                      : 'inset 0 5px 15px rgba(255,255,255,0.3), 0 -4px 10px rgba(0,0,0,0.2)',
                    zIndex: 1
                  }}
                />

                {gitHubData && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: ['-130px', '-130px', '-150px'],
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: ['95%', '85%', '80%'],
                      maxWidth: '650px',
                      zIndex: 5,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: [1.5, 2, 3],
                      alignItems: 'center',
                      pointerEvents: 'none'
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: ['20px', '22px', '26px'],
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: isDark ? '#eee' : '#333',
                        mb: [1, 1, 2],
                        textShadow: isDark
                          ? '0 1px 0 black, 0 2px 3px rgba(0,0,0,0.3)'
                          : '0 1px 0 white, 0 2px 3px rgba(0,0,0,0.1)',
                        animation: 'titleFloat 3s ease-in-out infinite',
                        '@keyframes titleFloat': {
                          '0%, 100%': { transform: 'translateY(0)' },
                          '50%': { transform: 'translateY(-10px)' }
                        },
                        position: 'relative'
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          width: 'fit-content'
                        }}
                      >
                        <Text
                          as="span"
                          sx={{
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              top: '50%',
                              width: '100%',
                              height: '3px',
                              background: 'red',
                              borderRadius: '3px',
                              transform: 'rotate(-5deg)',
                              opacity: 0.8,
                              zIndex: 2
                            }
                          }}
                        >
                          Live Feed from
                        </Text>
                        <Text
                          as="span"
                          sx={{
                            position: 'absolute',
                            top: '-18px',
                            left: '-5px',
                            transform: 'rotate(-8deg)',
                            fontFamily:
                              '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                            fontSize: ['16px', '18px', '20px'],
                            color: 'red',
                            fontWeight: 'bold',
                            textShadow:
                              '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                            zIndex: 3
                          }}
                        >
                          what's poppin on
                        </Text>
                      </Box>{' '}
                      GitHub
                    </Text>

                    {gitHubData
                      .filter(data => !data.user.endsWith('[bot]'))
                      .slice(0, 3)
                      .map((data, key) => (
                        <Box
                          key={key}
                          sx={{
                            animation: `githubBounce${key} ${2.8 + key * 0.4}s ${key * 0.25}s infinite cubic-bezier(.68,-0.55,.27,1.55)`,
                            '@keyframes githubBounce0': {
                              '0%, 100%': {
                                transform: 'translateY(0) rotate(0deg)'
                              },
                              '20%': {
                                transform:
                                  'translateY(-18px) scale(1.04) rotate(-2deg)'
                              },
                              '40%': {
                                transform:
                                  'translateY(-8px) scale(1.01) rotate(1deg)'
                              },
                              '60%': {
                                transform:
                                  'translateY(-14px) scale(1.03) rotate(-1deg)'
                              },
                              '80%': {
                                transform:
                                  'translateY(-4px) scale(1.01) rotate(2deg)'
                              }
                            },
                            '@keyframes githubBounce1': {
                              '0%, 100%': {
                                transform: 'translateY(0) rotate(0deg)'
                              },
                              '20%': {
                                transform:
                                  'translateY(-22px) scale(1.05) rotate(2deg)'
                              },
                              '40%': {
                                transform:
                                  'translateY(-10px) scale(1.01) rotate(-2deg)'
                              },
                              '60%': {
                                transform:
                                  'translateY(-16px) scale(1.03) rotate(1deg)'
                              },
                              '80%': {
                                transform:
                                  'translateY(-6px) scale(1.01) rotate(-1deg)'
                              }
                            },
                            '@keyframes githubBounce2': {
                              '0%, 100%': {
                                transform: 'translateY(0) rotate(0deg)'
                              },
                              '20%': {
                                transform:
                                  'translateY(-26px) scale(1.06) rotate(-3deg)'
                              },
                              '40%': {
                                transform:
                                  'translateY(-12px) scale(1.02) rotate(2deg)'
                              },
                              '60%': {
                                transform:
                                  'translateY(-18px) scale(1.04) rotate(-2deg)'
                              },
                              '80%': {
                                transform:
                                  'translateY(-7px) scale(1.01) rotate(1deg)'
                              }
                            },
                            boxShadow: isDark
                              ? '0 8px 20px rgba(0,0,0,0.3)'
                              : '0 8px 20px rgba(0,0,0,0.15)',
                            background: isDark ? '#222' : 'white',
                            borderRadius: '12px',
                            border: isDark
                              ? '3px solid #444'
                              : '3px solid #ddd',
                            width: '100%',
                            maxWidth: '550px',
                            pointerEvents: 'auto',
                            position: 'relative',
                            transform: `scale(${1 - key * 0.05})`,
                            transformOrigin: 'center top',
                            '&:hover': {
                              animationPlayState: 'paused',
                              boxShadow: isDark
                                ? '0 12px 28px rgba(0,0,0,0.4)'
                                : '0 12px 28px rgba(0,0,0,0.2)',
                              zIndex: 10
                            },
                            '& > div': {
                              padding: [2, 2, 3]
                            }
                          }}
                        >
                          <GitHub
                            type={data.type}
                            img={data.userImage}
                            user={data.user}
                            time={data.time}
                            url={data.url}
                            message={data.message}
                            opacity={1}
                          />
                        </Box>
                      ))}
                  </Box>
                )}

                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    pt: [1, 1, 2],
                    pb: '32px !important'
                  }}
                >
                  <Text
                    variant="title"
                    as="h2"
                    sx={{
                      fontSize: ['36px', '48px', '56px'],
                      color: 'white',
                      mb: 3,
                      textAlign: 'center',
                      fontWeight: 900,
                      lineHeight: [1.5, 1.3, 1],
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      maxWidth: '24ch',
                      mx: 'auto'
                    }}
                  >
                    Together, we{' '}
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                        width: 'fit-content'
                      }}
                    >
                      <Text
                        as="span"
                        sx={{
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            width: '100%',
                            height: '4px',
                            background: 'red',
                            borderRadius: '4px',
                            transform: 'rotate(-5deg)',
                            opacity: 0.8,
                            zIndex: 2
                          }
                        }}
                      >
                        write software,
                      </Text>
                      <Text
                        as="span"
                        sx={{
                          position: 'absolute',
                          top: '-15px',
                          left: '-5px',
                          transform: 'rotate(-8deg)',
                          fontFamily:
                            '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                          fontSize: ['16px', '18px', '24px'],
                          color: 'red',
                          fontWeight: 'bold',
                          textShadow:
                            '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                          zIndex: 3
                        }}
                      >
                        build awesome stuff
                      </Text>
                    </Box>{' '}
                    games, and tools as an{' '}
                    <Text
                      as="span"
                      sx={{
                        borderRadius: 'default',
                        mx: 0,
                        whiteSpace: 'nowrap',
                        color: '#ffe066'
                      }}
                    >
                      open source
                    </Text>{' '}
                    community
                  </Text>

                  <Text
                    as="p"
                    sx={{
                      color: 'white',
                      fontSize: ['18px', '20px', '22px'],
                      mb: 4,
                      textAlign: 'center',
                      maxWidth: '60ch',
                      mx: 'auto',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    In collaboration with engineers on the Hack&nbsp;Club team,
                    Hack Clubbers build learning tools for each other. Get
                    involved with these projects by building something with our
                    tools or contribute to the tools themselves on{' '}
                    <Tooltip content="A platform where programmers store, share, and collaborate on code. It's like Google Docs for developers, with version control and many other features for working on software together!">
                      GitHub
                    </Tooltip>
                  </Text>

                  <Box
                    sx={{
                      background: isDark ? '#222' : 'white',
                      borderRadius: '1.5rem',
                      boxShadow: isDark
                        ? 'inset 0 0 20px rgba(0,0,0,0.3)'
                        : 'inset 0 0 20px rgba(0,0,0,0.1)',
                      p: [2, 3, 4],
                      position: 'relative',
                      border: isDark ? '4px solid #444' : '4px solid #c0392b'
                    }}
                  >
                    <Flex
                      sx={{
                        flexWrap: 'wrap',
                        gap: [2, 3, 3],
                        justifyContent: 'center',
                        mb: [3, 3, 4]
                      }}
                    >
                      <ToolCard
                        icon="code"
                        name="Workshops"
                        desc="Learn coding"
                        href="https://workshops.hackclub.com"
                      />
                      <ToolCard
                        icon="flag"
                        name="Sprig"
                        desc="Make pixel games"
                        href="https://sprig.hackclub.com"
                      />
                      <ToolCard
                        icon="plus"
                        name="Sinerider"
                        desc="Math + games"
                        href="https://sinerider.com"
                      />
                      <ToolCard
                        icon="slack"
                        name="Slack"
                        desc="Join community"
                        href="/slack"
                      />
                      <ToolCard
                        icon="bank-account"
                        name="Bank"
                        desc="Finances"
                        href="https://bank.hackclub.com"
                      />
                      <ToolCard
                        icon="github"
                        name="GitHub"
                        desc="Open source"
                        href="https://github.com/hackclub"
                      />

                      <ToolCard
                        icon="event-check"
                        name="Hackathons"
                        desc="Big events"
                        href="https://hackathons.hackclub.com"
                      />
                      <ToolCard
                        icon="photo"
                        name="Scrapbook"
                        desc="Share builds"
                        href="https://scrapbook.hackclub.com"
                      />
                      <ToolCard
                        icon="grid"
                        name="Toolbox"
                        desc="Resources"
                        href="https://toolbox.hackclub.com"
                      />
                      <ToolCard
                        icon="clubs"
                        name="Clubs"
                        desc="Start a club"
                        href="/clubs"
                      />
                      <ToolCard
                        icon="friend"
                        name="Community"
                        desc="Find friends"
                        href="/community"
                      />
                      <ToolCard
                        icon="explore"
                        name="Projects"
                        desc="See what's made"
                        href="/projects"
                      />
                    </Flex>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#7f8c8d',
                    boxShadow: 'inset 0 0 0 3px #2c3e50',
                    zIndex: 2
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#7f8c8d',
                    boxShadow: 'inset 0 0 0 3px #2c3e50',
                    zIndex: 2
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#7f8c8d',
                    boxShadow: 'inset 0 0 0 3px #2c3e50',
                    zIndex: 2
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#7f8c8d',
                    boxShadow: 'inset 0 0 0 3px #2c3e50',
                    zIndex: 2
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              background: isDark ? '#111' : 'snow',
              backgroundImage: isDark
                ? `url('https://icons.hackclub.com/api/icons/0x333/glyph:rep.svg')`
                : `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat',
              backgroundPosition: '10% 10%'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: isDark
                  ? 'linear-gradient(180deg, rgba(35, 35, 35, 0.3) 0%, rgba(20, 20, 20, 0.5) 100%)'
                  : 'linear-gradient(180deg, rgba(255, 240, 224, 0.3) 0%, rgba(255, 249, 238, 0.5) 100%)',
                zIndex: 1
              }}
            />
            <Box
              py={[4, 5, '70px']}
              sx={{
                width: '90vw',
                maxWidth: 'layout',
                margin: 'auto',
                position: 'relative',
                zIndex: 2
              }}
            >
              <Box sx={{ textAlign: 'center', mb: [4, 4, 5] }}>
                <Text
                  variant="title"
                  sx={{
                    fontSize: ['36px', 4, 5],
                    fontWeight: 900,
                    color: isDark ? '#eee' : '#513f31',
                    textShadow: isDark
                      ? '1px 1px 0 rgba(0,0,0,0.6)'
                      : '1px 1px 0 rgba(255,255,255,0.6)',
                    mb: 2,
                    position: 'relative',
                    display: 'inline-block'
                  }}
                >
                  Find community{' '}
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      width: 'fit-content'
                    }}
                  >
                    <Text
                      as="span"
                      sx={{
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '100%',
                          height: '4px',
                          background: 'red',
                          borderRadius: '4px',
                          transform: 'rotate(-5deg)',
                          opacity: 0.8,
                          zIndex: 2
                        }
                      }}
                    >
                      face-to-face
                    </Text>
                    <Text
                      as="span"
                      sx={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-5px',
                        transform: 'rotate(-8deg)',
                        fontFamily:
                          '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                        fontSize: ['18px', '20px', '28px'],
                        color: 'red',
                        fontWeight: 'bold',
                        textShadow: isDark
                          ? '1px 1px 0 #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333'
                          : '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                        zIndex: 3
                      }}
                    >
                      while touching grass
                    </Text>
                  </Box>
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['18px', '20px', '22px'],
                    margin: 'auto',
                    pt: 2,
                    maxWidth: '750px',
                    color: isDark ? '#aaa' : '#665040'
                  }}
                >
                  Hack Clubbers organize and join{' '}
                  <Tooltip content="Weekend-long events where people come together to build tech projects. Like a marathon for making—teams compete for prizes, learn from each other, and have fun creating!">
                    hackathons
                  </Tooltip>{' '}
                  and coding clubs all around the world
                </Text>
              </Box>

              <Grid
                gap={[1, 3, 5]}
                columns={[1, null, '1fr 1fr']}
                sx={{ mb: 5 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '1.75rem',
                    border: isDark ? '5px solid #333' : '5px solid #e4d6c3',
                    boxShadow: isDark
                      ? '0 10px 25px rgba(0,0,0,0.3)'
                      : '0 10px 25px rgba(0,0,0,0.1)',
                    background: isDark ? '#222' : '#fdf6ee',
                    padding: '24px !important',
                    pb: '20px',
                    transform: 'rotate(-1deg)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'rotate(0deg) translateY(-5px)',
                      boxShadow: isDark
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 15px 30px rgba(0,0,0,0.15)'
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: isDark ? '#444' : '#e4d6c3',
                      zIndex: 1
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: isDark ? '#444' : '#e4d6c3',
                      zIndex: 1
                    }
                  }}
                >
                  <Text
                    as="h3"
                    sx={{
                      fontFamily:
                        '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: isDark ? '#eee' : '#513f31',
                      mb: 3,
                      textAlign: 'center'
                    }}
                  >
                    <Icon
                      glyph="clubs"
                      size={24}
                      sx={{ mr: 2, verticalAlign: 'middle' }}
                    />
                    Start a club at your school
                  </Text>
                  <Clubs />
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '1.75rem',
                    border: isDark ? '5px solid #333' : '5px solid #e4d6c3',
                    boxShadow: isDark
                      ? '0 10px 25px rgba(0,0,0,0.3)'
                      : '0 10px 25px rgba(0,0,0,0.1)',
                    background: isDark ? '#222' : '#fdf6ee',
                    padding: '24px !important',
                    pb: '20px',
                    transform: 'rotate(1deg)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'rotate(0deg) translateY(-5px)',
                      boxShadow: isDark
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 15px 30px rgba(0,0,0,0.15)'
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: isDark ? '#444' : '#e4d6c3',
                      zIndex: 1
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: isDark ? '#444' : '#e4d6c3',
                      zIndex: 1
                    }
                  }}
                >
                  <Text
                    as="h3"
                    sx={{
                      fontFamily:
                        '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: isDark ? '#eee' : '#513f31',
                      mb: 3,
                      textAlign: 'center'
                    }}
                  >
                    <Icon
                      glyph="event-check"
                      size={24}
                      sx={{ mr: 2, verticalAlign: 'middle' }}
                    />
                    Join a hackathon near you
                  </Text>
                  <Hackathons
                    delay={400}
                    data={hackathonsData}
                    stars={stars.hackathons.stargazerCount}
                  />
                </Box>
              </Grid>

              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '1.75rem',
                  border: isDark ? '5px solid #333' : '5px solid #e4d6c3',
                  boxShadow: isDark
                    ? '0 10px 25px rgba(0,0,0,0.3)'
                    : '0 10px 25px rgba(0,0,0,0.1)',
                  background: isDark ? '#222' : '#fdf6ee',
                  padding: '24px !important',
                  pb: '20px',
                  transform: 'rotate(-0.5deg)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  maxWidth: '850px',
                  mx: 'auto',
                  '&:hover': {
                    transform: 'rotate(0deg) translateY(-5px)',
                    boxShadow: isDark
                      ? '0 15px 30px rgba(0,0,0,0.4)'
                      : '0 15px 30px rgba(0,0,0,0.15)'
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: isDark ? '#444' : '#e4d6c3',
                    zIndex: 1
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: isDark ? '#444' : '#e4d6c3',
                    zIndex: 1
                  }
                }}
              >
                <Text
                  as="h3"
                  sx={{
                    fontFamily:
                      '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: isDark ? '#eee' : '#513f31',
                    mb: 3,
                    textAlign: 'center',
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%'
                  }}
                >
                  <Icon
                    glyph="bank-account"
                    size={24}
                    sx={{ mr: 2, verticalAlign: 'middle' }}
                  />
                  Get your project{' '}
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      width: 'fit-content'
                    }}
                  >
                    <Text
                      as="span"
                      sx={{
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '100%',
                          height: '4px',
                          background: 'red',
                          borderRadius: '4px',
                          transform: 'rotate(-5deg)',
                          opacity: 0.8,
                          zIndex: 2
                        }
                      }}
                    >
                      funded
                    </Text>
                    <Text
                      as="span"
                      sx={{
                        position: 'absolute',
                        top: '-15px',
                        left: '0px',
                        transform: 'rotate(-8deg)',
                        fontFamily:
                          '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                        fontSize: ['14px', '16px', '20px'],
                        color: 'red',
                        fontWeight: 'bold',
                        textShadow:
                          '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                        zIndex: 3
                      }}
                    >
                      bankrolled
                    </Text>
                  </Box>
                </Text>
                <HCB data={bankData} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          py={[4, 5, '82px']}
          sx={{ pb: '0px !important', bg: isDark ? '#111' : 'white' }}
        >
          <Box
            sx={{
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto'
            }}
          >
            <Box>
              <Text
                as="p"
                variant="eyebrow"
                sx={{
                  fontSize: ['22px', 2, 3],
                  textAlign: 'center',
                  color: isDark ? '#aaa' : 'inherit'
                }}
              >
                Start your journey today
              </Text>
              <Text
                variant="title"
                as="h2"
                sx={{
                  fontSize: ['36px', '48px', '72px'],
                  color: isDark ? '#eee' : '#513f31',
                  textShadow: isDark
                    ? '1px 1px 0 rgba(0,0,0,0.6)'
                    : '1px 1px 0 rgba(255,255,255,0.6)',
                  mb: 2,
                  textAlign: 'center',
                  fontWeight: 900
                }}
              >
                Find{' '}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content'
                  }}
                >
                  <Text
                    as="span"
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                        height: '5px',
                        background: 'red',
                        borderRadius: '4px',
                        transform: 'rotate(-5deg)',
                        opacity: 0.8,
                        zIndex: 2
                      }
                    }}
                  >
                    fulfillment
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-12px',
                      transform: 'rotate(-8deg)',
                      fontFamily:
                        '"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif',
                      fontSize: ['16px', '18px', '24px'],
                      color: 'red',
                      fontWeight: 'bold',
                      textShadow:
                        '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                      zIndex: 3
                    }}
                  >
                    your crowd
                  </Text>
                </Box>{' '}
                at Hack Club
              </Text>
            </Box>
            <Grid
              pt={[3, 4]}
              pb={[4, 5]}
              gap={3}
              columns={[1, 2, 3]}
              sx={{
                textAlign: 'left'
              }}
            >
              <Card
                as="a"
                href="/slack"
                target="_blank"
                rel="noopener"
                variant="interactive"
                sx={{
                  borderRadius: '1.75rem',
                  border: isDark ? '5px solid #1a7f62' : '5px solid #33d6a6',
                  boxShadow: isDark
                    ? '0 12px 36px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)'
                    : '0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
                  background: isDark
                    ? 'linear-gradient(32deg, rgba(35, 95, 135, 0.9) 0%, rgba(35, 150, 110, 0.9) 100%)'
                    : 'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(-1deg)',
                    boxShadow: isDark
                      ? '0 16px 48px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)'
                      : '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Stage
                  icon="channel"
                  color="white"
                  name="Join Our Slack"
                  desc="Connect with other technical teenagers on Slack and hack on things together."
                  sx={{
                    p: {
                      fontSize: ['18px', '20px', '22px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
              <Card
                as="a"
                href="https://github.com/hackclub"
                target="_blank"
                rel="noopener"
                variant="interactive"
                sx={{
                  borderRadius: '1.75rem',
                  border: isDark ? '5px solid #84305c' : '5px solid #fb558e',
                  boxShadow: isDark
                    ? '0 12px 36px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)'
                    : '0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
                  background: isDark
                    ? 'linear-gradient(-32deg, #471e70 14%, #84305c 82%)'
                    : 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(1deg)',
                    boxShadow: isDark
                      ? '0 16px 48px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)'
                      : '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Stage
                  icon="github"
                  color="white"
                  name="Explore Our Open Source Tools"
                  desc="We're currently building a game engine, daily streak system, graphing game, and more!"
                  sx={{
                    p: {
                      fontSize: [1, '16px', '20px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
              <Card
                as="a"
                href="/clubs"
                target="_blank"
                rel="noopener"
                variant="interactive"
                sx={{
                  borderRadius: '1.75rem',
                  border: isDark ? '5px solid #8e5721' : '5px solid #ff8c37',
                  boxShadow: isDark
                    ? '0 12px 36px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)'
                    : '0 12px 36px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
                  background: isDark
                    ? 'linear-gradient(to bottom, rgba(155, 85, 35, 0.9) 0%, rgba(155, 40, 50, 0.9) 100%)'
                    : 'linear-gradient(to bottom, rgba(255, 140, 55, 0.9) 0%, rgba(236, 55, 80, 0.9) 100%)',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(-1.5deg)',
                    boxShadow: isDark
                      ? '0 16px 48px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)'
                      : '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Stage
                  icon="clubs"
                  color="white"
                  name="Start A Club"
                  desc="Build an in-person community of high school hackers, and we're here to help."
                  sx={{
                    p: {
                      fontSize: ['18px', '20px', '22px']
                    },
                    h3: {
                      fontSize: ['22px', 2, 3]
                    }
                  }}
                />
              </Card>
            </Grid>
          </Box>
        </Box>

        {new URL(asPath, 'http://example.com').searchParams.get('gen') ===
          'z' && (
            <>
              <Box
                sx={{
                  position: 'fixed',
                  top: 0,
                  width: '100%',
                  zIndex: 1000
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    margin: 'auto',
                    width: 'fit-content',
                    lineHeight: 0
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/sJNK4VKeoBM?si=zvhDKhb9C5G2b4TJ&controls=1&autoplay=1&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'fixed',
                  bottom: 0,
                  right: 0,
                  zIndex: 1000,
                  lineHeight: 0
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/ChBg4aowzX8?si=X2J_T95yiaKXB2q4&controls=1&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Box>
              <Box
                sx={{
                  position: 'fixed',
                  bottom: 0,
                  left: 0,
                  zIndex: 1000,
                  lineHeight: 0
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/JDQr1vICu54?si=U6-9AFtk7EdTabfp&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Box>
            </>
          )}
        <MailingList />
      </Box>

      <Box
        as="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          width: '54px',
          height: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bg: isDark ? '#222' : '#fdf6ee',
          border: isDark ? '4px solid #444' : '4px solid #e4d6c3',
          borderRadius: '16px',
          boxShadow: isDark
            ? '0 8px 16px rgba(0,0,0,0.3)'
            : '0 8px 16px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          opacity: isScrolled ? 0.9 : 0,
          pointerEvents: isScrolled ? 'auto' : 'none',
          transform: isScrolled ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s cubic-bezier(.68,-0.55,.27,1.55)',
          '&:hover': {
            transform: isScrolled
              ? 'translateY(-4px) rotate(-5deg)'
              : 'translateY(20px)',
            boxShadow: isDark
              ? '0 12px 24px rgba(0,0,0,0.4)'
              : '0 12px 24px rgba(0,0,0,0.2)',
            opacity: isScrolled ? 1 : 0
          },
          '&:active': {
            transform: 'scale(0.95)'
          }
        }}
      >
        <Icon glyph="up-caret" size={32} color={isDark ? '#fff' : '#000'} />
      </Box>

      <Footer dark={isDark}>
        <style>
          {`a{
          color: #338eda
      }`}
        </style>
      </Footer>
    </>
  )
}

export async function getStaticProps() {
  const carouselCards = require('../lib/carousel.json')

  let bankData = []
  let initialBankData = await fetch('https://hcb.hackclub.com/stats')
  try {
    const bd = await initialBankData.json()
    bankData.push(
      `💰 ${bd.raised.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })} raised`
    )
  } catch {
    bankData.push('error')
  }

  const { Slack: Slacky } = require('./api/slack')
  let slackData = await Slacky()

  const { fetchGitHub } = require('./api/github')
  let gitHubData = await fetchGitHub()

  // GitHub: get latest GitHub stars
  const { fetchStars } = require('./api/stars')
  let stars = await fetchStars()

  // Sprig: get newest games
  const { getGames } = require('./api/games')
  let game = await getGames()

  let gameTitle = []

  gameTitle = game.map(r => r.title)

  // Sprig: get console count
  const { getConsoles } = require('./api/sprig-console')
  const consoleCount = await getConsoles()

  // Hackathons: get latest hackathons
  let hackathonsData
  try {
    const response = await fetch(
      'https://hackathons.hackclub.com/api/events/upcoming'
    )
    if (response.ok) {
      hackathonsData = await response.json()
    } else {
      hackathonsData = []
    }
  } catch (error) {
    hackathonsData = [] // or some default value if an error occurs
  }
  hackathonsData.sort((a, b) => new Date(a.start) - new Date(b.start))
  let events = []
  try {
    await fetch('https://events.hackclub.com/api/events/upcoming/').then(res =>
      res.json()
    )
  } catch (error) {
    console.error('Error fetching events:', error)
  }
  return {
    props: {
      game,
      gameTitle,
      gitHubData,
      consoleCount,
      hackathonsData,
      bankData,
      slackData,
      stars,
      events,
      carouselCards
    },
    revalidate: 60
  }
}
export default Page
