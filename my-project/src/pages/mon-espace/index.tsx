import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";
import { REGISTERED } from "@/lib/session-status";


export default function UserAccount() {
  return (
  <>

      <Seo title="Mon espace | Marsa Maroc" description="description page"/>
      
      <Layout withSidebar sessionStatus={REGISTERED}>
        <ProfileContainer/>
      </Layout>
      
  </>
  );
}
