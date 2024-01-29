import { useState } from "react";

export default function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);
  function handleToggle() {
    setOpen((open) => !open);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>

      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
