import './photo-box.css';

const PhotoBox = ({src}) => {

    const emptyStatus = src.length < 1 ? "empty" : "occupied";

    return(<>

        <div className={`photoBox ` + emptyStatus} style={{"background-image": `url(${src})`}}>
            <p>+</p>
        </div>
        </>)
}

export default PhotoBox;