import { render, screen } from "@testing-library/react"

import HomePage from "./page"

describe("HomePage", () => {
  it("affiche le nom du diététicien", () => {
    render(<HomePage />)
    const julienElements = screen.getAllByText("Julien")
    expect(julienElements.length).toBeGreaterThan(0)
  })
})
