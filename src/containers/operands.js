import {connect} from 'react-redux'
import Operands from '../components/Operands'

function mapStateToProps (state) {
  return {
    tileNumbers: state.tileNumbers
  }
}

export default connect(mapStateToProps)(Operands)
