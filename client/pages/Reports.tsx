import Link from 'next/link';
import { ReportLinks } from '../assets/ReportLinks';
import { TbReportMedical, TbTable } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { GiHistogram } from "react-icons/gi";
import { AiOutlinePieChart } from "react-icons/ai";


const Page = () => {
    return (
        <div className="flex">
            <div className='flex'>
                <div className="w-[200px] h-screen sticky top-[65px] border-r-2 bg-slate-50">
                    <ul className="mt-4">
                        {
                            ReportLinks.map(e => (
                                <li key={e.id} className="border-b-2 py-2 pl-3">
                                    <Link href="/reports/sales">
                                        <div className="text-blue-500 hover:text-blue-700 flex items-center gap-2">
                                            <TbReportMedical />
                                            <div>{e.name}</div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-[200px] h-screen sticky top-[65px] border-r-2 bg-slate-50">
                    <ul className="mt-4">
                        <li className="border-b-2 py-2 pl-3">
                            <Link href="/reports/sales">
                                <div className='flex items-center text-blue-500 hover:text-blue-700 gap-2'>
                                    <TbTable />
                                    <div>Tables</div>
                                </div>
                            </Link>
                        </li>
                        <li className="border-b-2 py-2 pl-3">
                            <Link href="/reports/sales">
                                <div className='flex items-center text-blue-500 hover:text-blue-700 gap-2'>
                                    <BsGraphUp />
                                    <div>Graphs</div>
                                </div>
                            </Link>
                        </li>
                        <li className="border-b-2 py-2 pl-3">
                            <Link href="/reports/sales">
                                <div className='flex items-center text-blue-500 hover:text-blue-700 gap-2'>
                                    <GiHistogram />
                                    <div>Histogram</div>
                                </div>
                            </Link>
                        </li>
                        <li className="border-b-2 py-2 pl-3">
                            <Link href="/reports/sales">
                                <div className='flex items-center text-blue-500 hover:text-blue-700 gap-2'>
                                    <AiOutlinePieChart />
                                    <div>Pie Chart</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-3/4 bg-white p-8">
                <h1 className="text-3xl font-bold mb-8">Sales Report</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis sed purus aliquet molestie. Nullam hendrerit sagittis eros, ac congue tellus fringilla sed. Nam dictum euismod arcu quis facilisis. Duis ac tellus eget felis tempor aliquet. Vivamus ac feugiat felis. Praesent non odio non lectus viverra pharetra nec vitae nisl. Fusce elementum libero vel metus tincidunt euismod.</p>
            </div>
        </div>
    );
};

export default Page;
