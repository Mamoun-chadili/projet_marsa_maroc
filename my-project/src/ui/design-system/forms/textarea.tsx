import clsx from "clsx";
import { Typography } from "../Typography/Typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string;
}
export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    register,
    errors,
    errorMsg = "Vous avez une erreur quelque part",
    id,
    required = true ,
    isAutocompleted = false,
    label,
}: Props) => {
    return(
        <div className="space-y-2">
        {label && (
            <Typography 
            variant="caption4" 
            component="div" 
            theme={errors[id] ? "danger" : "gray"}>
                {label}
            </Typography>
        )}
        <textarea
            rows={rows}
            placeholder={placeholder}
            className={clsx(
                isLoading 
                ? " bg-gray-400 focus:ring-gray-400 cursor-not-allowed"
                :"bg-white",
            errors[id] ? "placeholder-alert-danger text-alert-danger" 
                       : " placeholder-gray-800" ,
                "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-offset-primary-400 border-gray-600"
            )}
            disabled={isLoading}
            {...register(id,{
                required:{
                    value: required,
                    message: errorMsg,
                }
            })}
            autoComplete={isAutocompleted ? "on" : "off"}
        /> 
        {errors[id] && (
            <Typography variant="caption4" component="div" theme="danger">
                {errors[id]?.message}
            </Typography>
        
        )}
        </div>
    )
}