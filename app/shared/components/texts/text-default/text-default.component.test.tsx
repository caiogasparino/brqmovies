import { renderWithProviders } from "app/shared/utils/renderWithProviders";

import { TextDefault } from "./text-default.component";

describe("TextDefault component", () => {
    it("matches snapshot", () => {
        const { toJSON } = renderWithProviders(<TextDefault />);
        expect(toJSON()).toMatchSnapshot();
    });
});
