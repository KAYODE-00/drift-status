import StatusCard from "@/components/status-card"

export default function Home() {
  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-semibold">
        System Status
      </h2>

      <StatusCard service="API" status="Operational" />
      <StatusCard service="Database" status="Operational" />
      <StatusCard service="Auth" status="Down" />

    </div>
  )
}