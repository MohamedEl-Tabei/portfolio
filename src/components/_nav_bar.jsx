const NavBar = () => {
  return (
    <nav
      class="navbar  border-bottom border-dark shadow sticky-top "
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-text" href="#MohamedEltabei">
          Mohamed Eltabei
        </a>
        <ul class="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#Projects">
              <small>Projects</small>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
