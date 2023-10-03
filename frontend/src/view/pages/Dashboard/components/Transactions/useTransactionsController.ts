import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsControler() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
  };
}
