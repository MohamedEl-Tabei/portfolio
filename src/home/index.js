import Components from "../components";

function App() {
  return (
    <div className="bg-dark h-100vh">
      <div id="iam" />
      <Components.NavBar />
      <Components.IamContainer />
    </div>
  );
}

export default App;
