import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add 1 to 4 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide 21 by 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  // this.runningTotal = parseFloat("" + this.runningTotal + number)
  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = ""
    wrapper.vm.numberClick('5')
    wrapper.vm.numberClick('2')
    expect(wrapper.vm.runningTotal).to.equal(52)
  })

  it('chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    wrapper.vm.multiply('10');
    expect(wrapper.vm.runningTotal).to.equal(40)
  })

  it('clear the running total without affeting calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('4')
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('8')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(10)
  })


})
