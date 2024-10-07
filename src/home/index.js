import Components from "../components";

function App() {
  const height = 65;
  const width = "100%";
  const animation = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      if (element.isIntersecting) element.target.classList.add("show");
      else element.target.classList.remove("show");
    });
  });
  const onScroll = () => {
    let hiddenContainers = document.querySelectorAll(".hidden");
    hiddenContainers.forEach((container) => {
      animation.observe(container);
    });
  };
  return (
    <div className="bg-dark h-100vh pb-1 p-0 overflow-auto" onScroll={onScroll}>
      <div id="MohamedEltabei" />
      <Components.NavBar />
      <Components.IamContainer />
      <div style={{ height, width }} id="Projects" />
      <Components.ProjectsContainer />
    </div>
  );
}

export default App;
