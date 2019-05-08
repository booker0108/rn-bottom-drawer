declare module "rn-bottom-drawer" {
  interface Props extends ViewProps {
    containerHeight: number;
    offset?: number;
    startUp?: boolean;
    downDisplay?: number;
    backgroundColor?: string;
    roundedEdges?: boolean;
    shadow?: boolean;
    onExpanded?: () => void;
    onCollapsed?: () => void;
  }

  export default class BottomDrawer extends React.Component<> {
    openDrawer: () => void;
    closeDrawer: () => void;
  }
}
