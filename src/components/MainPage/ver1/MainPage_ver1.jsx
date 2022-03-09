import { useState, useRef, useEffect } from 'react'
import './MainPage_ver1.css'
import CurrencySelect from '../CurrencySelect/CurrencySelect'

export default function MainPage() {
  const [currency, setCurrency] = useState('USD')
  const [price, setPrice] = useState('495')

  const [artHeight, setArtHeight] = useState('')
  const [artWidth, setArtWidth] = useState('')

  const main = useRef()
  const mainContent = useRef()
  const image = useRef()
  const info = useRef()
  const closeArtBlock = useRef()

  // sets start height and width, fixes size of image if it is more than window height
  useEffect(() => {
    const art = image.current
    const content = mainContent.current
    const mainHeight = window.innerHeight * 0.8
    const firstArtHeight = art.clientHeight

    console.log(firstArtHeight, art.clientWidth, 'first')
    art.clientHeight > mainHeight
      ? setArtHeight(mainHeight + 'px')
      : setArtHeight(art.clientHeight + 'px')
    art.style.height =
      art.clientHeight > mainHeight
        ? mainHeight + 'px'
        : art.clientHeight + 'px'

    console.log(mainHeight, firstArtHeight, 'height')

    const scaleW = mainHeight / firstArtHeight
    firstArtHeight > mainHeight
      ? setArtWidth(scaleW * art.clientWidth + 'px')
      : setArtWidth(art.clientWidth + 'px')
    art.style.width =
      firstArtHeight > mainHeight
        ? art.clientWidth * scaleW + 'px'
        : art.clientWidth + 'px'

    console.log(art.style.height, artWidth, scaleW, 'after')

    content.style.height = content.clientHeight + 'px'
  }, [])

  const [height, setHeight] = useState('')
  const [windowWidth, setWindowWidth] = useState({})

  function changeHeight() {
    const mainContentHeight = mainContent.current.clientHeight
    const imgHeight = image.current.clientHeight
    if (windowWidth >= 992) {
      mainContentHeight >= imgHeight
        ? setHeight(`${mainContentHeight}px`)
        : setHeight(`${imgHeight}px`)
    } else {
      setHeight('')
    }
  }

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth)
    changeHeight()
  }, [windowWidth])

  function openArt() {
    if (windowWidth < 992) {
      return
    }

    const mainWidth =
      main.current.clientWidth -
      parseInt(
        getComputedStyle(main.current).getPropertyValue('padding-left'),
      ) *
        2
    const art = image.current
    const content = mainContent.current
    const infoBlock = info.current

    setTimeout(() => {
      const scaleW = parseInt(height) / parseInt(art.style.height)
      art.style.width =
        art.clientWidth * scaleW > mainWidth
          ? mainWidth + 'px'
          : art.clientWidth * scaleW + 'px'

      const scaleH = mainWidth / parseInt(artWidth) / scaleW
      art.style.height =
        art.clientWidth * scaleW > mainWidth
          ? parseInt(height) * scaleH + 'px'
          : height

      art.style.transform =
        art.clientWidth * scaleW > mainWidth
          ? ''
          : `translate(${
              mainWidth / 2 - parseInt(image.current.style.width) / 2 + 'px'
            })`
      infoBlock.style.transform =
        art.clientWidth * scaleW > mainWidth
          ? ''
          : `translate(${
              mainWidth / 2 - parseInt(image.current.style.width) / 2 + 'px'
            })`
      console.log(mainWidth / 2 - parseInt(image.current.style.width) / 2)
    }, 560)

    content.className = content.className + ' main__content_leave'

    closeArtBlock.current.style.visibility = 'visible'
  }

  function closeArt() {
    if (windowWidth < 992) {
      return
    }

    const art = image.current
    const content = mainContent.current
    const infoBlock = info.current
    console.log(art.clientWidth, art.clientHeight)
    art.style.width = artWidth
    art.style.height = artHeight

    setTimeout(() => {
      content.className = content.className.slice(
        0,
        content.className.indexOf(' '),
      )
    }, 560)

    art.style.transform = ''
    infoBlock.style.transform = ''
    closeArtBlock.current.style.visibility = ''
  }

  return (
    <main className="main page" ref={main}>
      <div className="main-container">
        <section className="main__art-container">
          <div
            className="main-art-info-container"
            style={{ height: `${height}` }}
            ref={info}
          >
            <div className="main_art-info art-info">
              <div className="art-info__index-name">
                <h5 className="art-info__index">01</h5>
                <h5 className="art-info__name">Irene Francesca</h5>
              </div>
              <h5 className="art-info__year">2022</h5>
              <h5 className="art-info__title">OK</h5>
            </div>
            <hr className="main__hr_first" />
          </div>

          <img
            className="main__art"
            src="https://images.unsplash.com/photo-1606318621597-c057f7d4926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            // src="https://images.unsplash.com/photo-1628788704043-a595bf2f5cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            // src="https://images.unsplash.com/photo-1545050029-23994f940b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
            alt="art"
            ref={image}
            onClick={openArt}
          />
        </section>
        <div
          className="main__close-art"
          ref={closeArtBlock}
          onClick={closeArt}
        ></div>
        <section className="main__content" ref={mainContent}>
          <section className="title main__title">
            <h1>OK</h1>
          </section>

          <p className="p3 main__description">
            Digital painting. Comes with Gallery Quality Print. Shipping &
            packaging included. Print only guaranteed for the first buyer.
            Printed with Canon Pro 1000 with original inks on 350gsm Hahnemühle
            Museum Etching paper. Size 420x594mm. 20mm border. Signed and
            numbered edition 1 of 1.
          </p>
          <div className="main__authorship">
            <div className="main__avatar-container">
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="avatar"
              />
              <hr className="main__hr_second" />
              <h3>Irene Francesca</h3>
            </div>
            <p className="p3">
              Digital painting. Comes with Gallery Quality Print. Shipping &
              packaging included. Print only guaranteed for the first buyer.
            </p>
          </div>
          <div className="collect">
            <div className="collect__price-container">
              <CurrencySelect
                currency={currency}
                setCurrency={setCurrency}
                price={price}
                setPrice={setPrice}
              />
            </div>
            <a className="collect__button" href="https://">
              Collect
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
