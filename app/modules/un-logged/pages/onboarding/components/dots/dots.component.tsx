import { Container } from "./dots.styles";
import { DotItem } from "./modules/dot-item/dot-item.module";

type DotsProps = {
    currentIndex: number;
};

const TOTAL_DOTS = 3;

const Dots: React.FC<DotsProps> = ({ currentIndex }) => {
    return (
        <Container>
            {Array.from({ length: TOTAL_DOTS }).map((_, index) => (
                <DotItem key={index} isFocused={currentIndex === index} />
            ))}
        </Container>
    );
};

export { Dots };
