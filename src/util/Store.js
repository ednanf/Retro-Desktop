import { create } from 'zustand';

export const useStore = create(set => ({
  // Window Management
  globalZIndex: 0,
  increaseGlobalZIndex: () =>
    set(state => ({ globalZIndex: state.globalZIndex + 1 })),

  // Windows
  myComputerVisible: false,
  showMyComputer: () => {
    set({ myComputerVisible: true });
  },
  hideMyComputer: () => {
    set({ myComputerVisible: false });
  },

  ieVisible: false,
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
