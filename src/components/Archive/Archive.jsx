import './Archive.css'
import PinterestBoard from './gallery/PinterestBoard/PinterestBoard'
import PopUp from '../PopUp/PopUp'
import { useState } from 'react'

export default function Archive() {
  const [isActive, setIsActive] = useState(false)
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1608284894748-9ec2239bdb14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  )
  return (
    <main className="archive page">
      <header className="archive__header">
        <h5 className="ani-up">NFT Art</h5>
        <div className="title archive__title ani-down">
          <h1>Archive</h1>
          <hr className="archive__hr ani-horizontal" />
        </div>
      </header>
      <PinterestBoard
        isActive={isActive}
        setIsActive={setIsActive}
        setImage={setImage}
      />
      <PopUp image={image} isActive={isActive} setIsActive={setIsActive} />
    </main>
  )
}
