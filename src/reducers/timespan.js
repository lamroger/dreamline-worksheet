const timespan = (state = '6', action) => {
  switch (action.type) {
    case 'SET_TIMESPAN':
      return action.time
    default:
      return state
  }
}

export default timespan
