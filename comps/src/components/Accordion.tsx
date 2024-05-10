import { ReactElement, ReactNode, useState } from "react"
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

interface AccordionProps {
    items: { id: number, label: string, content: string }[]
}

function Accordion(props: AccordionProps): ReactElement {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    function handleAccordionClick(_index: number): void {
        if (expandedIndex === _index) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(_index)
        }
    }

    const renderedItems: ReactNode = props.items.map((item, index) => {
        const isExpanded: boolean = index === expandedIndex
        const accordionIcon: ReactElement = (<span className="text-xl">{isExpanded ? <FaAngleDown /> : <FaAngleRight />}</span>)

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-red-50 cursor-pointer" onClick={() => { handleAccordionClick(index) }}>
                    {item.label}
                    {accordionIcon}
                </div>
                {/* this is called conditional rendering */}
                {
                    isExpanded
                    &&
                    <div className="flex p-4">{item.content}</div>
                }
            </div>
        )
    })
    return <>{renderedItems}</>
}

export default Accordion