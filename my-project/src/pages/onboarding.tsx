import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { REGISTERED } from "@/lib/session-status";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
import { Session } from "@/ui/components/session/session";


export default function Onboarding() {
  return (
  <>

      <Seo title="Onboarding | Marsa Maroc" description="description page onboarding"/>
      
     <Session sessionStatus={REGISTERED}>
        <OnboardingContainer/>
      
      </Session>
  </>
  );
}
