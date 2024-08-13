export const BgColors = () => {
    return (
       <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0">
       <div className="absolute -left-[100px]  top-1/5 w-1/2 h-full ">
          <div
            className="absolute scale-y-100 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-300/50 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-blue-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
            //from-blue-200/50
          ></div>
        </div>

        <div className="absolute right-[0px] top-0 w-1/2 h-full ">
          <div
            className="absolute scale-y-120 scale-x-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-200/30 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
          ></div>
        </div>
       </div>
    )
}