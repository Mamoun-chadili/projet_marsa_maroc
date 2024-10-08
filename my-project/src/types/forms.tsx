export interface FormsType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit:any;

}


export interface RegisterFormFielsType {
    email: string;
    password: string;
}

export interface LoginFormFielsType {
    email: string;
    password: string;
}
export interface ForgetPasswordFormFielsType {
    email: string;
}

export interface OnboardingProfileFormFieldsType {
    displayName: string;
    expertise: string;
    biographie: string;
}
export interface UserProfileFormFieldsType {
    displayName: string;
    expertise: string;
    biographie: string;
    whatsApp: string;
    linkedin:string;
}

export interface SaveCamion {
    CIN_Chauffeur: string;
    PlaqueCamion: string;
    conteneur: string;
    description?: string;
}

