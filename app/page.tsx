"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import StatusCard from "@/components/status-card"
import { motion, AnimatePresence } from "framer-motion"

type Service = {
  id: string
  name: string
  status: string
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServices()
  }, [])

  async function getServices() {
    setLoading(true)

    const { data, error } = await supabase
      .from("services")
      .select("*")

    console.log("DATA:", data)
    console.log("ERROR:", error)

    setServices(data ?? [])
    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-6">

<h2 className="text-3xl font-semibold text-[#313851]">
  System Status
</h2>

      {/* LOADING STATE */}
      {loading && (
        <p className="text-gray-500">Loading services...</p>
      )}

      {/* EMPTY STATE */}
      {!loading && services.length === 0 && (
        <p className="text-gray-500">
          No services found in database
        </p>
      )}

      {/* DATA LIST */}
      <AnimatePresence>
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <StatusCard
              service={service.name}
              status={service.status}
            />
          </motion.div>
        ))}
      </AnimatePresence>

    </div>
  )
}