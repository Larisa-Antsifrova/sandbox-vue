import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";

jest.mock("@/services/axios");

describe("MessageDisplay", () => {
  test("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);
  });

  test("Displays an error when getMessage call fails", async () => {
    // test goes here
  });
});
