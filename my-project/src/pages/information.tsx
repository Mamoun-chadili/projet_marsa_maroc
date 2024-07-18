import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-pages/landing-page.container";

export default function Information() {
  return (
  <>

      <Seo title="Information | Marsa Maroc" description="Description..."/>
      
      <Layout isDisplayBreadcrumbs = {false}>
      <div>Information page</div>
      </Layout>
      
  </>
  );
}