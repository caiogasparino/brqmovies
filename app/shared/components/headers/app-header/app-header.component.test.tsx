import { renderWithProviders } from "app/shared/utils/renderWithProviders";

import { AppHeader } from "./app-header.component";

describe("AppHeader", () => {
    it("should match snapshot", () => {
        const { toJSON } = renderWithProviders(
            <AppHeader title="Test Title" />,
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it("should render", () => {
        renderWithProviders(<AppHeader title="Test Title" />);
        expect(true).toBeTruthy();
    });
});
