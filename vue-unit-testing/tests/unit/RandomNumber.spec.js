import RandomNumber from "@/components/RandomNumber.vue";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  test("By default, random number should be 0", () => {
    const wrapper = mount(RandomNumber);

    expect(wrapper.html()).toContain("<span>0</span>");
  });

  test("If button is clicked, the random number should be between 1 and 10", () => {
    expect(true).toBe(false);
  });

  test("If button is clicked, the random number should be between 200 and 300", () => {
    expect(true).toBe(false);
  });
});
