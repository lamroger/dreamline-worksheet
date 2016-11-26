const timeframe = (state = '6', action) => {
  switch (action.type) {
    case 'SET_TIMEFRAME':
      return action.timeframe
    default:
      return state
  }
}

export default timeframe
