import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTERED } from "@/lib/session-status";


export default function UserAccount() {
  return (
  <>

      <Seo title="Mon espace | Marsa Maroc" description="description page"/>
      
      <Layout withSidebar sessionStatus={REGISTERED}>
        <UserAccountContainer/>
      </Layout>
      
  </>
  );
}
