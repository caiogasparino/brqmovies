import { TypeItemOnboarding } from "app/modules/un-logged/constants/onboarding-data";

import { DescriptionItem } from "./modules/description-item/description-item.module";
import { ImageItem } from "./modules/image-item/image-item.module";

import { Container } from "./item-carousel.styles";

type ItemCarouselProps = {
    data: TypeItemOnboarding;
    isFocused: boolean;
};

const ItemCarousel: React.FC<ItemCarouselProps> = ({ data, isFocused }) => {
    return (
        <Container>
            <ImageItem icon={data?.icon} isFocused={isFocused} />
            <DescriptionItem
                isFocused={isFocused}
                description={data.subTitle}
                title={data.title}
            />
        </Container>
    );
};

export { ItemCarousel };
