type TProps = {
    children: React.ReactNode,
    resultState: boolean,
    isAnimating: boolean,
    //setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    mainRef: React.RefObject<HTMLDivElement>,
    //setResultState: React.Dispatch<React.SetStateAction<boolean>>,
}
export const MainBlockContainer = ({ children, resultState, isAnimating, mainRef }: TProps) => {
    return  <main
    ref={mainRef}
    className={`  
                relative
                ${resultState && isAnimating ? 'w-1/3 xl:w-1/4' : 'w-full'} 
                ${(resultState && isAnimating) || !resultState ? 'transition-all duration-500 items-center' : ''}
                flex-grow flex flex-col 
                
                text-center
                mt-16 
              `}
  >
    <div className={`absolute top-0 left-0 w-full h-full
                    ${resultState ? 'opacity-0' : 'opacity-100'}
                    transition-all
                    bg-cover
                    bg-[url('https://unsplash.com/photos/gMsnXqILjp4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGpvYiUyMHRlYW18ZW58MHx8fHwxNzIwNTQ5MTY0fDA&force=true&w=2400')]
                    `}></div>
    <section
      className={`
                  transition-all
                  w-full flex flex-col flex-grow
                  relative
                  items-center
                  border-box
                  px-0
                  bg-opacity-70
                  ${resultState ? 'bg-gradient-to-b' : 'bg-gradient-to-br'}
                  ${resultState ? 'from-fuchsia-950/95 via-rose-500/95 to-rose-900/95' : 'from-fuchsia-950/85 via-rose-500/75 to-rose-900/95'}
                  ${resultState ? 'dark:from-indigo-950/90 dark:via-rose-800/70 dark:to-rose-900/10' : 'dark:from-indigo-950/75 dark:via-rose-800/75 dark:to-pink-900/95 '} 
                  ${resultState ? 'px-0 ' : 'px-8'}
                  py-20
                  text-white  shadow-md `}
                  //!!fuchsia-rose
                  //${resultState ? 'from-fuchsia-950/100 via-rose-500/100 to-rose-900/100' : 'from-fuchsia-950/85 via-rose-500/75 to-rose-900/95'}
    >{children}</section>
  </main>
}