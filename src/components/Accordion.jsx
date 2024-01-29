import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}
