import { useEffect } from "react";
import { socket } from "../../services";
import { useAuthStore, useUserStore } from "../../store";

export const useBalanceSocket = () => {
  const token = useAuthStore((state) => state.token);
  const updateStoreBalance = useUserStore((state) => state.updateBalance);

  useEffect(() => {
    socket.connect();

    function onConnect() {
      socket.emit("vinculate", token);
    }

    function updateBalance(data: { newBalance: number }) {
      updateStoreBalance(data.newBalance);
    }

    socket.on("connect", onConnect);
    socket.on("updateBalance", updateBalance);

    return () => {
      socket.off("connect", onConnect);
      socket.off("updateBalance", updateBalance);
      socket.disconnect();
    };
  }, [token, updateStoreBalance]);
};
