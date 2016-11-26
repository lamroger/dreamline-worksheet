import { connect } from 'react-redux'
import { setTimeframe } from '../actions'
import TimescaleCard from '../components/TimescaleCard'

const mapStateToProps = (state) => ({
  value: state.timeframe
})

const mapDispatchToProps = (dispatch) => ({
  onChangeDropdown: (event, index, timeframe) => {
    dispatch(setTimeframe(timeframe))
  }
})

const Timeframe = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimescaleCard)

export default Timeframe