import { Button, Input } from "@mantine/core";

type TProps = {
    onSearch: () => void;
}

export const QuickSearch = ({onSearch}:TProps) => {
     return(
        <div
        className="flex justify-start items-center space-x-4 w-full p-4 
      bg-white bg-opacity-30
       z-10"
      >
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
      </div>
     )
}




