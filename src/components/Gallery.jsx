import { useEffect, useState } from 'react'
import { Reveal } from './useReveal.jsx'
import './MediaSections.css'

const toPublicAssetUrl = (path) => encodeURI(path.startsWith('/') ? path : `/${path}`)

const photos = [
  { title: 'Campus Front', src: toPublicAssetUrl('/h.jpg') },
  { title: 'Campus View', src: toPublicAssetUrl('/h (2).jpg') },
  { title: 'Snapchat 1', src: toPublicAssetUrl('/Snapchat-119386327.jpg') },
  { title: 'Snapchat 2', src: toPublicAssetUrl('/Snapchat-1416335994.jpg') },
  { title: 'Snapchat 3', src: toPublicAssetUrl('/Snapchat-1419672727.jpg') },
  { title: 'Snapchat 4', src: toPublicAssetUrl('/Snapchat-1448536816.jpg') },
  { title: 'Snapchat 5', src: toPublicAssetUrl('/Snapchat-1509904488.jpg') },
  { title: 'Snapchat 6', src: toPublicAssetUrl('/Snapchat-1720227111.jpg') },
  { title: 'Snapchat 7', src: toPublicAssetUrl('/Snapchat-1740035562.jpg') },
  { title: 'Snapchat 8', src: toPublicAssetUrl('/Snapchat-1806531727.jpg') },
  { title: 'Snapchat 9', src: toPublicAssetUrl('/Snapchat-1834951744.jpg') },
  { title: 'Snapchat 10', src: toPublicAssetUrl('/Snapchat-1907361040.jpg') },
  { title: 'Snapchat 11', src: toPublicAssetUrl('/Snapchat-520107276.jpg') },
  { title: 'Snapchat 12', src: toPublicAssetUrl('/Snapchat-548987066.jpg') },
  { title: 'Snapchat 13', src: toPublicAssetUrl('/Snapchat-813928739.jpg') },
  { title: 'Snapchat 14', src: toPublicAssetUrl('/Snapchat-817308889.jpg') },
  { title: 'Snapchat 15', src: toPublicAssetUrl('/Snapchat-95375648.jpg') },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const activePhoto = photos[activeIndex]

  const goToPhoto = (index) => {
    setActiveIndex(index)
  }

  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <div className="section-title">
          <div className="kicker">Campus life</div>
          <h2>Moments made for learning.</h2>
          <p>Real glimpses from the campus and student life.</p>
        </div>

        <Reveal>
          <div className="gallery-shell">
            <div className="featured-photo">
              <img src={activePhoto.src} alt={activePhoto.title} onClick={() => setSelected(activePhoto)} />
              <div className="photo-nav">
                <button type="button" onClick={() => goToPhoto((activeIndex - 1 + photos.length) % photos.length)}>
                  ←
                </button>
                <div>
                  <h3>{activePhoto.title}</h3>
                  <p>Swipe through campus highlights</p>
                </div>
                <button type="button" onClick={() => goToPhoto((activeIndex + 1) % photos.length)}>
                  →
                </button>
              </div>
            </div>

            <div className="thumbs">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.title}
                  className={`thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToPhoto(index)}
                >
                  <img src={photo.src} alt={photo.title} />
                  <span>{photo.title}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {selected ? (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
              <img src={selected.src} alt={selected.title} />
              <h2>{selected.title}</h2>
              <p>Click anywhere outside to close.</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

