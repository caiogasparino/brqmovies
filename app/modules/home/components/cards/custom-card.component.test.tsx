import { renderWithProviders } from "app/shared/utils/renderWithProviders";

import { CustomCard } from "./custom-card.component";

describe("CustomCard component", () => {
    it("matches snapshot", () => {
        const { toJSON } = renderWithProviders(
            <CustomCard
                icon="home"
                label1="Test Label 1"
                label2="Test Label 2"
                onPress={() => {}}
            />,
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
