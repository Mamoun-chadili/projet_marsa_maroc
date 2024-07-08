import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/Typography/Typography";
import { Container } from "@/ui/components/container/container";
import { RiUser6Fill} from "react-icons/ri";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
  <>

      <Seo title="Home | Marsa Maroc" description="Description..."/>
    
    <Navigation/>
    <Footer/>

   
  </>
  );
}
