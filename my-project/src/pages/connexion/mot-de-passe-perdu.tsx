import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget_password.container";
import { GUEST } from "@/lib/session-status";


export default function ForgetPassword() {
  return (
  <>

      <Seo title="Connexion | Marsa Maroc" description="PAGE DE CONNEXION"/>
      
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer/>
      </Layout>
      
  </>
  );
}
