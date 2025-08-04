"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface ProductFiltersProps {
  availableCategories: string[]
  availableSizes: string[]
  availableColors: { name: string; hex: string }[]
  availableFabrics: string[] // New prop for fabrics
  onFilterChange: (filters: {
    categories: string[]
    sizes: string[]
    minPrice: number
    maxPrice: number
    colors: string[]
    fabrics: string[] // Added fabrics to filter change
  }) => void
  initialMinPrice: number
  initialMaxPrice: number
}

export function ProductFilters({
  availableCategories,
  availableSizes,
  availableColors,
  availableFabrics, // Destructure new prop
  onFilterChange,
  initialMinPrice,
  initialMaxPrice,
}: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([initialMinPrice, initialMaxPrice])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]) // New state for selected fabrics
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category)
    setSelectedCategories(newCategories)
    applyFilters(newCategories, selectedSizes, priceRange, selectedColors, selectedFabrics)
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked ? [...selectedSizes, size] : selectedSizes.filter((s) => s !== size)
    setSelectedSizes(newSizes)
    applyFilters(selectedCategories, newSizes, priceRange, selectedColors, selectedFabrics)
  }

  const handleColorChange = (colorName: string, checked: boolean) => {
    const newColors = checked ? [...selectedColors, colorName] : selectedColors.filter((c) => c !== colorName)
    setSelectedColors(newColors)
    applyFilters(selectedCategories, selectedSizes, priceRange, newColors, selectedFabrics)
  }

  const handleFabricChange = (fabric: string, checked: boolean) => {
    const newFabrics = checked ? [...selectedFabrics, fabric] : selectedFabrics.filter((f) => f !== fabric)
    setSelectedFabrics(newFabrics)
    applyFilters(selectedCategories, selectedSizes, priceRange, selectedColors, newFabrics)
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
    // Apply filters immediately on price change for a smoother UX
    applyFilters(selectedCategories, selectedSizes, [value[0], value[1]], selectedColors, selectedFabrics)
  }

  const applyFilters = (
    categories: string[],
    sizes: string[],
    price: [number, number],
    colors: string[],
    fabrics: string[],
  ) => {
    onFilterChange({
      categories: categories,
      sizes: sizes,
      minPrice: price[0],
      maxPrice: price[1],
      colors: colors,
      fabrics: fabrics, // Pass fabrics to parent
    })
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedSizes([])
    setPriceRange([initialMinPrice, initialMaxPrice])
    setSelectedColors([])
    setSelectedFabrics([]) // Clear fabrics
    onFilterChange({
      categories: [],
      sizes: [],
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      colors: [],
      fabrics: [], // Clear fabrics in parent
    })
    setIsFiltersOpen(false) // Close filters after clearing
  }

  const filterVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
  }

  return (
    <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-100px)] lg:overflow-y-auto lg:pr-4">
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-2xl font-bold text-white">Filters</h2>
        <Button
          variant="outline"
          size="icon"
          className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500/20 bg-transparent"
          onClick={() => setIsFiltersOpen(true)} // Open filters
          aria-label="Open filters"
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col lg:relative lg:inset-auto lg:z-auto lg:bg-white/5 lg:backdrop-blur-sm lg:rounded-lg lg:border lg:border-white/10 lg:p-6 lg:shadow-lg lg:space-y-8 lg:flex-none"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={filterVariants}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          >
            {/* Mobile Header for Filters */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 lg:hidden">
              <h2 className="text-2xl font-bold text-white">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="p-6 space-y-8 flex-grow overflow-y-auto lg:p-0 lg:overflow-visible">
              {/* Category Filter */}
              {availableCategories.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Category</h3>
                  <div className="space-y-2">
                    {availableCategories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                          className="border-white/50 data-[state=checked]:bg-lime-yellow-500 data-[state=checked]:text-black"
                        />
                        <Label htmlFor={`category-${category}`} className="text-gray-300 cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Size Filter */}
              {availableSizes.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSizes.includes(size) ? "default" : "outline"}
                        onClick={() => handleSizeChange(size, !selectedSizes.includes(size))}
                        className={`min-w-[60px] ${
                          selectedSizes.includes(size)
                            ? "bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                            : "border-white/20 text-white hover:bg-white/10"
                        }`}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {/* Price Range Filter */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Price Range</h3>
                <Slider
                  min={initialMinPrice}
                  max={initialMaxPrice}
                  step={10}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-white/20 [&>span:first-child]:rounded-full [&>span:first-child>span]:bg-lime-yellow-500 [&>span:first-child>span]:h-2 [&>span:first-child>span]:rounded-full [&>span:first-child>span>span]:w-5 [&>span:first-child>span>span]:h-5 [&>span:first-child>span>span]:bg-lime-yellow-500 [&>span:first-child>span>span]:border-2 [&>span:first-child>span>span]:border-lime-yellow-500 [&>span:first-child>span>span]:rounded-full"
                />
                <div className="flex justify-between text-gray-300 text-sm mt-2">
                  <span>₹{priceRange[0].toFixed(2)}</span>
                  <span>₹{priceRange[1].toFixed(2)}</span>
                </div>
              </div>
              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {availableColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color.name, !selectedColors.includes(color.name))}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                          selectedColors.includes(color.name)
                            ? "border-lime-yellow-500"
                            : "border-white/20 hover:border-white/50"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Select color ${color.name}`}
                      >
                        {selectedColors.includes(color.name) && <CheckCircle className="w-4 h-4 text-black" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {/* Fabric Filter */}
              {availableFabrics.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Fabric</h3>
                  <div className="flex flex-wrap gap-3">
                    {availableFabrics.map((fabric) => (
                      <Button
                        key={fabric}
                        variant={selectedFabrics.includes(fabric) ? "default" : "outline"}
                        onClick={() => handleFabricChange(fabric, !selectedFabrics.includes(fabric))}
                        className={`min-w-[80px] ${
                          selectedFabrics.includes(fabric)
                            ? "bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                            : "border-white/20 text-white hover:bg-white/10"
                        }`}
                      >
                        {fabric}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>{" "}
            {/* End of scrollable content */}
            {/* Apply/Clear buttons for mobile */}
            <div className="p-6 border-t border-white/10 lg:hidden">
              <Button
                onClick={() => setIsFiltersOpen(false)}
                className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black mb-4"
              >
                Apply Filters
              </Button>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Clear All
              </Button>
            </div>
            {/* Desktop Clear Filters button (hidden on mobile) */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent hidden lg:block"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
