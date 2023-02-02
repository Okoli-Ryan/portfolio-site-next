import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";

describe("it works", () => {
	test("it works", () => {
		const { getByText } = render(<Home />);

		expect(getByText("Okoli")).toBeVisible();
	});
});
