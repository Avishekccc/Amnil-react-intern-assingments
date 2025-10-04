import {
  createContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./tabs.module.css";
import { useTabContext } from "./useTabContext";

type ContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  registerTab: (value: string, el: HTMLButtonElement | null) => void;
  tabRefs: {};
  underlineStyle: { left: number; width: number };
};

type TabsPropsType = {
  children: React.ReactNode;
  defaultValue: string;
};

export const TabContext = createContext<ContextType | undefined>(undefined);

// main tab container

export const Tabs = ({ children, defaultValue }: TabsPropsType) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const registerTab = (id: string, el: HTMLButtonElement | null) => {
    tabRefs.current[id] = el;
  };

  useEffect(() => {
    const currentNode = tabRefs.current[activeTab];
    if (currentNode) {
      setUnderlineStyle({
        left: currentNode.offsetLeft,
        width: currentNode.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <TabContext.Provider
      value={{ activeTab, setActiveTab, tabRefs, registerTab, underlineStyle }}
    >
      <div className={styles.tabcontainer}>{children}</div>
    </TabContext.Provider>
  );
};

// TabList Container

export const TabList = ({ children }: { children: ReactNode }) => {
  const { underlineStyle } = useTabContext();
  return (
    <div className={styles.tabheading}>
      {children}
      <div
        className={styles.underline}
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      ></div>
    </div>
  );
};

// single Tab component

type TabPropsType = {
  value: string;
  children: ReactNode;
};

export const Tab = ({ value, children }: TabPropsType) => {
  const { setActiveTab, registerTab } = useTabContext();

  return (
    <div>
      <button
        ref={(el) => registerTab(value, el)}
        onClick={() => setActiveTab(value)}
      >
        {children}
      </button>
    </div>
  );
};

// Pannel Tab container

export const TabPannels = ({ children }: { children: ReactNode }) => {
  return <div className={styles.tabcontentContainer}>{children}</div>;
};

// single Tab pannel

export const TabPannel = ({ value, children }: TabPropsType) => {
  const { activeTab } = useTabContext();
  return activeTab === value ? <>{children}</> : null;
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.TabPannels = TabPannels;
Tabs.TabPannel = TabPannel;




// ---------- Practice --------------

// const tabs = [
//   { id: "tab1", label: "Tab 1", content: <h1>Tab 1 Content</h1> },
//   { id: "tab2", label: "Tab 2", content: <h1>Tab 2 Content</h1> },
//   { id: "tab3", label: "Tab 3", content: <h1>Tab 3 Content</h1> },
//   { id: "tab4", label: "Tab list ans 4", content: <h1>Tab 4 Content</h1> },
// ];

// const Tabs = () => {
//   const [isActive, setIsActive] = useState("tab1");
//   const [underline, setUnderline] = useState({ left: 0, width: 0 });

//   // const tabRef = useRef< { [key: string]: HTMLButtonElement | null | undefined}>({})
//   const tabRef = useRef<Record<string, HTMLButtonElement | null>>({});
//   // console.log(tabRef.current["tab1"])
//   console.log(tabRef.current[isActive]);

//   useEffect(() => {
//     const currentNode = tabRef.current[isActive];
//     if (currentNode) {
//       setUnderline({
//         left: currentNode.offsetLeft,
//         width: currentNode.offsetWidth,
//       });
//     }
//   }, [isActive]);

//   console.log(underline);

//   return (
//     <div className={styles.tabcontainer}>
//       <div className={styles.tabheading}>
//         {tabs.map((tab) => {
//           return (
//             <button
//               ref={(el) => {
//                 tabRef.current[tab.id] = el;
//               }}
//               key={tab.id}
//               onClick={() => setIsActive(tab.id)}
//             >
//               {tab.label}
//             </button>
//           );
//         })}

//         <div
//           className={styles.underline}
//           style={{ left: underline.left, width: underline.width }}
//         ></div>
//       </div>

//       <div className={styles.tabcontentContainer}>
//         {tabs.find((tab) => tab.id === isActive)?.content}
//       </div>
//     </div>
//   );
// };

// export default Tabs;
