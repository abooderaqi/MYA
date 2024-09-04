"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form"
import { useForm } from "react-hook-form"
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { createOrder } from "@/lib/actions/orderAction"
import toast from "react-hot-toast"
import { useCart } from "@/hooks/useCart"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const checkoutFormSchema = z.object({
  firstName: z.string().min(2).max(20).trim(),
  lastName: z.string().min(2).max(20).trim(),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number!"),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  postCode: z.string(),
})

const countries = [
  { label: "Saudi Arabia", value: "sa" },
  { label: "Jordan", value: "jo" },
  { label: "United Arab Emirates", value: "uae" },
] as const

const Checkout = () => {
  const router = useRouter()
  const { user } = useUser()
  const firstName = user?.firstName as string
  const lastName = user?.lastName as string

  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: "",
      address: "",
      city: "",
      country: "jo",
      postCode: "",
    },
  })
  console.log(user)
  const { cartItems } = useCart()
  const handleSubmit = async (values: z.infer<typeof checkoutFormSchema>) => {
    try {
      console.log(cartItems, values, user?.id)
      const order = await createOrder(values, cartItems)
      toast.success("Order created successfully")
      console.log(order)
      router.push("/payment-success")
      return order
    } catch (error) {
      toast.error(error as string)
    }
  }

  return (
    <div className="h-full w-[100vw] my-12">
      <div className="container flex justify-center items-center w-full h-full">
        <div className="form w-[30rem] h-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput country={"jo"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? countries.find(
                                    (country) => country.value === field.value
                                  )?.label
                                : "Select Country"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 bg-white border-1 border-gray-400">
                          <Command>
                            <CommandInput placeholder="Search Country..." />
                            <CommandList>
                              <CommandEmpty>No Country found.</CommandEmpty>
                              <CommandGroup>
                                {countries.map((country) => (
                                  <CommandItem
                                    value={country.label}
                                    key={country.value}
                                    className="hover:cursor-pointer"
                                    onSelect={() => {
                                      form.setValue("country", country.value)
                                    }}
                                  >
                                    {country.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postCode"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -left-28 top-1/2 -translate-y-1/2">
                      Post Code
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4 w-full">
                <Button
                  type="submit"
                  variant={"default"}
                  className="bg-blue-500 text-white w-full rounded-xl"
                >
                  DELIVER TO THIS ADDRESS
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
