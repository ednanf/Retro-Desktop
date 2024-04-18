import { create } from 'zustand';

export const useStore = create((set) => ({
	resumeVisible: false,
	showResume: () => {
		set({ resumeVisible: true });
	},
	hideResume: () => {
		set({ resumeVisible: false });
	},

	// TODO: change to false after done with the window
	ieVisible: true,
	showIE: () => {
		set({ ieVisible: true });
	},
	hideIE: () => {
		set({ ieVisible: false });
	},
}));
