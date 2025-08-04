import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "@/lib/types"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? "text-lime-yellow-400 fill-lime-yellow-400" : "text-gray-600"}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
        <p className="text-gray-300 font-semibold">- {testimonial.author}</p>
      </CardContent>
    </Card>
  )
}
