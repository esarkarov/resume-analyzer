import { useEffect } from "react";
import { usePuterStore } from "../lib/puter";

export const usePuterInitialization = () => {
  const { init } = usePuterStore();

  useEffect(() => {
    init();
  }, [init]);
};
