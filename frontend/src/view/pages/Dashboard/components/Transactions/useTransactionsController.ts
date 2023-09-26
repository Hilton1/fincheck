import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsControler() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isLoading: false
  };
}