import { Button } from "@mantine/core";
import { IconEraser } from "@tabler/icons-react";

type TProps = {
    onClick?: () => void
}
export const ResetFormButton = ({onClick}: TProps) => {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            
        >
            <IconEraser/>
        </Button>
    )
}