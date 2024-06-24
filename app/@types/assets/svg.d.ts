declare module "*.svg" {
    import type React from "react";
    import { type SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare module "*.jpg" {
    import type React from "react";
    import type { ImageProps } from "react-native";
    const content: React.FC<ImageProps>;
    export default content;
}
