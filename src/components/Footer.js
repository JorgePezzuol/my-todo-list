import GitHubButton from "react-github-btn";
const Footer = () => {
  return (
    <div className="display-flex">
      <GitHubButton
        href="https://github.com/jorgepezzuol"
        aria-label="Follow @jorgepezzuol on GitHub"
      >
        Follow @jorgepezzuol
      </GitHubButton>
      <div>&nbsp;</div>
      <GitHubButton
        href="https://github.com/jorgepezzuol/my-todo-list"
        data-icon="octicon-star"
        aria-label="Star jorgepezzuol/my-todo-list on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  );
};

export default Footer;
