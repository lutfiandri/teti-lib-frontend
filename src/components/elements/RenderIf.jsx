export default function RenderIf({ when, children }) {
  if (when) return <>{children}</>;
  return <></>;
}
