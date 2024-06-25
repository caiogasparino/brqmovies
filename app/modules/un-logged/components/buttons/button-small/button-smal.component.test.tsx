import { renderWithProviders } from "app/shared/utils/renderWithProviders";

import { ButtonSmall } from "./button-small.component";

describe("ButtonSmall", () => {
    it("should match snapshot", () => {
        const { toJSON } = renderWithProviders(
            <ButtonSmall onPress={() => {}} />,
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
