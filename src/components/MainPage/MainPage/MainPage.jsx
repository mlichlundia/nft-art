import { useState, useRef } from 'react'
import './MainPage.css'
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import { useRenderOnMount } from '../../../hooks/useRenderOnMount'
import { renderer } from '../../../utils/renderer'

export default function MainPage() {
  const [currency, setCurrency] = useState('USD')
  const [price, setPrice] = useState('495')

  const art = {
    number: '01',
    year: '2022',
    src:
      // 'https://images.unsplash.com/photo-1606318621597-c057f7d4926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      // 'https://images.unsplash.com/photo-1628788704043-a595bf2f5cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1545050029-23994f940b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80',
    alt: 'Mountains',
    description:
      'Digital painting. Comes with Gallery Quality Print. Shipping &    packaging included. Print only guaranteed for the first buyer. Printed with Canon Pro 1000 with original inks on 350gsm Hahnemühle Museum Etching paper. Size 420x594mm. 20mm border. Signed and numbered edition 1 of 1.',
    authorPhoto:
      'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    author: 'Irene Francesca',
    ps:
      'Digital painting. Comes with Gallery Quality Print. Shipping & packaging included. Print only guaranteed for the first buyer.    ',
  }

  const [artHeight, setArtHeight] = useState('')
  const [artWidth, setArtWidth] = useState('')

  const [height, setHeight] = useState('')

  const [contentWidth, setContentWidth] = useState('')

  const [isReadyToClose, setIsReadyToClose] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const main = useRef()
  const mainContent = useRef()
  const mainContainer = useRef()
  const image = useRef()
  const info = useRef()
  const closeArtBlock = useRef()

  const windowSize = { width: null, height: null }

  window.addEventListener('resize', closeArt)

  function openArt() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      return
    }
    if (document.body.scrollHeight !== window.innerHeight) {
      return
    }
    if (document.documentElement.clientWidth < 992) {
      return
    }
    if (isReadyToClose) {
      return
    }
    setIsOpen(true)
    const maxWidth = renderer.getElementCoords(mainContainer.current).width
    const art = image.current
    const content = mainContent.current
    const infoBlock = info.current

    art.style.transition = '.75s'
    main.current.style.transition = '.75s'
    content.style.transition = '.75s'

    setContentWidth(renderer.getElementCoords(content).width)

    setTimeout(() => {
      main.current.style.width = maxWidth + 'px'
      main.current.style.margin = '0'

      const scaleW = parseInt(height) / parseInt(art.style.height)
      art.style.width =
        art.clientWidth * scaleW > maxWidth
          ? maxWidth + 'px'
          : art.clientWidth * scaleW + 'px'

      const scaleH = maxWidth / parseInt(artWidth) / scaleW
      art.style.height =
        art.clientWidth * scaleW > maxWidth
          ? parseInt(height) * scaleH + 'px'
          : height

      main.current.style.height = art.style.height

      main.current.style.transform = `translate(${
        mainContainer.current.offsetWidth / 2 -
        parseInt(image.current.style.width) / 2 +
        'px'
      })`
      infoBlock.style.transform = `translate(${
        mainContainer.current.offsetWidth / 2 - 'px'
      })`
    }, 600)

    content.className = content.className + ' main__content_leave'
    content.style.height = height

    closeArtBlock.current.style.visibility = 'visible'

    setTimeout(() => {
      setIsReadyToClose(true)
    }, 1500)
  }

  function closeArt() {
    if (!isReadyToClose) {
      return
    }
    if (!main.current) {
      return
    }
    if (!image.current) {
      return
    }
    if (!info.current) {
      return
    }
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      return
    }
    setIsOpen(false)

    const art = image.current
    const content = mainContent.current
    const infoBlock = info.current

    main.current.style.transform = ''
    main.current.style.margin = ''
    main.current.style.width = artWidth + 'px'
    art.style.width = artWidth + 'px'
    art.style.height = artHeight + 'px'
    main.current.style.height = ''

    infoBlock.style.transform = ''
    closeArtBlock.current.style.visibility = ''

    setTimeout(() => {
      content.className = content.className.slice(
        0,
        content.className.indexOf(' ') + 1,
      )
      content.style.height = ''
      content.style.width = contentWidth
    }, 600)

    setTimeout(() => {
      setIsReadyToClose(false)
    }, 1500)
  }

  let scaleCoeff = 0
  useRenderOnMount('mainPage_changeSize', mainAnimation)

  function mainAnimation() {
    artSize()
    infoHeight()
  }
  function artSize() {
    if (windowSize.width === window.innerWidth) {
      return
    }
    if (!image.current) {
      return
    }
    if (!image.current.complete) {
      return
    }
    if (isOpen) {
      return
    }

    const maxHeight = main.current.offsetHeight * 0.8
    const maxWidth = renderer.getElementCoords(main.current).width
    const artCoords = renderer.getElementCoords(image.current)
    const mainContainerCoords = renderer.getElementCoords(mainContainer.current)

    if (scaleCoeff === 0) {
      scaleCoeff =
        Math.max(artCoords.width, artCoords.height) /
        Math.min(artCoords.width, artCoords.height)
    }

    // mobile responsive setter
    if (window.innerWidth < 992) {
      setArtWidth(mainContainerCoords.width)
      artCoords.width > artCoords.height
        ? setArtHeight(mainContainerCoords.width / scaleCoeff)
        : setArtHeight(mainContainerCoords.width * scaleCoeff)
    } else {
      // pc responsive setter
      if (artCoords.width >= artCoords.height && artCoords.width <= maxWidth) {
        setArtWidth(maxWidth)
        setArtHeight(maxWidth / scaleCoeff)
      } else if (
        artCoords.width <= artCoords.height &&
        artCoords.height <= maxHeight
      ) {
        setArtWidth(artCoords.height / scaleCoeff)
        setArtHeight(artCoords.height)
      } else if (
        artCoords.width >= artCoords.height &&
        artCoords.width >= maxWidth
      ) {
        setArtWidth(maxWidth)
        setArtHeight(maxWidth / scaleCoeff)
      } else if (
        artCoords.width <= artCoords.height &&
        artCoords.height >= maxHeight
      ) {
        setArtWidth(maxHeight / scaleCoeff)
        setArtHeight(maxHeight)
      }
    }

    windowSize.width = window.innerWidth
    windowSize.height = window.innerHeight
  }
  function infoHeight() {
    if (!info.current) {
      return
    }
    const mainCoords = renderer.getElementCoords(mainContainer.current)
    const imageSize = renderer.getElementCoords(image.current)
    const mainContentSize = renderer.getElementCoords(mainContent.current)
    const maxElementHeight =
      imageSize.height > mainContentSize.height
        ? imageSize.height
        : mainContentSize.height
    if (
      mainCoords.width === mainContainer.current.offsetWidth &&
      mainCoords.height === mainContainer.current.offsetHeight
    ) {
      return
    }

    if (window.innerWidth < 992) {
      setHeight('')
      return
    }

    setHeight(maxElementHeight + 'px')

    mainCoords.width = mainContainer.current.offsetWidth
    mainCoords.height = mainContainer.current.offsetHeight
  }

  return (
    <main className="main page">
      <div className="main-container" ref={mainContainer}>
        <section
          className="main__art-container"
          ref={main}
          style={{
            height: artHeight,
            width: artWidth,
          }}
        >
          <div
            className="main__art-info-container ani-down"
            style={{ height: height }}
            ref={info}
          >
            <div className="main__art-info">
              <h5 className="art-info__index">
                <span>{art.number}</span>
                <span>{art.author}</span>
              </h5>
              <h5 className="art-info__year">{art.year}</h5>
              <h5 className="art-info__title">{art.alt}</h5>
            </div>
          </div>
          <img
            className="main__art ani-faid"
            src={art.src}
            alt={art.alt}
            ref={image}
            onClick={openArt}
            style={{
              height: artHeight,
              width: artWidth,
            }}
          />
        </section>
        <div
          className="main__close-art"
          ref={closeArtBlock}
          onClick={closeArt}
        ></div>
        <section className="main__content" ref={mainContent}>
          <section className="title main__title ani-down">
            <h1>{art.alt}</h1>
          </section>

          <p className="p3 main__description ani-up">{art.description}</p>
          <div className="main__authorship">
            <div className="main__avatar-container ani-down">
              <img className="avatar" src={art.authorPhoto} alt="avatar" />
              <hr className="main__hr_second" />
              <h3>{art.author}</h3>
            </div>
            <p className="p3 ani-up">{art.ps}</p>
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
            <a className="collect__button ani-up" href="https://">
              Collect
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
