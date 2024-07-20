import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { REGISTERED } from "@/lib/session-status";
import { CamionContainer } from "@/ui/modules/user-profile/register-camion/camion.container";


export default function AccountCamion() {
  return (
  <>

      <Seo title="Enregistrement | Marsa Maroc" description="description page"/>
      
      <Layout  sessionStatus={REGISTERED}>
        <CamionContainer/>
      </Layout>
      
  </>
  );
}
