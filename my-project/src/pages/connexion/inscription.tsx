import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";
import { GUEST } from "@/lib/session-status";


export default function Register() {
  return (
  <>

      <Seo title="Inscription | Marsa Maroc" description="PAGE DE D'INSCRIPTION"/>
      
      <Layout sessionStatus={GUEST}>
        <RegisterContainer/>
      </Layout>
      
  </>
  );
}
