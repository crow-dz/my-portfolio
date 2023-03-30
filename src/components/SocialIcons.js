const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/crow-dz"  target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Oualid Senina' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/oualid-senina-24253b187/"  target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Oualid Senina' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="/"  target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Oualid Senina' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="/"  target="_blank" rel="noreferrer">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Oualid Senina' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
