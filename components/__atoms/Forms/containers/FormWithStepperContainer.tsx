export const FormWithStepperContainer = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-row">
            {children}
        </div>
    )
}