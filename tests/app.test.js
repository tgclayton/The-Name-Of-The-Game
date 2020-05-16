// import React from 'react'
// import { mount } from 'enzyme'

// import App from '../client/components/App'

test.skip('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})
