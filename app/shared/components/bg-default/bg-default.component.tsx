import { ReactNode } from "react";

import { Container } from "./bg-default.styles";

export type BgDefaultProps = {
    children: ReactNode;
};

const BgDefault: React.FC<BgDefaultProps> = ({ children }) => {
    return <Container testID="bg-default">{children}</Container>;
};

export { BgDefault };
