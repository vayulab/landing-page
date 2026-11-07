import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { toast } from "sonner";
import { ContactForm } from "./ContactForm";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

async function submitForm() {
  fireEvent.change(screen.getByPlaceholderText("contact.name_placeholder"), {
    target: { value: "Maria" },
  });
  fireEvent.change(screen.getByPlaceholderText("contact.email_placeholder"), {
    target: { value: "maria@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("contact.message_placeholder"), {
    target: { value: "Hello, this is a long enough message" },
  });
  fireEvent.click(screen.getByRole("button"));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it.each([200, 204])("shows success and resets on status %i", async status => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, status }));
    render(<ContactForm />);
    await submitForm();
    await waitFor(() => expect(toast.success).toHaveBeenCalledWith("contact.success"));
    expect(toast.error).not.toHaveBeenCalled();
    expect(
      (screen.getByPlaceholderText("contact.name_placeholder") as HTMLInputElement).value
    ).toBe("");
  });

  it.each([404, 500, 503])("shows error and keeps data on status %i", async status => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status }));
    render(<ContactForm />);
    await submitForm();
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith("contact.error"));
    expect(toast.success).not.toHaveBeenCalled();
    expect(
      (screen.getByPlaceholderText("contact.name_placeholder") as HTMLInputElement).value
    ).toBe("Maria");
    await waitFor(() => expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(false));
  });

  it("shows error on network failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));
    render(<ContactForm />);
    await submitForm();
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith("contact.error"));
    expect(toast.success).not.toHaveBeenCalled();
    await waitFor(() => expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(false));
  });
});
