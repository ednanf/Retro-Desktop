import { create } from 'zustand';

export const useStore = create((set) => ({
	myComputerVisible: false,
	showMyComputer: () => {
		set({ myComputerVisible: true });
	},
	hideMyComputer: () => {
		set({ myComputerVisible: false });
	},

	ieVisible: true,
	showIE: () => {
		set({ ieVisible: true });
	},
	hideIE: () => {
		set({ ieVisible: false });
	},

	resumeVisible: false,
	showResume: () => {
		set({ resumeVisible: true });
	},
	hideResume: () => {
		set({ resumeVisible: false });
	},

	portfolioVisible: false,
	showPortfolio: () => {
		set({ portfolioVisible: true });
	},
	hidePorfolio: () => {
		set({ portfolioVisible: false });
	},
}));
