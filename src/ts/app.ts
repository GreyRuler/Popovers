import PopoverWidget from '../PopoverWidget';

const container = document.querySelector('#container') as HTMLElement;
let flag = true;
let popoverID = 0;
const popoverWidget = new PopoverWidget();
const buttonToggle: HTMLButtonElement | null = container.querySelector(
	'#toggle-popover'
);
buttonToggle?.addEventListener('click', () => {
	if (flag) {
		popoverID = popoverWidget.showPopover(
			'title',
			'content',
			buttonToggle
		);
	} else {
		popoverWidget.removePopover(popoverID);
	}
	flag = !flag;
});
