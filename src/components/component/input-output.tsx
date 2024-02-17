import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label"

export default function JSON() {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#bdbdbd_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
            <div className="absolute bottom-auto -z-10 left-auto right-0 top-12 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            <div className="bg-white p-8 h-full ">
                <div className="mt-8 ">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm  justify-center flex mb-3 font-medium" >
                                Input JSON
                            </Label>
                            <Textarea className="h-64 border-slate-100" placeholder="Enter input JSON here" />
                        </div>
                        <div>
                            <Label className="text-sm justify-center flex mb-3 font-medium" >
                                Output JSON
                            </Label>
                            <Textarea className="h-64 border-slate-100" id="output" placeholder="Output JSON will be displayed here" />
                        </div>

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm"></div>
                        <button className="group mt-3 h-10 rounded-xl bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-5 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">Submit</span></button>

                    </div>
                </div>

            </div>

        </>

    )
}