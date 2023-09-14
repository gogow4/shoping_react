import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Az from "@/components/az/az";
import Clear from "@/components/clear/clear";
import Clear1 from "@/components/clear1/clear1";
import Ekew from "@/components/ekew/ekew";
import Sal from "@/components/sal/sal";
import Women from "@/components/women/women";
import Grey from "@/components/gray/gray";
import The from "@/components/the/the";
import Feed from "@/components/feed/feed";
import Boo from "@/components/boo/boo";
import Cqq from "@/components/cqq/cs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Az />
      <Clear />
      <Clear1 />
      <Ekew />
      <Sal />
      <Women />
      <Grey />
      <The />
      <Feed />
      <Boo />
    </div>
  )
}
