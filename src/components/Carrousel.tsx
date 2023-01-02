import {
  Component,
  ElementType,
  ReactComponentElement,
  ReactElement,
  useCallback,
  useState
} from "react";
import { animated, useTransition } from "react-spring";

export default function Carrousel(props: any) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ container: ref });
  const [active, setActive] = useState(0);

  //console.log(typeof props.children);
  const transitions = useTransition([active], {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
    item: (item: any) => item
  });
  //const a = animated(test);
  // console.log(data);
  const prev = useCallback((): any => {
    if (active !== 0) setActive(active - 1);
    else setActive(2);
  }, [active]);
  const next = useCallback((): any => {
    if (active !== 2) setActive(active + 1);
    else setActive(0);
  }, [active]);

  return (
    <>
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg> */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          position: "relative"
        }}
      >
        {transitions((style, item) => (
          <animated.div style={style}>{props.children[item]}</animated.div>
        ))}
        <div
          className="buttonCarousel noselect"
          style={{ position: "absolute", left: 0 }}
          onClick={prev}
        >
          &lt;
        </div>
        <div
          className="buttonCarousel noselect"
          style={{ position: "absolute", right: 0 }}
          onClick={next}
        >
          &gt;
        </div>
      </div>
    </>
  );
}
