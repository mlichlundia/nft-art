import './Archive.css'
import PinterestBoard from './gallery/PinterestBoard/PinterestBoard'

export default function Archive() {
  return (
    <main className="archive page">
      <header className="archive__header">
        <h5>NFT Art</h5>
        <div className="title archive__title">
          <h1>Archive</h1>
          <hr className="archive__hr" />
        </div>
      </header>
      <PinterestBoard />
    </main>
  )
}
