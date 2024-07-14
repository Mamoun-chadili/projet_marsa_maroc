import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-pages/landing-page.container";

export default function Home() {
  return (
  <>

      <Seo title="Home | Marsa Maroc" description="Description..."/>
      
      <Layout isDisplayBreadcrumbs = {false}>
         <LandingPageContainer/>
      </Layout>
      
  </>
  );
}
