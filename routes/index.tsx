import { useSignal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    return new Response("", {
      status: 303,
      headers: { Location: "/test" },
    });
},
};

export default function Home() {
  return (
    <div>
      <form method="POST">
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
