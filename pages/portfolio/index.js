import { useEffect, useState } from "react";

const IndexPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-white" style={{ height: 4000 }}> {/* just added to make scrollbar available */}
      <div style={{ position: "fixed", top: 0 }}>
        {scrollY > 100
          ? "Scrolled more than 100px"
          : "Still somewhere near the top!"}
      </div>
    </div>
  );
};

export default IndexPage;