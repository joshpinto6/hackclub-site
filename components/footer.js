import React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Text,
  useColorMode
} from 'theme-ui'
import NextLink from 'next/link'
import theme from '@hackclub/theme'
import Icon from './icon'

const Base = styled(Box, { shouldForwardProp: prop => prop !== 'dark' })`
  background: ${props => (props.dark ? `${theme.colors.darker}` : `#fdf6ee`)};
  position: relative;
  border-top: 5px solid #e4d6c3;
  box-shadow: 0 -12px 30px rgba(0, 0, 0, 0.12);

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    height: 15px;
    background: #e4d6c3;
    border-radius: 25px 25px 0 0;
  }

  @media print {
    display: none;
  }
`

const Logo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="90"
    fill="#8492A6"
    viewBox="0 0 256 90"
    {...props}
  >
    <path d="M75.156 38.08l6.475 1.105s1.798-11.402-.224-10.199l-6.251 9.094zM204.85 34.495l2.161 5.06s5.237-2.106 4.619-4.915c-.537-2.442-3.098-1.496-5.641-.557h-.001c-.382.142-.764.282-1.138.412zM207.752 43.455s1.483 6.212 1.421 5.93c-.007-.093.397-.247 1.002-.477 2.014-.766 6.257-2.379 4.999-5.453-1.636-3.997-7.422 0-7.422 0z" />
    <path
      fillRule="evenodd"
      d="M7.205 89.303c-.022-2.227-.161-16.553 3.072-32.54 15.846-2.401 28.778.144 54.94 7.37 5.142 1.42 10.135 2.927 15.139 4.437 21.52 6.494 43.238 13.047 77.819 13.047 39.513 0 89.839-46.125 96.97-52.854.321-.303.07-.804-.37-.798a895.798 895.798 0 01-22.817-.006.484.484 0 01-.422-.707L241.991 6.9c.186-.36-.392-.91-.737-.696-10.403 6.44-68.291 38.655-125.701 11.127C62.987-7.874 36.693.801 29.405 4.381c.206-.647.195-1.355-.559-1.45-.953-.121-1.458.46-1.458.46-.955.738-11.701 20.409-18.91 41.665C1.272 66.313-.092 87.361.006 89.551h7.202c0-.049 0-.132-.002-.248zm33.522-73.187c-.647 3.657-1.888 9.939-4.497 18.056-5.42 12.948 3.823 10.836 6.47 5.457 1.569-2.97 3.182-6.194 3.182-6.194l8.307 3.185s-.669 3.783-1.353 6.912c-2.61 8.118 4.998 7.144 7.102 1.146.177-.583.477-1.518.856-2.697 1.62-5.045 4.672-14.553 5.648-20.073 1.814-4.357-4.395-8.336-7.205-1.295-1.502 2.593-3.941 8.27-3.941 8.27s-6.857-2.534-6.938-2.81c-.14-.362.021-1.024.212-1.812.177-.727.38-1.562.397-2.37-.418-11.655-7.37-10.693-8.24-5.775zm36.6 9.076c2.114-4.209 4.542-4.915 6.347-4.723.779.065 1.838 1.648 2.648 3.17 2.651 10.02-2.1 28.448-2.94 29.686-2.892 4.671-7.967 3.788-6.04-1.259.901-3.066 1.865-5.852 1.865-5.852l-6.568-.734c-5.162 10.028-9.802 5.829-7.128 1.497 2.861-5.074 8.956-16.183 11.816-21.785zm33.437 10.102c.857-2.414-.924-7.875-7.149-6.964-9.016.065-12.136 15.862-12.136 15.862s-1.498 7.65.867 12.865c1.971 4.611 6.52 5.007 8.041 5.139.137.012.25.022.334.032 5.917-1.78 3.891-5.722 2.879-5.849-.221-.011-.456-.014-.701-.018-1.178-.015-2.578-.034-3.746-.988-2.393-1.928-1.967-6.824-1.447-9.457 1.224-4.429 3.918-13.223 8.213-11.07 2.577 3.293 4.386 1.78 4.845.448zm5.93-.406c-.608 1.855-.691 3.748-.785 5.895-.151 3.458-.332 7.576-2.777 13.261-.68 1.62-2.071 4.212-2.9 5.756-.323.602-.561 1.045-.638 1.21-2.196 4.16 2.263 6.611 7.175-.657 1.19-1.664 2.501-5.919 2.501-5.919l2.137-.24s1.867 8.216 2.296 11.736c.46 3.396 6.476 5.328 6.564-1.338-.215-2.285-1.011-5.374-2.509-9.298 0 0-.978-2.874-1.925-3.247 0 0 6.713-6.677 7.353-9.268.67-2.714-.552-4.6-5.802-.172-5.249 4.428-5.858 5.846-5.858 5.846s1.248-5.583 1.123-9.812c.456-4.473-4.584-7.73-5.955-3.753zm33.811 8.412c-2.253 2.233-3.67 6.425-3.512 12.767.314 9.466 4.236 14.906 10.933 13.822 6.697-1.083 5.12-5.915 4.503-6.075-.088-.022-.163-.059-.244-.098-.376-.181-.861-.415-3.12.435-2.746 1.032-4.814-.173-6.545-4.375-1.144-2.843-1.764-8.367.302-11.452.537-.795 1.051-1.088 1.378-1.275l.075-.042.039-.024.019-.011c1.235-.753 2.5-.023 2.717.166 3.458 2.504 4.135-.27 2.899-2.736-2.44-3.446-5.681-4.15-9.444-1.102zm14.971.143c-.033-3.593 3.677-6.363 4.981 1.672.926 2.985 1.185 7.574 1.384 11.111.147 2.614.262 4.655.59 5.05.773.93 6.526-.368 8.084-.892 1.558-.524 4.428.164 3.78 1.724-.423 1.281-1.467 1.63-2.02 1.814-.134.045-.239.08-.3.116-.309.187-13.313 4.042-13.796 1.475-.342-1.815-.457-2.938-.667-4.986h-.001c-.087-.848-.19-1.854-.332-3.133-.178-1.594-.448-3.404-.721-5.234h-.001c-.475-3.187-.961-6.434-.981-8.717zm15.594-3.216c-.282-2.598 2.367-4.185 3.927-1.396.534.974 1.107 3.415 1.752 6.165.788 3.354 1.682 7.167 2.746 9.337 1.06 1.599 3.243 1.887 4.271.42 1.214-2.218.338-7.759-.413-12.204a62.31 62.31 0 00-.479-1.777v-.001c-.361-1.286-.655-2.334-.634-3.168.466-4.003 3.677-3.055 5.175 1.049 1.249 4.572 2.551 11.959 1.898 14.585l-.074.3c-.604 2.447-1.329 5.39-4.442 6.131-.842.185-7.855 1.196-10.321-6.477l-.757-2.562c-1.783-6.024-2.399-8.103-2.649-10.402zm21.992-8.576c4.312-2.607 7.547-3.502 10.075-2.589 1.48.91 2.436 3.407 2.037 5.558-.461 1.87-1.231 3.396-1.231 3.396 2.559.258 4.432 2.811 4.918 6.153.487 3.341-2.661 6.486-8.515 8.433-1.972.556-4.067.549-4.16-.138-.063-1.341-5.033-17.326-5.033-17.326-.015-.096-.034-.193-.053-.29-.175-.892-.37-1.884 1.962-3.197z"
      clipRule="evenodd"
    />
  </svg>
)

const Service = ({ href, icon, name = '', ...props }) => (
  <Link
    target="_blank"
    rel="noopener me"
    href={href}
    title={`Hack Club on ${name ? name : icon}`}
    sx={{
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      width: '46px',
      height: '46px',
      transition: 'all 0.2s cubic-bezier(.68,-0.55,.27,1.55) !important',
      bg: 'rgba(236, 55, 80, 0.08)',
      color: '#ec3750 !important',
      '&:hover, &:focus': {
        transform: 'translateY(-5px) rotate(-7deg) !important',
        bg: 'rgba(236, 55, 80, 0.2)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        color: '#d21b34 !important',
        textDecoration: 'none !important',
        border: '1px solid rgba(236, 55, 80, 0.5)'
      }
    }}
    {...props}
  >
    <Icon glyph={icon} size={28} />
  </Link>
)

const FooterHeading = styled(Heading)`
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: #e4d6c3;
    border-radius: 4px;
  }
