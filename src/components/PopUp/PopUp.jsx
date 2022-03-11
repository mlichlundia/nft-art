import './PopUp.css'

export default function Popup({ image, isActive, setIsActive }) {
  return (
    <div
      className={isActive ? 'pop-up__bg' : 'pop-up__bg pop-up__bg_disabled'}
      onClick={(e) => {
        e.stopPropagation()
        if (window.innerWidth < 768) {
          return
        }
        setIsActive(!isActive)
      }}
    >
      <div className="pop-up__content">
        <img className="pop-up__img" src={image} alt="img" />
      </div>
    </div>
  )
}
