import React from "react";
import TestRenderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { MailReset } from "./MailReset";

describe("MailReset component", () => {
  test("renders correctly", () => {
    const { getByText, getByTestId } = render(<MailReset />);

    // Проверяем наличие контейнера компонента
    const container = getByTestId("mailreset-container");
    expect(container).toBeInTheDocument();

    // Проверяем наличие заголовка
    const title = getByText(/К вам на почту пришла/i);
    expect(title).toBeInTheDocument();

    // Проверяем наличие зеленой ссылки
    const link = getByText(/ссылка/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("mailreset__title_green");
  });
});