`

const FooterLink = ({ href, children, internal = false, ...props }) => {
  const [mode] = useColorMode()
  const isDark = mode === 'dark'

  const LinkComponent = internal
    ? ({ children, ...props }) => (
        <NextLink href={href} passHref>
          <Link {...props}>{children}</Link>
        </NextLink>
      )
    : ({ children, ...props }) => (
        <Link href={href} target="_blank" rel="noopener" {...props}>
          {children}
        </Link>
      )

  return (
    <LinkComponent
      sx={{
        py: 1,
        px: 2,
        borderRadius: '8px',
        display: 'inline-block',
        transition: 'all 0.15s cubic-bezier(.68,-0.55,.27,1.55)',
        fontWeight: 600,
        color: `${isDark ? 'white' : '#513f31'} !important`,
        '&:hover, &:focus': {
          bg: isDark ? 'rgba(255,255,255,0.08)' : '#f3ede2',
          color: `${isDark ? 'white' : '#513f31'} !important`,
          transform: 'translateX(4px) rotate(-1deg)',
          textDecoration: 'none !important',
          boxShadow: '0 3px 8px rgba(0,0,0,0.0625)'
        }
      }}
      {...props}
    >
      {children}
    </LinkComponent>
  )
}

function Footer({
  email = 'team@hackclub.com',
  children = undefined,
  ...props
}) {
  const colorMode = useColorMode()
  return (
    <Base
      color={colorMode[0] === 'dark' ? 'muted' : '#513f31'}
      py={[4, 5]}
      dark={colorMode[0] === 'dark'}
      sx={
        colorMode[0] === 'dark'
          ? {
              backgroundColor: 'dark',
              position: 'relative',
              overflow: 'hidden',
              textShadow: '0 1px 2px rgba(0,0,0,0.375)',
              'h2,span,p,a': { color: 'white !important' },
              '> div img': { objectPosition: ['left', 'center'] },
              svg: {
                fill: 'white',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
              },
              textAlign: 'left'
            }
          : { textAlign: 'left' }
      }
      as="footer"
      {...props}
    >
      <Container px={[3, null, 4]}>
        {children}
        <Grid
          as="article"
          gap={[3, 4]}
          columns={[1, 3, 4]}
          sx={{
            px: 0,
            'h2,p': { color: colorMode[0] === 'dark' ? 'white' : '#513f31' },
            h2: { fontSize: 3, mb: 3 },
            'a,p': { fontSize: 2 }
          }}
        >
          <Box>
            <FooterHeading as="h2" variant="subheadline">
              Hack&nbsp;Club
            </FooterHeading>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/philosophy" internal>
                Philosophy
              </FooterLink>
              <FooterLink href="/team" internal>
                Our Team & Board
              </FooterLink>
              <FooterLink href="/jobs" internal>
                Jobs
              </FooterLink>
              <FooterLink href="/brand" internal>
                Branding
              </FooterLink>
              <FooterLink href="/press" internal>
                Press Inquiries
              </FooterLink>
              <FooterLink href="/philanthropy" internal>
                Donate
              </FooterLink>
            </Box>
          </Box>
          <Box>
            <FooterHeading as="h2" variant="subheadline">
              Resources
            </FooterHeading>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="https://events.hackclub.com/">
                Community Events
              </FooterLink>
              <FooterLink href="https://jams.hackclub.com/">Jams</FooterLink>
              <FooterLink href="https://toolbox.hackclub.com/">
                Toolbox
              </FooterLink>
              <FooterLink href="https://directory.hackclub.com/">
                Clubs Directory
              </FooterLink>
              <FooterLink href="https://hackclub.com/conduct/" internal>
                Code of Conduct
              </FooterLink>
            </Box>
          </Box>
          <Box sx={{ gridColumn: ['span 1', 'span 1'] }}>
            <Logo
              aria-label="Hack Club logo"
              width={128}
              height={45}
              style={{
                transform: 'rotate(-2deg)',
                filter: colorMode[0] === 'dark' ? 'brightness(1.2)' : 'none',
                fill: colorMode[0] === 'dark' ? '#ffffff' : '#513f31'
              }}
            />
            <Grid
              columns={4}
              gap={2}
              sx={{
                alignItems: 'center',
                my: 3,
                maxWidth: '100%',
                placeItems: 'start'
              }}
            >
              <Service
                href="/slack"
                icon="slack-fill"
                name="Slack"
                target="_self"
              />
              <Service
                href="https://twitter.com/hackclub"
                icon="twitter"
                name="Twitter"
              />
              <Service
                href="https://github.com/hackclub"
                icon="github"
                name="GitHub"
              />
              <Service
                href="https://figma.com/@hackclub"
                icon="figma-fill"
                name="Figma"
              />
              <Service
                href="https://social.dino.icu/@hackclub"
                icon="mastodon"
                name="Mastodon"
              />
              <Service
                href="https://www.youtube.com/c/HackClubHQ"
                icon="youtube"
                name="YouTube"
              />
              <Service
                href="https://www.instagram.com/starthackclub"
                icon="instagram"
                name="Instagram"
              />
              <Service
                href={`mailto:${email}`}
                icon="email-fill"
                name="Email"
              />
            </Grid>
            <Box
              sx={{
                my: 2,
                p: 2,
                borderRadius: '8px',
                border: '2px dashed #e4d6c3',
                display: 'inline-block',
                bg: 'rgba(236, 55, 80, 0.04)'
              }}
            >
              <Link
                href="tel:1-855-625-HACK"
                sx={{
                  fontWeight: 'bold',
                  color: '#513f31 !important',
                  fontSize: 2,
                  textDecoration: 'none !important',
                  '&:hover': {
                    textDecoration: 'underline !important'
                  }
                }}
              >
                1-855-625-HACK
              </Link>
              <br />
              <Text
                as="span"
                color={colorMode[0] === 'dark' ? 'muted' : '#7a6e5d'}
                sx={{ fontSize: 1 }}
              >
                (call toll-free)
              </Text>
            </Box>
          </Box>
        </Grid>
        <Text
          as="p"
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '2px solid #e4d6c3',
            fontSize: 1,
            color: colorMode[0] === 'dark' ? 'muted' : '#7a6e5d',
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            textAlign: 'center'
          }}
        >
          © {new Date().getFullYear()} Hack&nbsp;Club. 501(c)(3) nonprofit
          (EIN: 81-2908499)
        </Text>
      </Container>
    </Base>
  )
}

export default Footer
