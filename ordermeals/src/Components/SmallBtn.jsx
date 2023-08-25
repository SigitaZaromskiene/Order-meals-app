function SmallBtn({ text, action }) {
  return (
    <button className="btn-small" onClick={action}>
      {text}
    </button>
  );
}

export default SmallBtn;
