import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import Drawer from '$lib/Drawer/Drawer.svelte';

describe('Drawer.svelte', () => {
	it('Renders with props', async () => {
		const { getByTestId } = render(Drawer, {
			props: { fixed: true, visible: writable(false) }
		});
		expect(getByTestId('drawer')).toBeTruthy();
	});

	it('Renders without props', async () => {
		const { getByTestId } = render(Drawer);
		expect(getByTestId('drawer')).toBeTruthy();
	});
});
