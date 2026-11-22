import { useId } from "react";

type Props = {
  label: string;
  unit?: string;
  hint?: string;
  text: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
};

/** Satu baris kartu: label di kiri, isian di kanan, garis titik-titik di antaranya. */
export function Field({ label, unit, hint, text, onChange, onBlur }: Props) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {hint ? <small>{hint}</small> : null}
      </label>
      <span className="field__lead" aria-hidden="true" />
      <input
        id={id}
        className="field__input"
        inputMode="decimal"
        autoComplete="off"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
      {unit ? <span className="field__unit">{unit}</span> : null}
    </div>
  );
}
