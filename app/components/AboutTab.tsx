import { MouseEventHandler } from "react";

interface AboutTabProps {
  tabId: string
  label: string
  currentTab: string
  onClick: (arg0: string) => void
}

const STYLE_ACTIVE = 'flex-1 py-2 text-center bg-slate-400 hover:bg-slate-500';
const STYLE_INACTIVE = 'flex-1 py-2 text-center bg-slate-200 hover:bg-slate-500';

export default function AboutTab(props: AboutTabProps) {

  return (
    <span className={props.tabId == props.currentTab ? STYLE_ACTIVE : STYLE_INACTIVE} onClick={() => props.onClick(props.tabId)}>
      <p>{props.label}</p>
    </span>
  );
}