import './Pin.css'

export default function Pin({ setIsActive, setImage, src, alt }) {
  return (
    <img
      className="image ani-up"
      src={src}
      alt={alt}
      onClick={() => {
        setIsActive(true)
        setImage(src)
      }}
    ></img>
  )
}
