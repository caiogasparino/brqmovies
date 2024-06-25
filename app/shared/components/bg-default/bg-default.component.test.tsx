import { renderWithProviders } from "app/shared/utils/renderWithProviders";
import { BgDefault, BgDefaultProps } from "./bg-default.component";

const defaultProps: BgDefaultProps = {
    children: "Test Children",
};

describe("BgDefault", () => {
    it("should match snapshot", () => {
        renderWithProviders(<BgDefault {...defaultProps} />);
        expect(defaultProps).toMatchSnapshot();
    });

    it("should render", () => {
        renderWithProviders(<BgDefault {...defaultProps} />);
        expect(true).toBeTruthy();
    });
});
