import MainBrand from "@/components/MainBrand/MainBrand";
import MainFeature from "@/components/MainFeature/MainFeature";
import MainLatest from "@/components/MainLatest/MainLatest";
import MainNewsletter from "@/components/MainNewsletter/MainNewsletter";
import MainWelcome from "@/components/MainWelcome/MainWelcome";

export default function Home() {
  return (
    <>
      <MainWelcome />
      <MainLatest />
      <MainFeature />
      <MainNewsletter />
      <MainBrand />
    </>
  );
}
