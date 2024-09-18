import MainFeature from "@/components/MainFeature/MainFeature";
import MainLatest from "@/components/MainLatest/MainLatest";
import MainWelcome from "@/components/MainWelcome/MainWelcome";

export default function Home() {
  return (
    <>
      <MainWelcome />
      <MainLatest />
      <MainFeature />
    </>
  );
}
