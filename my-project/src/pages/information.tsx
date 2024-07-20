import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { InformationContainer } from "@/ui/modules/information-page/info-page.container";

export default function Information() {
  return (
  <>

      <Seo title="Information | Marsa Maroc" description="Description..."/>
      
      <Layout isDisplayBreadcrumbs = {false}>
      <InformationContainer/>
      </Layout>
      
  </>
  );
}