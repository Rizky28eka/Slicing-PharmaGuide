import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "@/components/Chrome";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TopicPage from "@/pages/TopicPage";

/** Pindah ke anchor bila ada hash, atau kembali ke atas saat halaman berganti. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#isi">Lewati ke isi</a>
      <ScrollManager />
      <Header />
      <main id="isi">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/layanan/:slug" element={<TopicPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
