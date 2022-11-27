import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Element, Link } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`flex items-center w-full lg:h-screen bg-cover bg-center bg-bglaw bg-[#EFF6FF] bg-opacity-80 backdrop-blur-lg`}
`
const Content = styled.div`
  ${tw`items-center flex flex-col-reverse lg:flex-row justify-between w-full space-y-10 md:space-y-20 sm:space-y-20`}
`
const ContentText = styled.div`
  ${tw`px-5 md:px-5 md:w-5/6 lg:w-[56%]  lg:px-0 md:pb-[2.25rem]`}
`
const ContentTextHead = styled.p`
  ${tw`h-auto pt-16 text-2xl font-black lg:pb-8 md:text-3xl lg:text-6xl lg:pt-0 text-[#d9d9d9]`}
`
const ContentTextSub = styled.p`
  ${tw`text-gray-300 md:text-left text-justify   lg:pr-16 lg:text-xl`}
`
const ContentImage = styled.div`
  ${tw`relative items-center lg:w-[50%] w-full flex justify-center sm:h-[20rem] h-[15rem] md:h-[33rem]`}
`

export const Hero: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Navbar />
      <Element name="home" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 py-10 sm:py-0">
            <Content>
              <ContentImage>
                {/* <Image
                  src={'/assets/icons/malvis-logo.svg'}
                  className={'rounded-full'}
                  width={390}
                  height={390}
                  layout={'fixed'}
                /> */}
                <Image
                  src={isDesktop ? '/assets/icons/malvis-logo.svg' : '/assets/images/malvis-logo.svg'}
                  className={isDesktop ? 'rounded-full' : ''}
                  width={isDesktop ? 390 : 0}
                  height={isDesktop ? 390 : 0}
                  layout={isDesktop ? 'fixed' : 'fixed'}
                  unoptimized={true}
                  tw="object-cover"
                />
              </ContentImage>
              <ContentText>
                <ContentTextHead>MALVIS ATTORNEYS</ContentTextHead>
                <ContentTextSub>
                  Malvis Attorneys at Law Law Office is a law firm which promises to deliver domestic and international
                  clients with the highest quality and personalized legal services.
                </ContentTextSub>
                <Link to="service" spy={true} smooth={true} offset={-50} duration={300}>
                  <Button text="Learn More" variant="malvis" tw="mt-6 rounded-full px-8 " />
                </Link>
              </ContentText>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}