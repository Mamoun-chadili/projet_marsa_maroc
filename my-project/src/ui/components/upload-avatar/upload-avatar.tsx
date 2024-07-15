import Image from "next/image"
import { RiCamera2Fill } from "react-icons/ri"

interface Props {
    handleImageSelect: (e:React.ChangeEvent<HTMLInputElement>) => void
    imagePreview: string | ArrayBuffer | null
}
export const UploadAvatar = ({handleImageSelect,imagePreview

}:Props) => {
    return(
        <div className="flex items-center gap-5">
            <label className=" cursor-pointer inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium animate">
                <div className="flex items-center gap-2">
                    <RiCamera2Fill/>
                    <span>Choisir une image</span>
                </div>
                <input type="file" className="hidden" onChange={handleImageSelect} />
            </label>
            <Image
                className="bg-gray-500 py-1 px-1 rounded-full"
                src={
                    imagePreview ? 
                    typeof imagePreview === "string" ? imagePreview : String(imagePreview) : "/assets/images/camera.png"
                }
                alt="avatar utilisateur"
                width={80}
                height={80} 
            />
        </div>
    )
}