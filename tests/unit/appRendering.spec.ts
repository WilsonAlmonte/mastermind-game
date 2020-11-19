import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

describe('App Render', () => {
  it('App renders correctly', () => {
    const msg = 'mounted'
    const wrapper = shallowMount(App, {})
    expect(wrapper.vm.$data.validationMsg).toMatch(msg);
  })
})
