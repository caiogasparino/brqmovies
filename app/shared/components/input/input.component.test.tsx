import { renderWithProviders } from "app/shared/utils/renderWithProviders";
import { InputCustom } from "./input.component";

describe("InputCustom component", () => {
    it("matches snapshot", () => {
        const { toJSON } = renderWithProviders(
            <InputCustom placeholder="Snapshot Test" variant={"PRIMARY"} />,
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
