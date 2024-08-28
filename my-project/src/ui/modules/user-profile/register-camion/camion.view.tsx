import { Typography } from "@/ui/design-system/Typography/Typography"
import { CamionForm } from "./camion.form"
import { FormsType } from "@/types/forms"


interface Props {
    form: FormsType;
}
export const CamionView = ({form}:Props) => {
    return(
    <div className="-space-y-5">
        <Typography variant="h2" component="h1" theme="primary" className="text-center">
           ENREGISTRER LE CAMION
        </Typography>
        <CamionForm form={form}/>
                      
    </div>
    )
}