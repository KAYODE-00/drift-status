type StatusCardProps = {
  service: string
  status: string
}

export default function StatusCard({
  service,
  status,
}: StatusCardProps) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center bg-white hover:shadow-sm transition">

      <p>{service}</p>

      <span className="text-sm px-2 py-1 bg-[#C2CBD3] rounded">
        {status}
      </span>

    </div>
  )
}