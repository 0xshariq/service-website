import { AboutUs } from "./component/AboutUs";
import { CurrentJobs } from "./component/CurrentJob";
import { ImageSlider } from "./component/ImageSilder";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <AboutUs />
      <CurrentJobs />
    </>
  );
}
