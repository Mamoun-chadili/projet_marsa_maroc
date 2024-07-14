import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";
import { GUEST } from "@/lib/session-status";


export default function Connexion() {
  return (
  <>

      <Seo title="Connexion | Marsa Maroc" description="PAGE DE CONNEXION"/>
      
      <Layout  sessionStatus={GUEST}>
        <LoginContainer/>
      </Layout>
      
  </>
  );
}
