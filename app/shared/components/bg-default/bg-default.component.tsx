import { ReactNode } from "react";

import { Container } from "./bg-default.styles";

type BgDefaultProps = {
    children: ReactNode;
};

const BgDefault: React.FC<BgDefaultProps> = ({ children }) => {
    return <Container testID="bgdefault">{children}</Container>;
};

export { BgDefault };
