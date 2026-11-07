import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MapView } from "./Map";

function lastScript() {
  return document.head.querySelector("script") as HTMLScriptElement | null;
}

describe("MapView", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });
  afterEach(() => {
    cleanup();
    delete (window as { google?: unknown }).google;
    vi.restoreAllMocks();
  });

  it("creates the map and calls onMapReady when the script loads", async () => {
    const MapCtor = vi.fn();
    (window as unknown as { google: unknown }).google = { maps: { Map: MapCtor } };
    const onMapReady = vi.fn();
    const { container } = render(<MapView onMapReady={onMapReady} />);
    await waitFor(() => expect(lastScript()).not.toBeNull());
    lastScript()!.onload!(new Event("load"));
    await waitFor(() => expect(onMapReady).toHaveBeenCalledTimes(1));
    expect(MapCtor).toHaveBeenCalledWith(container.firstChild, expect.any(Object));
  });

  it("does not create the map nor throw when the script fails", async () => {
    const MapCtor = vi.fn();
    (window as unknown as { google: unknown }).google = { maps: { Map: MapCtor } };
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const onMapReady = vi.fn();
    render(<MapView onMapReady={onMapReady} />);
    await waitFor(() => expect(lastScript()).not.toBeNull());
    lastScript()!.onerror!(new Event("error"));
    await waitFor(() =>
      expect(errorSpy).toHaveBeenCalledWith("Map initialization aborted:", expect.any(Error))
    );
    expect(MapCtor).not.toHaveBeenCalled();
    expect(onMapReady).not.toHaveBeenCalled();
  });
});
