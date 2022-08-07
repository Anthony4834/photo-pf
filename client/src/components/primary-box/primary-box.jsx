import PhotoBox from '../photo-box/photo-box';
import './primary-box.css';

const PrimaryBox = () => {

    const photos = [
        {
            source: "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
        },
        {
            source: "https://media.istockphoto.com/photos/picking-the-right-paint-paint-sample-color-swatch-picture-id92241441?b=1&k=20&m=92241441&s=170667a&w=0&h=OudUCphkJO9Gx9AdVpYIIypg48ELx72Zd46W818fTa8=",
        },
        {
            source: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
        },
        {
            source: "https://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1.jpg"
        },
        {
            source: ""
        },
        {
            source: ""
        }
    ]
    return(<>

        <div className="primaryBox">

            {photos.map(photo => {
                return <PhotoBox src={photo.source} />
            })}

        </div>

    </>)
}

export default PrimaryBox;