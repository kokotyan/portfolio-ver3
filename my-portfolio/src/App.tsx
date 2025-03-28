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
  isInProgress?: boolean;
}

const productions: Production[] = [
  {
    title: "React-portfolio",
    description: "このサイトを作る前に作ったポートフォリオです。",
    link: "https://kokotyan.github.io/react-portfolio/",
    image:
      "https://pbs.twimg.com/profile_images/1558726525431980032/Dnjm2rlt_400x400.jpg",
    isInProgress: false,
  },
  {
    title: "note",
    description: "私のブログです、コーヒーを飲んだ時とお出かけした時に更新しています。",
    link: "https://note.com/murakumo_yu",
    image:
      "https://assets.st-note.com/production/uploads/images/177879204/profile_eb3851ee02be0b68e428a5797e22e3c6.jpeg?fit=bounds&format=jpeg&quality=85&width=330",
    isInProgress: false,
  },
  {
    title: "github",
    description: "私の制作物及びコードはこちらから閲覧可能です",
    link: "https://github.com/kokotyan",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAACwsLD39/f8/Pz09PTd3d3l5eXx8fHKysrDw8NBQUFXV1ft7e0lJSUaGhofHx9ycnKKioowMDDU1NR4eHgTExOQkJClpaVISEg8PDy5ublra2tgYGCfn5+AgIBPT097XEbzAAAJN0lEQVR4nO1d63ayOhAtd0HAGwiCIO//lIdWalUCsyck4PkW+1fXahvYJJn7JF9fK1asWLFixYoV6mHbtvWD9oel30UOtrOJ3KTM0mt42hkd4kt1OJp+Em2c/w2tjecGZrrdG0M4F4c8cD1n6RelYLl+eQwHaTyjOZaJ97kz5LTrKjxDTLopurYz9Il8bNc8NgwiHXZhVnpLv/sbHPMW7uhXFyKujsHS7/8EL6tiSSZ3FJVpLU3iDu9WcDbKwPRc6g+Qbu51WAbzcKoXnh3vqojJHQvOju0dlVJpUZSbZbh45rRdL0aYLLDYLB9T9HzU7txc3EwTlRbNvGvNKnVNyw92xxknxzvq2C3PCMu5TDZtu+UJp2weOZDrnpYfnMM5Ns5hDio/0L5xrNNsXAzD1MvFnW5SclBrFAN2MMt2ecJRm7FmmXOusTvSSBOXfH4uutgsw8UwDhrY2POoFxEb9QpnMS6GcVXNxZxXJmtlkyxIpcVRJRd3WS6Gkavj4i23XzrsSlVcnBlMfgqFIqvTuS3N5BuVEnVj58NRvtO1apSp0nPRXKvhZ2UqzDS/GH7+IfKSIM+q6XJ7m9ZmkETJZfAvYnO6Ce1Vw28Q3x0O2w3ykb+icTqWSbeKRiKk22QqF2cspNQ81rHtBTfZ6WnM5M9gyUZGmWzX+GOvkb7QdqWCtUUQPS+fUY9p4kJzxrb37k2V2WNLcuj93oIw7qg8mSbRRj/2qS/7Ax6VvtHljIgbwwincBk3yQrBGrYZW2cvUuvD4uwbU/KF43mki/B/yt63Pe/2+12P47kSJmaJJK/8rsnHBx6Y9ORX7cTbsDqkt6yu87yus1t6qMJL3P1yfxRvAGLbSdvPEWFfDrkZXmv/7Jo0M33vbSFuvMSsb9d27vZDSTIixniWtdEoUXsb/ApZqwUHrQ/b8/NbPvRryhBMB/6PQEJZXYNkvhwq6j38B9QXjOVkAGksK/X/fkFq3oPMqP72M8kUMlNDGyfLkDFufPE8Yow/RtXAhV7cRuGzBwUSsMrjWd9I6edm3KlxAb+/0kEGsFUbrmNj0mMOmDMTgdSsMZNQETDbxlYHGVKGtrjyyu0SxPYtNGSCrFEX4BcsEWARJuYdAn9mMjwo2MMq5opoudxiryGBWkLB0wtnnY16/n/QoDXBOAJjndlglU+ofNOgkeAbvs4cRKS0KCZHst6RQPu/tZ3xzwhmMIQ+/ESYYEEx/hnBVZap5wI/G9+u2CqbFPcZBhZ7i9HhLGi4vaZyAyry0AEN1WKCWVuVTgk9Ht2vkKy/6ituQ+xC2P+ALArlUvkPLrLQzthYNsJFZ9WhDVmG2JZFtEyscWLaN0DEKWbRIH6Z3nJQaGowLQckl2N+TIGFBJgaTAIAWuumubLVAuwAyM+1AVtPcyUo5NackA+6oSUzOzzCBtCXEyN+LlAoIxFT5IJW3FA5jU+2XZ0V1hgNge7Ngd6C9ii2mmXZNxI6fobI5pyMMlUzVOnb9KZB0k41SUYqQ8IFre2Q6DAp4s+1diYtcnK1I84h+Uli7VrmG7QEQMiQ3sRplk7kgFR3CBmyP0Z9gEkE2nJugHATSYYVG5WGR0aIL4BHQ8pEZJDpAMgAH/VDyNCxe4TMP7XMSGm2naUjlI46I2RIe/VTRHMDWFVjJZ8/+BSliYhm0jbbzWLO1ErMGdpqlqyS4oEOayJkSvKTXGc4HMKhXQCETEIu1jmcM7qmCvJEIlKMzOE204sdyjcB3cuM9KgkLNo3w9wqugZA/zoDVtkZ0hDAUTLa1xkQbMZCxEBoNNRs0SAFYifI3kXq+TUbAUgi4gRFIpH8jKp+toE3QHJ3YLIbGElrggbJAcAVolBJk0bTGetbAdPN0IfRUWx2B7TIDAN0EbFGZl1B2g3YHgUOB6WbW+NZi73pQFUArTeDDghtmnYLamADt+vCersGB1Sf2tzArcdwVAXumD8oDtR4+HFD8JijDY0vUGvXIFZMB9zbtfD20bOCjuMONudoC4aaA6tnf6BqqTGWmMFqP/XAus87TAXx2gixLZ++IMOawqyjB8KpZ+F6AfMwCFapK2edfeNaTpAEXsk9WjRmfTx+y3VVyx2AaSc5/5RU5uFaUP3aK5o0Z682z7xJHPLMNdnHDpsYxD5MTQafyExDqVN4Q+ZHY6iaF8TbMAsAK2fjZ9VW9jgbdjylXyQVZ4nn+ohRm5OK1ELNPxH47YCbng7rIogbar/ukRU9hc2RL2l6CZLK7e4mGDc7wFwUU5XxH/D6tL50Lur7zhs7tQNud5I+t1rKKRRVr3Rn2pXDZvURNjylBGY7MVKNLoKpeQR4BpN0DUNq0vVTIkjW7Qs7DO5i0TqKXwSLZnfYyOhLyfMAvmzR1Jzvnz4SW4YFy7sBkjA9SDdUC93nbjRxWyovBm3z9b/0GRri2rN9V9QkVBRMt5Mvnie07Qt7nH7TbwJhxF0DEZuMPBdx2LfpxIkgVsi2M8Aeygcm9R9aAlPsUTsT9bYN239mGjUTe/YEjdN/5SbvzRQFe3jemZa7iYEtUfznrzravb78li82HRaZyWEtQcD0Kf4f5X/6ZldJ6DOOSZNOjwb3w4wv1pGbp5fTqWjSmuNkPsCINVxURE+D3td77dKIEt/3k0huCeAOrYrTGttt0zMIJU5+GQIeOFGURbX6TqeyXAYcyFSWqLN6uk1Z8zxKRmFhaM/sUJaeBckobT/03kfnhq6GgJFhuUk0gncfmnmQzRAwMqqrQnuOspqkGURG+XFddu+6hrhUkJdByGg4ekxw+UQ6/Y5CgIxEzI+GgE18zcokcr5sa+MlQS3RWEOTUafTXiC8GOTUVNfD4fpzpLaEzCHJaOJCX9migYySw8AHMH6ZjnoyWo62eWAzFh1STkZ7YetIvFsxmf0Mle314MZRS6aYpYPKH4oRqySzO8x0t6Z3E0+OQjJbnRdpvcIxhZOjjkzlz3mds/DcfFVk4nrmq5w3gt4DRWRCf/7LTr1ebFUNmXyWptZ32O5BPZlqucvc3UYtmdMMenIEydO98xJv8kKmmKUDdBT+tfMMZM6i/YuU7JpPuCC8nZ3bd3WSVPPWb6HGvqoXun66Dy8/ZnIBDidrdufikH/ILfQTYSemGfwbVFasWLFixYoVK1asWDEr/gPbLoH8MB6mqAAAAABJRU5ErkJggg==",
    isInProgress: false,
  },
  {
    title: "Coming soon...",
    description: "現在Notionライクなアプリを開発しています",
    link: "",
    image: "",
    isInProgress: true,
  },
];

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["About Me", "Skills", "Productions"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-2xl font-bold text-indigo-600 hover:bg-blue-50 rounded-md p-2"
              >
                Koko&apos;s Portfolio
              </button>
            </div>

            <div className="hidden sm:flex space-x-6 items-center">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(" ", "")}`}
                  className="text-gray-900 font-medium hover:text-indigo-600 transition"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-900 hover:bg-blue-50 rounded-md focus:outline-none"
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
          className={`sm:hidden transform transition-all duration-300 origin-top ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-10">
        <Section id="aboutme" title="About Me">
          2001年2月7日に石川のさきっぽの珠洲で産声を上げた。空と音楽、それと美味しい食べ物が好き。
        </Section>

        <Section id="skills" title="Skills">
          Reactを得意としていますが、最近Linuc取得のための学習をしてDockerも少し触れるようになりました。
        </Section>

        <Section id="productions" title="Productions">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productions.map((production, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105"
              >
                {production.image && (
                  <img
                    src={production.image}
                    alt={production.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h3 className="mt-4 text-xl font-semibold">{production.title}</h3>
                <p className="text-gray-600 mt-2">{production.description}</p>
                {!production.isInProgress && (
                  <a
                    href={production.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                  >
                    詳細を見る →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;
