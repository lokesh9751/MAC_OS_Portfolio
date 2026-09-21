import MoveWindows from './MoveWindows'
import './spotify.scss'
const Spotify = ({tab_naam,setWindowState}) => {
    return (
        <MoveWindows tab_naam={tab_naam} setWindowState={setWindowState} tab_name={'lokesh - spotify'}>
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