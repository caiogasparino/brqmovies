import { renderWithProviders } from "app/shared/utils/renderWithProviders";
import TabViewComponent from "./tab-view.component";

describe("TabView component", () => {
    it("matches snapshot", () => {
        const { toJSON } = renderWithProviders(<TabViewComponent />);
        expect(toJSON()).toMatchSnapshot();
    });
});
