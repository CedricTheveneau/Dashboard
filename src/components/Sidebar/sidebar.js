export const sidebarExpand = () => {
  const sidebarToggle = document.querySelector(".closeBtn");
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("closed");
};

export const navBtnClicked = () => {
  const navBtns = document.querySelectorAll(".navBtn");
  navBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", () => {
      navBtns.forEach((btn) => {
        btn.classList.remove("clicked");
      });
      navBtn.classList.add("clicked");
    });
  });
};
