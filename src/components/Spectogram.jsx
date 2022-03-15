import Spectogram_ from "../img/spectogram.png"
import Item from '../utils/styles/Item'

const Spectogram = () => {

    return (
        <div>
            <Item elevation={4}>
                Spectogram
            </Item>
            <img src={Spectogram_} style={{ width: "43%", height: "2%", marginTop: "20px" }} alt={"Spectogram"} />
        </div>
    )
}

export default Spectogram;