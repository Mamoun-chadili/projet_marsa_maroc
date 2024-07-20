import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UtilisationContainer } from "@/ui/modules/utilisation-page/utilisation-page.container";


export default function Information() {
  return (
  <>

      <Seo title="Information | Marsa Maroc" description="Description..."/>
      
      <Layout isDisplayBreadcrumbs = {false}>
      <UtilisationContainer/>
      </Layout>
      
  </>
  );
}