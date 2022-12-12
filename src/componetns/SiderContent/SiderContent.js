import "./SiderContent.scss";
import React from "react";
import { Button, List } from "antd";
import { useSetRecoilState } from "recoil";
import { currPageAtom } from "../../atoms/AppAtoms";
import { BarChartOutlined } from "@ant-design/icons";
import {
  AiOutlineShoppingCart,
  AiOutlineFileProtect,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineFieldTime,
  AiOutlineCoffee,
} from "react-icons/ai";

const pagesData = [
  { title: "Tasks", icon: <AiOutlineFileProtect /> },
  { title: "Payments", icon: <AiOutlineShoppingCart /> },
  { title: "Suppliers", icon: <AiOutlineUser /> },
  { title: "Employees", icon: <AiOutlineIdcard /> },
  { title: "Time Report", icon: <AiOutlineFieldTime /> },
  { title: "Cibuse- Sodexo", icon: <AiOutlineCoffee /> },
  { title: "Reports", icon: <BarChartOutlined /> },
];

const SiderContent = () => {
  const setCurrPage = useSetRecoilState(currPageAtom);

  return (
    <List
      itemLayout="horizontal"
      dataSource={pagesData}
      renderItem={(item) => (
        <List.Item dot>
          <Button
            onClick={() => setCurrPage(item.title.toLowerCase())}
            icon={item.icon}
          >
            {item.title}
          </Button>
        </List.Item>
      )}
    />
  );
};

export default SiderContent;

// export default function SiderContent() {
//     return (
//     <nav className="SiderContent">
//     <ul>
//         <li className="active">
//         <a href="/Tasks"> Tasks</a>
//         </li>
//         <li>
//             <a href="/Payments"> Payments</a>
//         </li>
//         <li>
//             <a href="/Suppliers"> Suppliers</a>
//         </li>
//         <li>
//         <a href="/Employees"> Employees</a>
//         </li>
//         <li>
//         <a href="/Time Report"> Time Report</a>
//         </li>
//         <li>
//         <a href="/Cibuse - Sodexo"> Cibuse - Sodexo</a>
//         </li>
//         <li>
//         <a href="/Reports"> Repors</a>
//         </li>
//     </ul>
//     </nav>
//     )
// }
