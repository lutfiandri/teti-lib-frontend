export function RenderIf({ when, children }) {
  if (!when) return <></>;
  return <>{children}</>;
}
