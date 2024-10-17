import { Drawer } from "@mantine/core";
import React from "react";

type TProps = {
    Icon:  React.ReactElement; //React.FC<any> 
    MainComponent: React.ReactElement; 
    title: string;
    className?: string
}


export const DrawerWithOpener = ({Icon, MainComponent, title, className}: TProps ) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <>
      <div
        className={"flex gap-2 text-sm items-center lg:hidden cursor-pointer" + ' ' + className}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {Icon} {title}
      </div>
      <Drawer
        className="lg:hidden"
        title={title}
        size="100%"
        position="top"
        opened={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
      >
        {MainComponent }
      </Drawer>
    </>
  );
};
