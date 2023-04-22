import { TbTable } from "react-Icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { GiHistogram } from "react-icons/gi";
import { AiOutlinePieChart } from "react-icons/ai";

interface ChartLink {
    name: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    url: string;
}

const ChartLinks: ChartLink[] = [
    {
        name: "Table",
        Icon: TbTable,
        url: "/Table",
    },
    {
        name: "Graphs",
        Icon: BsGraphUp,
        url: "/Graphs",
    },
    {
        name: "Histogram",
        Icon: GiHistogram,
        url: "/Histogram",
    },
    {
        name: "Pie Chart",
        Icon: AiOutlinePieChart,
        url: "/PieChart",
    },
];

export default ChartLinks;