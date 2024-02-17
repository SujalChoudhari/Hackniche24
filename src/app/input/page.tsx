import { InputForm } from '@/components/component/input-form'
import React from 'react'

export default function Input() {
  return (
    <div className="flex justify-center items-center mt-24">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <InputForm/>
    </div>
  ) 
}

