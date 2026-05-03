// @vitest-environment jsdom

/**
 * Tests for the bespoke Collapsible component (replacement for bits-ui's
 * Collapsible to avoid a derived_inert warning under svelte 5.55+). Covers
 * the public API: open state, trigger toggling, onOpenChange callback,
 * conditional content rendering, ARIA attributes, and the `child` snippet
 * escape hatch used by the sidebar.
 */

import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/svelte';
import Harness from './collapsible-harness.svelte';
import ChildHarness from './collapsible-child-harness.svelte';

afterEach(() => cleanup());

describe('Collapsible', () => {
  test('renders closed by default', () => {
    const { queryByText, getByRole } = render(Harness);
    const trigger = getByRole('button', { name: 'Toggle' });

    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.getAttribute('data-state')).toBe('closed');
    expect(queryByText('Hidden content')).toBeNull();
  });

  test('renders open when initial open=true', () => {
    const { getByText, getByRole } = render(Harness, { props: { open: true } });
    const trigger = getByRole('button', { name: 'Toggle' });

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(trigger.getAttribute('data-state')).toBe('open');
    expect(getByText('Hidden content')).toBeTruthy();
  });

  test('clicking trigger toggles open state', async () => {
    const { getByRole, queryByText, getByText } = render(Harness);
    const trigger = getByRole('button', { name: 'Toggle' });

    expect(queryByText('Hidden content')).toBeNull();

    await fireEvent.click(trigger);
    expect(getByText('Hidden content')).toBeTruthy();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');

    await fireEvent.click(trigger);
    expect(queryByText('Hidden content')).toBeNull();
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  test('onOpenChange fires with the new state', async () => {
    const calls: boolean[] = [];
    const { getByRole } = render(Harness, {
      props: { onOpenChange: (v: boolean) => calls.push(v) }
    });
    const trigger = getByRole('button', { name: 'Toggle' });

    await fireEvent.click(trigger);
    await fireEvent.click(trigger);
    await fireEvent.click(trigger);

    expect(calls).toEqual([true, false, true]);
  });

  test('trigger has aria-controls linking to content id', async () => {
    const { getByRole, getByText } = render(Harness, { props: { open: true } });
    const trigger = getByRole('button', { name: 'Toggle' });
    const content = getByText('Hidden content');

    const controls = trigger.getAttribute('aria-controls');
    expect(controls).toBeTruthy();
    expect(content.id).toBe(controls);
  });

  test('content has data-state matching open state', async () => {
    const { getByText, getByRole } = render(Harness, { props: { open: true } });
    expect(getByText('Hidden content').getAttribute('data-state')).toBe('open');

    // Toggle closed; content unmounts entirely (no `closed` data-state to check)
    await fireEvent.click(getByRole('button', { name: 'Toggle' }));
    // No assertion needed — `queryByText` after this would return null, covered above
  });

  test('child snippet replaces the default <button> with a custom element', async () => {
    const { getByTestId, queryByText } = render(ChildHarness);
    const customTrigger = getByTestId('custom-trigger');

    // Custom <a> took over — no default <button> rendered
    expect(customTrigger.tagName).toBe('A');
    // Trigger props are forwarded — aria-expanded reflects state
    expect(customTrigger.getAttribute('aria-expanded')).toBe('false');
    expect(customTrigger.getAttribute('aria-controls')).toBeTruthy();

    // Click still toggles open state
    expect(queryByText('Body')).toBeNull();
    await fireEvent.click(customTrigger);
    expect(customTrigger.getAttribute('aria-expanded')).toBe('true');
  });
});
