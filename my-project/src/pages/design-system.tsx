import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/Typography/Typography";
import { Container } from "@/ui/components/container/container";
import { RiUser6Fill } from "react-icons/ri";
import { Layout } from "@/ui/components/layout/layout";

export default function DesignSystem() {
    return(
        <>
        <Seo title="design" description="Description..."/>
    
        <Layout>
             <Container className="py-10 space-y-5">  
      {/*Typography*/}
      <div className="space-y-5">
        <Typography>Marsa Maroc</Typography>
      <Typography theme="primary" variant = "body-lg" component="h1">
        Marsa 
        </Typography>
      <Typography theme="secondary" variant = "body-lg" component="h1">
        Maroc 
        </Typography>
      <Typography variant = "lead" component="div">
        Marsa-Maroc 
        </Typography>
      <Typography variant = "body-sm" component="div">
        Marsa_Maroc 
        </Typography>
      <Typography variant = "caption4" component="div">
        Marsa&&&&&Maroc 
        </Typography>
      <Typography variant = "caption4" weight="medium" component="div">
        MarsammmmmmmmmmmMaroc 
        </Typography>
        </div>

      {/*Spinner*/}
      <div className="flex items-center gap-4 p-10">
      <Spinner size="small"/>
     <Spinner/>
     <Spinner size="large"/>
      </div>

      {/*loding*/}
      <div className="flex items-center gap-4 p-10">
     <Button isLoding size="small" >Accent</Button>
     <Button isLoding size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">Accent</Button>
     <Button isLoding size="small" icon={{ icon: RiUser6Fill }} >Accent</Button>
     <Button isLoding size="small" variant="secondary">Accent</Button>
     <Button isLoding size="small" variant="outline">Accent</Button>
     <Button isLoding size="small" variant="disabled" disabled>Accent</Button>
     <Button isLoding size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
     <div className="space-y-2">
    <Typography variant = "caption2" weight="medium">
        Logo 
        </Typography>
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
      <Logo size="very-small"/>
      <Logo size="small"/>
      <Logo size="medium"/>
      <Logo size="large"/>
        </div>
    </div>
     </div>

      {/*Button*/}{/*icon*/}
     <div className="flex items-center gap-4 p-10">
     <Button size="small" >Accent</Button>
     <Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">Accent</Button>
     <Button size="small" icon={{ icon: RiUser6Fill }} >Accent</Button>
     <Button size="small" variant="secondary">Accent</Button>
     <Button size="small" variant="outline">Accent</Button>
     <Button size="small" variant="disabled" disabled>Accent</Button>
     <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
     </div>

    <div className="flex items-center gap-4 p-10">
     <Button>Accent</Button>
     <Button  variant="secondary">Accent</Button>
     <Button variant="outline">Accent</Button>
     <Button variant="disabled" disabled>Accent</Button>
     <Button variant="ico" icon={{ icon: RiUser6Fill }} />
     </div>

     <div className="flex items-center gap-4 p-10">
     <Button size="large" >Accent</Button>
     <Button size="large" variant="secondary">Accent</Button>
     <Button size="large" variant="outline">Accent</Button>
     <Button size="large" variant="disabled" disabled>Accent</Button>

     <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} iconTheme="secondary" />
     <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} iconTheme="gray" />
     <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
     </div>
  
             </Container>
        </Layout>

    
        </>
    )
}