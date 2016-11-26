import timeframe from './timeframe'

describe('timeframe reducer', () => {
  it('should handle initial state', () => {
    expect(
      timeframe(undefined, {})
    ).toEqual('6')
  })

  it('should handle SET_TIMEFRAME', () => {
    expect(
      timeframe('6', {
        type: 'SET_TIMEFRAME',
        timeframe: '12'
      })
    ).toEqual('12')

    expect(
      timeframe('12', {
        type: 'SET_TIMEFRAME',
        timeframe: '6'
      })
    ).toEqual('6')
  })

  it('should handle nonrecognized types', () => {
    expect(
      timeframe('6', {
        type: 'SET_NONRECOGNIZED',
        timeframe: '12'
      })
    ).toEqual('6')
  })

})
