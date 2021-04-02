import React from "react";
import { render, screen } from "@testing-library/react";
import Home from './Home.jsx'

test("Should have a title called All videogames", async () => {
    render(<Home />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('All videogames', { exact: false })
    expect(items).toHaveLength(1);
});