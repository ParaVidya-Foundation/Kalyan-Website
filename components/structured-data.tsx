import type { Thing, WithContext } from "schema-dts"

export function StructuredData({ data }: { data: WithContext<Thing> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
