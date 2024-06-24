import "styled-components/native";

import { THEME_LIGHT } from "app/shared/design/themes/theme-light";

declare module "styled-components/native" {
    type ThemeType = typeof THEME_LIGHT;

    export interface DefaultTheme extends ThemeType {}
}
