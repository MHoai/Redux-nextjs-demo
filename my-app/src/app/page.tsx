"use client";

import { useAppSelector } from "@/redux/store";
import LogIn from "./log-in";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  return (
    <main>
      <LogIn />
      <h1> Username: {username}</h1>
      {isModerator && <h1> This user is Moderator</h1>}
    </main>
  );
}
