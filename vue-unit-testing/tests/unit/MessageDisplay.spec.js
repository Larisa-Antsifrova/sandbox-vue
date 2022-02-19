import MessageDisplay from "@/components/MessageDisplay.vue";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

describe("MessageDisplay", () => {
  test("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find('[data-testid="message"]').text();

    expect(message).toEqual(mockMessage);
  });

  test("Displays an error when getMessage call fails", async () => {
    // test goes here
  });
});
