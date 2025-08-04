"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
    ChevronLeft,
    Star,
    CheckCircle,
    ArrowRight,
    Sparkles,
    TrendingUp,
    Heart,
    Zap
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function StyleQuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [isComplete, setIsComplete] = useState(false)
    const router = useRouter()

    const questions = [
        {
            id: 1,
            question: "What's your typical day like?",
            options: [
                { value: "office", label: "Office work", description: "Professional environment" },
                { value: "casual", label: "Casual activities", description: "Relaxed lifestyle" },
                { value: "creative", label: "Creative work", description: "Artistic pursuits" },
                { value: "active", label: "Active lifestyle", description: "Sports and fitness" }
            ]
        },
        {
            id: 2,
            question: "What colors do you gravitate towards?",
            options: [
                { value: "neutral", label: "Neutrals", description: "Blacks, whites, grays" },
                { value: "bold", label: "Bold colors", description: "Bright and vibrant" },
                { value: "earth", label: "Earth tones", description: "Browns, greens, beiges" },
                { value: "pastel", label: "Pastels", description: "Soft and light colors" }
            ]
        },
        {
            id: 3,
            question: "How do you prefer your clothes to fit?",
            options: [
                { value: "slim", label: "Slim fit", description: "Close to the body" },
                { value: "regular", label: "Regular fit", description: "Comfortable and classic" },
                { value: "relaxed", label: "Relaxed fit", description: "Loose and comfortable" },
                { value: "oversized", label: "Oversized", description: "Loose and trendy" }
            ]
        },
        {
            id: 4,
            question: "What's your budget for clothing?",
            options: [
                { value: "budget", label: "Budget-friendly", description: "Affordable options" },
                { value: "mid", label: "Mid-range", description: "Quality at good price" },
                { value: "premium", label: "Premium", description: "High-quality materials" },
                { value: "luxury", label: "Luxury", description: "Premium designer pieces" }
            ]
        },
        {
            id: 5,
            question: "What occasions do you dress for most?",
            options: [
                { value: "work", label: "Work", description: "Professional settings" },
                { value: "casual", label: "Casual", description: "Everyday activities" },
                { value: "social", label: "Social events", description: "Parties and gatherings" },
                { value: "formal", label: "Formal events", description: "Special occasions" }
            ]
        }
    ]

    const styleResults = {
        minimalist: {
            name: "Minimalist",
            description: "Clean lines, neutral colors, timeless pieces",
            icon: "⚪",
            recommendations: ["White button-up shirts", "Black tailored pants", "Neutral sweaters"],
            confidence: 85
        },
        bohemian: {
            name: "Bohemian",
            description: "Free-spirited, artistic, eclectic mix",
            icon: "🌸",
            recommendations: ["Flowy dresses", "Patterned tops", "Layered accessories"],
            confidence: 78
        },
        corporate: {
            name: "Corporate",
            description: "Professional, structured, sophisticated",
            icon: "👔",
            recommendations: ["Tailored suits", "Crisp shirts", "Professional dresses"],
            confidence: 82
        },
        streetwear: {
            name: "Streetwear",
            description: "Urban, trendy, comfortable",
            icon: "🏙️",
            recommendations: ["Graphic tees", "Sneakers", "Hoodies"],
            confidence: 75
        }
    }

    const handleAnswer = (value: string) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion]: value
        }))
    }

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            setIsComplete(true)
        }
    }

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1)
        }
    }

    const calculateResults = () => {
        // Simple scoring system
        const scores = { minimalist: 0, bohemian: 0, corporate: 0, streetwear: 0 }

        Object.values(answers).forEach(answer => {
            if (answer === 'office' || answer === 'neutral' || answer === 'slim' || answer === 'premium' || answer === 'work') {
                scores.corporate += 1
            } else if (answer === 'casual' || answer === 'earth' || answer === 'regular' || answer === 'mid' || answer === 'casual') {
                scores.minimalist += 1
            } else if (answer === 'creative' || answer === 'bold' || answer === 'oversized' || answer === 'luxury' || answer === 'social') {
                scores.bohemian += 1
            } else if (answer === 'active' || answer === 'pastel' || answer === 'relaxed' || answer === 'budget' || answer === 'formal') {
                scores.streetwear += 1
            }
        })

        const maxScore = Math.max(...Object.values(scores))
        const result = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore) || 'minimalist'

        return styleResults[result as keyof typeof styleResults]
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    if (isComplete) {
        const result = calculateResults()

        return (
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Your Style Results
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            Based on your answers, here's your personalized style profile
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <div className="text-6xl mb-4">{result.icon}</div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{result.name}</h2>
                                    <p className="text-gray-400 text-lg mb-4">{result.description}</p>
                                    <Badge className="bg-lime-yellow-600 text-black text-lg px-4 py-2">
                                        {result.confidence}% Match
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-white font-medium mb-4 flex items-center">
                                            <Sparkles className="w-5 h-5 mr-2 text-lime-yellow-500" />
                                            Recommended Items
                                        </h3>
                                        <div className="space-y-2">
                                            {result.recommendations.map((item, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-lime-yellow-500 rounded-full"></div>
                                                    <span className="text-gray-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-4 flex items-center">
                                            <TrendingUp className="w-5 h-5 mr-2 text-lime-yellow-500" />
                                            Style Tips
                                        </h3>
                                        <div className="space-y-2 text-gray-300">
                                            <p>• Focus on quality over quantity</p>
                                            <p>• Build a capsule wardrobe</p>
                                            <p>• Invest in versatile pieces</p>
                                            <p>• Consider your lifestyle needs</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/customization">
                            <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                                Start Customizing
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3"
                            onClick={() => {
                                setIsComplete(false)
                                setCurrentQuestion(0)
                                setAnswers({})
                            }}
                        >
                            Retake Quiz
                        </Button>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        aria-label="Go back"
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" /> Back
                    </button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Style Quiz
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Take our style quiz to discover your perfect look. Answer a few questions and
                            get personalized recommendations tailored to your preferences.
                        </p>
                    </motion.div>
                </div>

                {/* Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-white">Question {currentQuestion + 1} of {questions.length}</span>
                        <span className="text-lime-yellow-500">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </motion.div>

                {/* Question */}
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">
                                {questions[currentQuestion].question}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup
                                value={answers[currentQuestion] || ""}
                                onValueChange={handleAnswer}
                                className="space-y-4"
                            >
                                {questions[currentQuestion].options.map((option) => (
                                    <div key={option.value} className="flex items-center space-x-3">
                                        <RadioGroupItem value={option.value} id={option.value} />
                                        <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                            <div className="p-4 border-2 border-gray-700 rounded-lg hover:border-lime-yellow-500 transition-colors">
                                                <div className="text-white font-medium">{option.label}</div>
                                                <div className="text-gray-400 text-sm">{option.description}</div>
                                            </div>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex justify-between"
                >
                    <Button
                        variant="outline"
                        onClick={previousQuestion}
                        disabled={currentQuestion === 0}
                        className="border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={nextQuestion}
                        disabled={!answers[currentQuestion]}
                        className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                    >
                        {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 