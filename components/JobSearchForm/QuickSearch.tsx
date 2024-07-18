import { Button, Input } from "@mantine/core";

type TProps = {
    onSearch: () => void;
}

export const QuickSearch = ({onSearch}:TProps) => {
     return(
       <>
        <Input
          placeholder="Регион"
          size="lg"
          className="flex-grow flex-shrink-0"
        />
        <Input
          placeholder="Профессия"
          size="lg"
          className="flex-grow flex-shrink-0"
        />
        {/*} <Link href={'/results'}>
        <Button size="lg" className="bg-opacity-80 hover:bg-opacity-100">
          Поиск
        </Button>
      </Link>*/}
        <Button
          size="lg"
          className="bg-opacity-80 hover:bg-opacity-100"
          onClick={onSearch}
        >
          Поиск
        </Button>
      </>
     )
}




