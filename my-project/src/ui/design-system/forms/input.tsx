import clsx from "clsx";
import { Typography } from "../Typography/Typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "url";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string;
}
export const Input = ({
    isAutocompleted = false,
    required = true ,
    id,
    errorMsg = "Vous avez une erreur quelque part",
    errors,
    register,
    type = "text",
    placeholder,
    isLoading,
    label,
}: Props) => {

    return (
        <div className="space-y-2">
            {label && (
                <Typography 
                variant="caption4" 
                component="div" 
                theme={errors[id] ? "danger" : "gray"}>
                    {label}
                </Typography>
            )}

            <div className="flex items-center">

            {type === "url" && (
                <div className="p-4 text-gray-700 border-l border-gray-500 rounded-l bg-gray-500 border-y">
                    https://
                </div>
            )}

        <input type={type}
        placeholder={placeholder}
        className={clsx(
            type === "url" ? "rounded-r-full" : "rounded",
            isLoading && "cursor-not-allowed",
            errors[id] ? "placeholder-alert-danger text-alert-danger" 
            : " placeholder-gray-800" ,
            "w-full p-4 font-light border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-800"
        )}
        disabled={isLoading} 
        {...register(id ,{
            required:{
            value: required,
            message: errorMsg,
        }})}
        autoComplete={isAutocompleted  ? "on" : "off"}
        />
        </div>

        {errors[id] && (
            <Typography variant="caption4" component="div" theme="danger">
                {errors[id]?.message}
            </Typography>
        
        )}
        </div>
    )
}
