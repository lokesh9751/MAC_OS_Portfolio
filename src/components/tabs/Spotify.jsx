import MoveWindows from './MoveWindows'
import './spotify.scss'
const Spotify = () => {
    return (
        <MoveWindows>
            <div className="spotify-tab">
                <iframe
                    title="Spotify Playlist"
                    src="https://open.spotify.com/embed/playlist/2bzuYHn8quHCAld8mDN7wV?utm_source=generator&theme=0"
                    width="100%"
                    height="0"
                    style={{
                        borderRadius: "0px",
                        border: "none",
                    }}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </MoveWindows>
    )
}

export default Spotify