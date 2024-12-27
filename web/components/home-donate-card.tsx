'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Sparkles, PartyPopper } from 'lucide-react'

export default function HomeDonateCard() {
    const [quantity, setQuantity] = useState(1)
    const pricePerItem = 20
    const total = quantity * pricePerItem

    return (
        <Card className="bg-white w-full border-none">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle/>
                    <CardDescription className="flex items-center justify-center gap-2 text-base">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span>Pang boost lang ng discord server bossing!</span>
                        <PartyPopper className="w-4 h-4 text-yellow-500" />
                    </CardDescription>
                </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label className="text-lg font-medium">₱20 each 🍲</Label>
                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-md"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </Button>
                            <span className="font-medium text-lg min-w-[20px] text-center">
                  {quantity}
                </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-md"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name">Your name or nickname</Label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        className="border-2 focus-visible:ring-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Your message (Optional)</Label>
                    <Textarea
                        id="message"
                        placeholder="Add a nice message..."
                        className="border-2 focus-visible:ring-blue-500 min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gif">GIF</Label>
                    <Input
                        id="gif"
                        placeholder="Add a GIF URL"
                        className="border-2 focus-visible:ring-blue-500"
                    />
                </div>

                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-primary-600 hover:from-blue-700 hover:to-primary-700 text-lg py-6 shadow-lg text-white"
                    >
                        Donate ₱{total.toFixed(2)}
                    </Button>
                </motion.div>
            </CardContent>
        </Card>
)
}

