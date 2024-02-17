import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label"

export default function JSON() {
  return (
    <div className="bg-white p-8">
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium" htmlFor="input">
              Input JSON
            </Label>
            <Textarea className="h-24" id="input" placeholder="Enter input JSON here" />
          </div>
          <div>
            <Label className="text-sm font-medium" htmlFor="output">
              Output JSON
            </Label>
            <Textarea className="h-24" id="output" placeholder="Output JSON will be displayed here"  />
          </div>
        </div>
      </div>
    </div>
  )
}