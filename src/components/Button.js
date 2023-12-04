export default function Button({ name, operator, styles, onClick, children }) {
  const combinedStyles = styles.join(" ");

  return (
    <button
      name={name}
      operator={operator ? "true" : "false"}
      className={combinedStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
