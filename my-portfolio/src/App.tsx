import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

// AnimistaのアニメーションをCSSで定義
const sectionStyles = {
  transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out",
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      style={{
        ...sectionStyles,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(10px)",
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
    >
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-4 text-lg text-gray-600">{children}</div>
    </section>
  );
};

interface Production {
  title: string;
  description: string;
  link: string;
  image: string;
  isInProgress?: boolean; // 進行中プロジェクトのフラグ
}

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["About Me", "Skills", "Productions"];

  const productions: Production[] = [
    {
      title: "WordPress",
      description: "私のブログサイトです。",
      link: "https://hagf.buzz",
      image:
        "https://hagf.buzz/wp-content/uploads/2024/02/IMG_0499-scaled.jpeg",
      isInProgress: false,
    },
    {
      title: "React-portfolio",
      description: "これを作る前に作ったポートフォリオです。",
      link: "https://kokotyan.github.io/react-portfolio/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      isInProgress: false,
    },
    {
      title: "Noting",
      description: "何を作るか考えているところです。",
      link: "https://example.com/project3",
      image: "https://via.placeholder.com/150",
      isInProgress: true, // このプロジェクトだけ開発中としてマーク
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-2xl font-bold text-indigo-600 hover:bg-blue-50 rounded-md p-2"
              >
                Koko&apos;s Portfolio
              </button>
            </div>

            <div className="hidden sm:flex sm:space-x-8 sm:items-center">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(" ", "")}`}
                  className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:bg-blue-50 rounded-md p-2"
                >
                  {section}
                </a>
              ))}
              <a
                href="https://github.com/kokotyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:bg-blue-50 rounded-md p-2"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.868 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.893 1.53 2.341 1.088 2.91.832.092-.648.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.985 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.853.004 1.71.115 2.511.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.683 0 3.841-2.338 4.687-4.565 4.936.36.31.68.921.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.579.688.481C19.136 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>

            <div className="flex sm:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:bg-blue-50"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(" ", "")}`}
                className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50"
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </a>
            ))}
            <a
              href="https://github.com/kokotyan"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-10">
        <Section id="aboutme" title="About Me">
          2001年2月7日に石川のさきっぽの珠洲で産声を上げた。空と音楽、それと美味しい食べ物が好き。
        </Section>

        <Section id="skills" title="Skills">
          基本はJavaScriptのフレームワークであるReactやTypeScriptでコードを組んでいます。最近はTailwind
          CSSを使ってスタイルを作ることが多いです。HTMLやCSSはもちろん、WordPressのテーマ開発なども手掛けています。
        </Section>

        <Section id="productions" title="Productions">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productions.map((production, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={production.image}
                  alt={production.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  {production.title}
                </h3>
                <p className="mt-2 text-gray-600">{production.description}</p>
                <a
                  href={production.link}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細を見る
                </a>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-lg mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Koko&apos;s Portfolio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
