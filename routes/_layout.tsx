import { FreshContext } from "$fresh/server.ts";

export default async function defineLayout(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  const pathParts = url.pathname.split("/");
  const path = url.pathname.length > 1 ? pathParts[1] : "";
  const tabEnabledPath = path !== "" && path !== "accessToken";
  
  function camelToTitleCase(str: string) {
    if (str === "") return "Home page";
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div class="m-4">
      <div class="navbar rounded p-4 mx-auto bg-gray-700">
        <div class="flex-1">
          <a href="/" class="cursor-pointer flex items-center text-neutral-300">
            <div class="ml-4">
              home icon
            </div>
            <div class="ml-2">
              &gt;
            </div>
            
          </a>
          <div class="flex ml-2 text-neutral-300">{camelToTitleCase(path)}</div>
        </div>
        <div class="flex-none">
          {/* {deployUser ? <AvatarMenu deployUser={deployUser} /> : <UnknownAvatarMenu />} */}
        </div>
      </div>

      <div class="px-4 py-4 mx-auto flex flex-col h-screen">
        <div class="flex-grow">
          <div class="mx-auto flex flex-col flex-grow h-full items-center justify-center">
            {tabEnabledPath && "I'm enabled!"} 
            <ctx.Component />
          </div>
        </div>
      </div>
    </div>
  );
}
