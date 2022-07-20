import Head from 'next/head'
import Script from 'next/script'
import CustomButton from '../components/atoms/Button'
import { Container, Switch, Avatar, Text, Tooltip } from '@nextui-org/react'
import { SunIcon } from '../components/atoms/sunIcon'
import { MoonIcon } from '../components/atoms/moonIcon'
import useDarkMode from 'use-dark-mode'
import { useTheme } from '@nextui-org/react'
import { GitHub } from '../components/atoms/github'
import { Instagram } from '../components/atoms/instagram'
import { WhatsApp } from '../components/atoms/whatsapp'
import { Linkdl } from '../components/atoms/linkdl'

export default function Home() {
  const darkMode = useDarkMode(false)
  return (
    <>
      <Head>
        <title>Rafael Ricco | Links</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Aqui você vai encontrar meus proncipais links e redes sociais."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg">
        <Container fluid>
          <div className="Container">
            <Switch
              className="switch"
              checked={darkMode.value}
              onChange={() => darkMode.toggle()}
              size="md"
              iconOn={<SunIcon fill="#ffff" />}
              iconOff={<MoonIcon fill="1px" />}
              css={{
                position: 'absolute',
                right: '5rem',
                margin: '1rem'
              }}
            />
            <Avatar
              src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1655416580/profilePicture/Artboard_1_hppvyv_khsmix.webp"
              color="gradient"
              bordered
              zoomed
              css={{
                width: '8rem',
                height: '8rem',
                margin: '4rem 0 0rem 0'
              }}
            />
            <Text
              h1
              size={32}
              css={{
                margin: '0'
              }}
            >
              Rafael Ricco
            </Text>
            <Text size={16} color="$gray500">
              Designer | Desenvolvedor
            </Text>
            <div className="icons">
              <a
                target="_blank"
                href="https://github.com/rafaeelricco"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-ricco-512b19228/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkdl />
              </a>
              <a
                href="https://www.instagram.com/rafaelricco.io/?hl=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a href="http://wa.link/no53kg" target="_blank" rel="noreferrer">
                <WhatsApp />
              </a>
            </div>

            <div className="message">
              <Text
                size={24}
                css={{
                  margin: '0'
                }}
              >
                <strong>Olá visitante,</strong> seja bem-vindo!
              </Text>
              <Text
                size={16}
                css={{
                  textAlign: 'center',
                  margin: '0'
                }}
              >
                Se você chegou até aqui,provavelmente
                <br /> está a procura de alguma das opções abaixo
              </Text>
            </div>
            <div className="buttons">
              <a target="_blank" href="http://wa.link/no53kg" rel="noreferrer">
                <CustomButton text="Solicitar orçamento"></CustomButton>
              </a>
              <a
                target="_blank"
                href="https://portifolio-page-rafaeelricco.vercel.app/"
                rel="noreferrer"
              >
                <CustomButton text="Veja meus trabalhos" />
              </a>

              <Tooltip content={'Em breve'}>
                <CustomButton disabled={true} text="Canal do telegram" />
              </Tooltip>
              <Tooltip content={'Spotify ou Youtube Music?'}>
                <CustomButton disabled={true} text="Playlist" />
              </Tooltip>
            </div>
          </div>
          <div className="copy">
            <Text
              color="$gray500"
              css={{
                fontSize: '0.8rem',
                position: 'absoulte',
                bottom: '0',
                left: '0',
                top: '0',
                right: '0',
                margin: '4rem 0 0 0'
              }}
            >
              &copy; 2022, Rafael Ricco.
            </Text>
          </div>
        </Container>
      </div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q6TP8E3QJL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Q6TP8E3QJL');
        `}
      </Script>
    </>
  )
}