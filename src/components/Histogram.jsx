import Histograma from "../img/histograma.jpg"
import Item from '../utils/styles/Item'


const Histogram = () => {

    return (
        <div>
            <Item elevation={4}>
                Histograms
            </Item>
            <img src={Histograma} style={{ width: "100%", height: "65%", marginTop: "20px" }} alt={"Histogram"} />
        </div>

    )
}

export default Histogram;