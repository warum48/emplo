export const FormContainer = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="formcont relative order-2 w-full max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
            {children}
        </div>
    )
}