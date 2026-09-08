export default function Input({ label, id, onChange, children, ...props }) {
    return (
      <fieldset className="fieldset">
        <label htmlFor={id}>{label}</label>
        <input id={id} onChange={onChange} {...props} />
        {children}
      </fieldset>
    );
  }
  