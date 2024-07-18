import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-pages/landing-page.container";

export default function Utilisation() {
  return (
  <>

      <Seo title="Utilisation | Marsa Maroc" description="Description..."/>
      
      <Layout isDisplayBreadcrumbs = {false}>
         <div>utilisation page</div>
      </Layout>
      
  </>
  );
}