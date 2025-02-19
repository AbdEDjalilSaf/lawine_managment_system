'use client'

import { RequistUserForm } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RequistUserForm),
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      <div className="lg:w-1/2 items-center justify-center p-6 bg-primary/10 hidden lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-auto max-w-md"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Request Legal Consultation</CardTitle>
            <CardDescription>
              Fill out the form below to submit your case request. We&apos;ll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="mt-1"
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  className="mt-1"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  className="mt-1"
                  placeholder="(555) 555-5555"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>

              <div>
                <Label>Gender</Label>
                <RadioGroup
                  onValueChange={(value) => setValue("gender", value)}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
              </div>

              <div>
                <Label htmlFor="caseType">Case Type</Label>
                <Input
                  id="caseType"
                  {...register("caseType")}
                  className="mt-1"
                  placeholder="e.g. Civil, Criminal, Family Law"
                />
                {errors.caseType && <p className="mt-1 text-sm text-red-600">{errors.caseType.message}</p>}
              </div>

              <div>
                <Label htmlFor="description">Case Description</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  className="mt-1 min-h-[120px]"
                  placeholder="Please provide details about your case"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
              </div>

              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  {...register("date")}
                  className="w-full mt-1"
                />
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
              </div>

              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input
                  id="time"
                  type="time"
                  {...register("time")}
                  className="w-full mt-1"
                />
                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
              </div>

              <Button type="submit" className="w-full mt-6">Submit Request</Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-600">We value your privacy. All information provided is confidential.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}