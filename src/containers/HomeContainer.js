import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/action";

const mapStateToProps = state=>({
    cardData:state.cardItems

})

const mapDispatchToProps = dispatch=>({
    addToCardHandler: data=>dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
