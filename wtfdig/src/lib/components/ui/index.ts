
import AccordionRoot from './accordion-root.svelte';
import AccordionItem from './accordion-item.svelte';
import Modal from './modal.svelte';
import Popover from './popover.svelte';
import SegmentRoot from './segment-root.svelte';
import SegmentItem from './segment-item.svelte';
import Switch from './switch.svelte';
import TabsRoot from './tabs-root.svelte';
import TabsControl from './tabs-control.svelte';
import TabsContent from './tabs-content.svelte';
import ToastProvider from './toast-provider.svelte';
import Tooltip from './tooltip.svelte';
import * as NavigationMenu from './navigation-menu';

export const Accordion = Object.assign(AccordionRoot, { Item: AccordionItem });
export const Segment = Object.assign(SegmentRoot, { Item: SegmentItem });
export const Tabs = Object.assign(TabsRoot, { Control: TabsControl, Content: TabsContent });

export { Modal, Popover, Switch, ToastProvider, Tooltip };
