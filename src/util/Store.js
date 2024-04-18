import { create } from 'zustand';

export const useStore = create((set) => ({
	resumeVisible: false,
	showResume: () => {
		set({ resumeVisible: true });
	},
	hideResume: () => {
		set({ resumeVisible: false });
	},
}));
