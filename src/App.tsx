import { Route, Routes, Link, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { usePreferences } from "./context";
import Navigation from "./components/Navigation";
import { Footer, PageHeading, RoutePending } from "./components/UI";
import Home from "./pages/Home";
import MotionPage from './components/MotionPage';
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Tools = lazy(() => import("./pages/Tools"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
export default function App() {
  const { t } = usePreferences();
  const { pathname } = useLocation();
  useEffect(() => {
    const key = pathname === "/" ? "home" : pathname.slice(1);
    document.title = `${t.nav[key as keyof typeof t.nav] || "404"} — ${t.name}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.home.description);
  }, [pathname, t]);
  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<RoutePending />}>
          <MotionPage key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="*"
              element={
                <div className="container interior-page">
                  <PageHeading
                    eyebrow="404"
                    title={t.notFound.title}
                    lead={t.notFound.description}
                  />
                  <Link className="button button-solid" to="/">
                    {t.ui.back}
                  </Link>
                </div>
              }
            />
          </Routes>
          </MotionPage>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
