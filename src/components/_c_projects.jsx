const ProjectsContainer = () => {
  const projects = [
    {
      name: "SHBAK-API",
      done: false,
      url: "https://shbak-api.vercel.app/",
      color: "#6f2930",
      backgroundColor: "#f443362b",
      describtion: "SHBAK-API is an api to reserve cinema ticket.",
    },
    {
      name: "PLAYGROUND",
      done: true,
      url: "https://playground-2e7h.onrender.com/",
      color: "#e5532d",
      backgroundColor: "#ffc10730",
      describtion:
        "Playground contains some information I learned and applied.",
    },
    {
      name: "CHATAPP",
      done: true,
      url: "https://chatapp-izc9.onrender.com/",
      color: "#3f51b5",
      backgroundColor: "#3f51b53b",
      describtion: "Simply you can connect with others.",
    },
    {
      name: "EFFECT",
      done: true,
      url: "https://effect-kin5.onrender.com/",
      color: "#2dbab3",
      backgroundColor: "#2dbab330",
      describtion: "Efficient time management helps us make the most of our limited hours and balance work, leisure, and self-improvement.",
    },
  ];
  return (
    <div className=" hidden h-90vh  m-2 mt-0 p-3 d-flex flex-wrap justify-content-center  align-items-center">
      {projects.map((p, i) => (
        <div
          class="card shadow m-2 hidden"
          key={i}
          style={{
            width: "18rem",
            backgroundColor: p.backgroundColor,
            height: 300,
          }}
        >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center text-light">{p.name}</h5>
            <p class="card-text text-gray h-25">{p.describtion}</p>
            <a
              href={p.url}
              class="btn btn-primary w-75 m-auto"
              style={{ backgroundColor: p.color, borderColor: p.color }}
            >
              Visit
            </a>
          </div>
          <div
            class="card-footer text-light text-center "
            style={{ borderColor: p.color }}
          >
            {p.name} IS {p.done ? "DONE" : "IN PROGRESS"}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectsContainer;
