import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Buffer } from "buffer";
import { createFetcher } from "@/utils/services/fetcher";
import { useContext } from "react";
import UserContext from "@/contexts/userContext";

export const useRole = (role = "USER", redirectEndpointFallback = "/") => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const redirectIfNeeded = (user) => {
    if (user?.role !== role || !user)
      navigate(redirectEndpointFallback, { replace: true });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      redirectIfNeeded();
      return;
    }

    const payloadB64 = accessToken.split(".")[1];
    const payloadBuffer = Buffer.from(payloadB64, "base64");
    const payload = JSON.parse(payloadBuffer.toString("utf-8"));

    // check expiration
    const expDate = new Date(payload.exp * 1000);
    const now = new Date();

    if (expDate < now) {
      redirectIfNeeded();
    }

    // get user info
    if (user) {
      redirectIfNeeded(user);
      return;
    } else {
      (async function () {
        try {
          const fetcher = createFetcher();
          const res = await fetcher.get("/users/" + payload.id);
          const user = res.data.data.user;

          redirectIfNeeded(user);
          return;

          setUser({
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            borrowedBookIds: user.borrowedBookIds,
          });
        } catch (error) {
          // setUser(null);
          redirectIfNeeded();
          return;
        }
      })();
    }
  }, []);
};
