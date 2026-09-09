import GithubContribution from "@/components/GithubContribution";
import MarwaBibi from "@/components/MarwaBibi";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";

export default function Home() {
  return (
    <ScrollProvider>
      <MarwaBibi />
      <Intro />
      <GithubContribution />
    </ScrollProvider>
  );
}
