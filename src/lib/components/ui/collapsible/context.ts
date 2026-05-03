import { getContext, setContext } from 'svelte';

export type CollapsibleContext = {
  open: () => boolean;
  setOpen: (value: boolean) => void;
  contentId: string;
};

const KEY = Symbol('collapsible');

export function setCollapsibleContext(ctx: CollapsibleContext): CollapsibleContext {
  return setContext(KEY, ctx);
}

export function getCollapsibleContext(): CollapsibleContext {
  const ctx = getContext<CollapsibleContext | undefined>(KEY);
  if (!ctx) {
    throw new Error(
      'Collapsible.Trigger and Collapsible.Content must be inside a Collapsible.Root'
    );
  }
  return ctx;
}
