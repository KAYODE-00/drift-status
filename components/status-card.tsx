type StatusCardProps = {
  service: string
  status: string
}

export default function StatusCard({
  service,
  status,
}: StatusCardProps) {

  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-100 text-green-700"
      case "down":
        return "bg-red-100 text-red-700"
      case "degraded":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="
  border rounded-lg p-4 flex justify-between items-center
  bg-[#F6F3ED]
  hover:shadow-md hover:scale-[1.09]
  transition
">

      {/* Service name */}
      <p className="font-medium text-[#313851]">
        {service}
      </p>

      {/* Status badge */}
      <span className={`
        text-xs 
        px-3 
        py-1 
        rounded-full 
        font-medium
        ${getStatusStyle()}
      `}>
        {status}
      </span>

    </div>
  )
}