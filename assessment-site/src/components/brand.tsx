type BrandProps = {
  href?: string;
};

export function Brand({ href = "https://genxaipro.com" }: BrandProps) {
  return (
    <a className="genx-brand" href={href} aria-label="GenX AI Pro home">
      <span className="genx-brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5c.8 5.8 3.7 8.7 9.5 9.5-5.8.8-8.7 3.7-9.5 9.5-.8-5.8-3.7-8.7-9.5-9.5C8.3 11.2 11.2 8.3 12 2.5Z" fill="currentColor" />
        </svg>
      </span>
      <span>GEN<span className="genx-brand-x">X</span> AI PRO</span>
    </a>
  );
}
