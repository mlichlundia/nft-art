import { useState, useRef, useEffect } from 'react'
import './MainPage_ver1.css'
import CurrencySelect from '../CurrencySelect/CurrencySelect'

export default function MainPage() {
  const [currency, setCurrency] = useState('USD')
  const [price, setPrice] = useState('495')

  const art = {
    number: '01',
    year: '2022',
    src:
      'https://images.unsplash.com/photo-1606318621597-c057f7d4926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    // 'https://images.unsplash.com/photo-1628788704043-a595bf2f5cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    // 'https://images.unsplash.com/photo-1545050029-23994f940b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80',
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

  const [contentHeight, setContentHeight] = useState('')

  const [height, setHeight] = useState('')

  const [isReadyToClose, setIsReadyToClose] = useState(false)

  const main = useRef()
  const mainContent = useRef()
  const image = useRef()
  const info = useRef()
  const closeArtBlock = useRef()

  useEffect(() => {
    function changeHeight() {
      const mainContentHeight = mainContent.current.clientHeight
      const imgHeight = image.current.clientHeight
      if (document.documentElement.clientWidth >= 992) {
        mainContentHeight >= imgHeight
          ? setHeight(`${mainContentHeight}px`)
          : setHeight(`${imgHeight}px`)
      } else {
        setHeight('')
      }
    }

    changeHeight()
  }, [artHeight])

  function setStartArtParams() {
    const mainHeight = window.innerHeight * 0.8

    image.current.style.height =
      image.current.offsetHeight < mainHeight
        ? image.current.offsetHeight + 'px'
        : mainHeight + 'px'
    image.current.offsetHeight < mainHeight
      ? setArtHeight(image.current.offsetHeight + 'px')
      : setArtHeight(mainHeight + 'px')

    const scaleW = mainHeight / parseInt(image.current.style.height)

    image.current.style.width =
      image.current.offsetHeight < mainHeight
        ? image.current.offsetWidth + 'px'
        : image.current.offsetWidth * scaleW + 'px'

    image.current.offsetHeight < mainHeight
      ? setArtWidth(image.current.offsetWidth + 'px')
      : setArtWidth(image.current.offsetWidth * scaleW + 'px')
    console.log(image.current.offsetHeight, image.current.offsetWidth)
  }

  function openArt() {
    if (document.documentElement.clientWidthh < 992) {
      return
    }
    if (isReadyToClose) {
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

    infoBlock.style.transition = 'cubic-bezier(0.41, 0.01, 0.45, 1) .75s'

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
    }, 600)

    content.className = content.className + ' main__content_leave'
    content.style.height = contentHeight + 'px'
    closeArtBlock.current.style.visibility = 'visible'

    setTimeout(() => {
      setIsReadyToClose(true)
    }, 1500)
  }

  function closeArt() {
    if (document.documentElement.clientWidth < 992) {
      return
    }
    console.log(isReadyToClose)

    if (!isReadyToClose) {
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
      content.style.height = ''
    }, 600)

    art.style.transform = ''
    infoBlock.style.transform = ''
    closeArtBlock.current.style.visibility = ''

    setTimeout(() => {
      setIsReadyToClose(false)
    }, 1500)
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
                <h5 className="art-info__index">{art.number}</h5>
                <h5 className="art-info__name">{art.author}</h5>
              </div>
              <h5 className="art-info__year">{art.year}</h5>
              <h5 className="art-info__title">{art.alt}</h5>
            </div>
            <hr className="main__hr_first" />
          </div>

          <img
            className="main__art"
            src={art.src}
            alt={art.alt}
            ref={image}
            onClick={openArt}
            onLoad={setStartArtParams}
          />
        </section>
        <div
          className="main__close-art"
          ref={closeArtBlock}
          onClick={closeArt}
        ></div>
        <section
          className="main__content"
          ref={mainContent}
          onLoad={() => setContentHeight(mainContent.current.offsetHeight)}
        >
          <section className="title main__title">
            <h1>{art.alt}</h1>
          </section>

          <p className="p3 main__description">{art.description}</p>
          <div className="main__authorship">
            <div className="main__avatar-container">
              <img className="avatar" src={art.authorPhoto} alt="avatar" />
              <hr className="main__hr_second" />
              <h3>{art.author}</h3>
            </div>
            <p className="p3">{art.ps}</p>
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
