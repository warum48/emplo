import { ParticlesComponent } from '../Particles/Particles';

export const AuthRegFormContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <div
      className="flex items-center justify-center bg-gray-100 flex-grow relative
                  bg-gradient-to-b
                  from-fuchsia-950/85 via-rose-500/75 to-rose-900/95
                 "
    >
      <div
        id="particles-js"
        className={`absolute top-0 left-0 h-full w-full overflow-hidden transition-all duration-500`}
      >
        <ParticlesComponent />
      </div>

      <div
        id="auth-form"
        className="w-full max-w-md p-8 
                    form-paper
                    shadow-md rounded-lg transform transition-transform duration-500"
                    // bg-white bg-opacity-95 text-gray-900  dark:text-white dark:bg-customGray-950/85
      >

        {children}
      </div>
    </div>
  );
};
