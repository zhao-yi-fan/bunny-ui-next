import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BnButton from '@/packages/button/button.vue'

describe('BnButton.vue', () => {
  it('renders default slot', () => {
    const wrapper = shallowMount(BnButton, {
      slots: {
        default: '保存'
      }
    })

    expect(wrapper.text()).to.include('保存')
  })

  it('does not emit click when disabled', async () => {
    const wrapper = shallowMount(BnButton, {
      props: {
        disabled: true
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).to.equal(undefined)
  })
})
