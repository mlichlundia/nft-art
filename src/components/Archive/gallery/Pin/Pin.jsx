import './Pin.css'

export default function Pin({ setIsActive, setImage, src, alt }) {
  return (
    <div className="image-container">
      <img
        className="image"
        src={src}
        alt={alt}
        onClick={() => {
          setIsActive(true)
          setImage(src)
        }}
      ></img>
    </div>
  )
}
