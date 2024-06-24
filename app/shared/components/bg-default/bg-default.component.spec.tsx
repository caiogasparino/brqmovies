import { render } from "@testing-library/react-native";
import { BgDefault } from "./bg-default.component";

describe("BgDefault", () => {
    it("should render correctly", () => {
        const { toJSON } = render(<BgDefault>test</BgDefault>);
        expect(toJSON()).toMatchSnapshot();
    });

    it("should render correctly with children", () => {
        const { toJSON } = render(<BgDefault>test</BgDefault>);
        expect(toJSON()).toMatchSnapshot();
    });

    it("should have 'bg-default-container' ID on container", () => {
        const { getByTestId } = render(<BgDefault children={undefined} />);
        const container = getByTestId("bg-default-container");
        expect(container).toBeTruthy();
    });
});
