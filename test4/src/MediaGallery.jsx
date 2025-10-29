import './style.css'
export default function MediaGallery(){
    return(

        <div className="container">
            <div  className="v-container">
            <video controls>
                <source src = 'video.mp4'></source>
            </video>
            </div>


            <audio controls>
                <source src = "./Singari.mp3.mp4"></source>
            </audio>
            <br />

            <img src="sasuke.jpg" alt="" ></img>

        </div>
    )
}