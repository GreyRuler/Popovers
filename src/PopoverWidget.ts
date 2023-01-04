import { Popover } from './ts/types/Popover';

export default class PopoverWidget {
	private popovers: Popover[] = [];

	showPopover(title: string, content: string, element: HTMLElement) {
		const popoverElement = document.createElement('div');
		const popoverContent = document.createElement('div');
		const popoverTitle = document.createElement('div');

		popoverElement.insertAdjacentElement('afterbegin', popoverContent);
		popoverElement.insertAdjacentElement('afterbegin', popoverTitle);

		popoverElement.classList.add('popover-custom');
		popoverTitle.classList.add('popover-title');
		popoverContent.classList.add('popover-content');

		popoverTitle.textContent = title;
		popoverContent.textContent = content;

		const id = performance.now();

		this.popovers.push({
			id,
			element: popoverElement
		});

		document.body.insertAdjacentElement('beforeend', popoverElement);

		const { left, top } = element.getBoundingClientRect();

		popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
		popoverElement.style.top = `${top - (popoverElement.offsetHeight + 10)}px`;

		return id;
	}

	removePopover(id: number) {
		const popover = this.popovers.find((p) => p.id === id);

		popover?.element.remove();

		this.popovers = this.popovers.filter((p) => p.id !== id);
	}
}
