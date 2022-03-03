import './Pin.css'

export default function Pin({ src, alt }) {
  return (
    <img
      className="image"
      src={src}
      alt={alt}
      onClick={() => console.log('POP UP')}
    ></img>
  )
}
