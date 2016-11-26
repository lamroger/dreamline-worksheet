import * as actions from './index'

describe('todo actions', () => {
  it('setTimeframe should create SET_TIMEFRAME action', () => {
    expect(actions.setTimeframe('6')).toEqual({
      type: 'SET_TIMEFRAME',
      timeframe: '6'
    })
  })
})
