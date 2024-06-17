import { MouseEventHandler } from "react";

interface AboutTabProps {
  tabId: number
  label: string
  currentTab: number
  onClick: (arg0: number) => void
}

const STYLE_ACTIVE = 'select-none rounded-2xl flex-1 py-2 text-center bg-[#D82D6E]';
const STYLE_INACTIVE = 'select-none flex-1 py-2 text-center bg-[#00000000] hover:bg-[#D82D6E]';

export default function AboutTab(props: AboutTabProps) {

  return (
    <span className={props.tabId == props.currentTab ? STYLE_ACTIVE : STYLE_INACTIVE} onClick={() => props.onClick(props.tabId)}
      style={{ transitionProperty: 'background-color, border-radius', transitionDuration: '150ms' }}>
      <p>{props.label}</p>
    </span>
  );
}