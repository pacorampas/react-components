import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("<Button />", () => {
  test("should print label text", async () => {
    const { getByRole } = render(<Button label="Call to action" />);

    const button = getByRole("button");

    expect(button).toContainHTML("Call to action");
  });
});
