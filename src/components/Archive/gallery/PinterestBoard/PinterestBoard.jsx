import './PinterestBoard.css'
import Pin from '../Pin/Pin'

export default function Pinterestboard({ setIsActive, setImage }) {
  const imgs = [
    {
      src:
        'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://lh3.googleusercontent.com/6_T-pg8q1ZBCH-19tWxYzrPskA1yyO4ulsOEVkzjKxebALcfnVe41art7c_U5MC1AsgH397vqzi-DOO_T7L7jB5ccCey04M1Z9GkguA=w600',
      alt: 'img_name',
    },
    {
      src:
        'https://lh3.googleusercontent.com/P57ofykEGrh9sE7FEpMFLhy245Lrx2JT3xLZ9RUlvzVP407AYxw1NEGV5cB3rkLijuXi3DwlktCY13jgAmgQS1VBTVcWSEqBAqpfszE=w600',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'img_name',
    },
    {
      src:
        'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'img_name',
    },
  ]
  return (
    <section className="gallery  ani-gallery">
      {imgs.map((img) => (
        <Pin
          setIsActive={setIsActive}
          setImage={setImage}
          src={img.src}
          alt={img.alt}
          key={Math.random().toString(36).substr(2, 9)}
        />
      ))}
    </section>
  )
}
