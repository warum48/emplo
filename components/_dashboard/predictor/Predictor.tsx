import { Button } from "@mantine/core";

type TPredictorProps = {
    name: string;
}

export const Predictor = ({name}:TPredictorProps) =>{



    return(
        <div className={`p-4 flex gap-4 shadow dark:border dark:border-gray-700 bg-neutral-50/90 dark:bg-customGray-950/90 `}>
            {name} <Button size="xs">Выбрать</Button>
        </div>
    )
}