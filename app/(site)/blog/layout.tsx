import { draftMode } from "next/headers";
import { SanityLive } from "@/sanity/live";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { VisualEditingControls } from "@/components/visual-editing";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <>
      {children}
      <SanityLive refreshOnReconnect={false} />
      {isEnabled ? (
        <>
          <VisualEditingControls />
          <DisableDraftMode />
        </>
      ) : null}
    </>
  );
}
