import { Drawer } from "@mantine/core";
import { IconList } from "@tabler/icons-react";
import React from "react";

type TProps = {
    leftSideComponent: JSX.Element;
    rightSideTopComponent: JSX.Element;
    rightSideComponent: JSX.Element;
}

export const PageWithListAndTable = ({ leftSideComponent, rightSideComponent, rightSideTopComponent }: TProps) => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    return (
        <main
        className="mt-0 flex flex-col md:flex-row gap-4 md:gap-8 ^min-h-full relative ml-4 md:ml-0"
        //items-stretch
      >
        <div
          className={`w-[300px]
            min-w-64
            bg-gray-300 
            text-black dark:text-white
            dark:bg-customGray-950/85
            shadow
            bg-white
            relative
            text-sm
            hidden md:block
            `}
          //flex flex-col
          //p-4
        >
          {leftSideComponent}
        </div>
        <div
          className="flex gap-2 text-xs items-center md:hidden"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <IconList stroke={2} /> Список вакансий
        </div>
        <Drawer
          className="md:hidden"
          title="Список вакансий"
          size="100%"
          position="top"
          opened={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
        >
           {leftSideComponent}
        </Drawer>

        <div className="flex flex-col gap-4 overflow-auto "
        >
          {rightSideTopComponent}

          <div
            className="  
        form-bg-and-text
        mr-8
       rounded
        overflow-auto
        p-8 rounded overflow-auto
        "
          >
            {rightSideComponent}
          </div>
        </div>
      </main>
    )
}