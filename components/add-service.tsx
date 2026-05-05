"use client"

import { useForm } from "react-hook-form"
import { supabase } from "@/lib/supabase"

type FormData = {
  name: string
  status: string
}

export default function AddService({
  onSuccess,
}: {
  onSuccess: () => void
}) {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase
      .from("services")
      .insert([
        {
          name: data.name,
          status: data.status,
        },
      ])

    if (error) {
      console.log(error)
      return
    }

    // reset form
    reset()

    // 🔥 refresh parent data
    onSuccess()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 p-4 border rounded-lg bg-[#F6F3ED]"
    >

      <input
        {...register("name")}
        placeholder="Service name"
        className="border p-2 rounded w-full"
      />

      <select
        {...register("status")}
        className="border p-2 rounded"
      >
        <option value="Operational">Operational</option>
        <option value="Degraded">Degraded</option>
        <option value="Down">Down</option>
      </select>

      <button
        type="submit"
        className="bg-[#313851] text-white px-4 rounded"
      >
        Add
      </button>

    </form>
  )
}