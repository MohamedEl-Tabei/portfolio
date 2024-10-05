import Components from ".";

const IamContainer = () => {
  return (
    <div className="m-2 bg-dark d-flex justify-content-end text-light h-90vh relative">
      <div className=" w-100 h-100 absolute iam">
        <h1 className="text-center w-50">
          <small className="text-blue">I'm</small> Mohamed Eltabei
        </h1>
        <h6 className="text-center w-50 text-gray">Jonior Web Developer</h6>
        <div className="w-50   d-flex justify-content-center mt-3">
          <div className="w-75 text-gray border-top  p-2 border-blue">
            <small style={{ textAlign: "justify" }}>
              As a full-stack web developer, I strive to write clean, efficient
              code. For me, programming is more than just problem-solving; it
              gives me the power to create virtual worlds shaped by ideas and
              imagination.
            </small>
          </div>
        </div>
      </div>
      <Components.Photo />
    </div>
  );
};
export default IamContainer;
