// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Star,
    Heart,
    ShoppingCart,
    Truck,
    Shield,
    RotateCcw,
    Share2,
    Plus,
    Minus,
    Check,
    X,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    Gift,
    Award,
    Clock,
    Users,
    MessageCircle,
    ThumbsUp,
    ThumbsDown,
    Filter,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [activeTab, setActiveTab] = useState('description');
    const [reviewFilter, setReviewFilter] = useState('all');
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
    const { toast } = useToast();

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const product = {
        id: parseInt(params.id),
        name: 'Premium Wireless Noise-Cancelling Headphones',
        brand: 'AudioTech Pro',
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        images: [
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
            'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
            'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg',
            'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg',
            'https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg',
        ],
        category: 'Electronics',
        rating: 4.8,
        reviews: 2847,
        badge: 'Best Seller',
        inStock: true,
        stockCount: 23,
        sku: 'ATP-WH-001',
        description: 'Experience premium audio quality with these wireless headphones featuring advanced noise cancellation, 40-hour battery life, and premium comfort design. Perfect for music lovers, professionals, and travelers.',
        features: [
            'Active Noise Cancellation with 3 modes',
            '40-hour battery life with quick charge',
            'Premium comfort design with memory foam',
            'Hi-Res Audio certified',
            'Multipoint Bluetooth 5.3 connectivity',
            'Touch controls with voice assistant',
            'Foldable design with premium carrying case',
            'Water-resistant IPX4 rating',
        ],
        sizes: ['Small', 'Medium', 'Large'],
        colors: [
            { name: 'Midnight Black', value: '#000000', available: true },
            { name: 'Pearl White', value: '#FFFFFF', available: true },
            { name: 'Rose Gold', value: '#E8B4B8', available: true },
            { name: 'Space Gray', value: '#8E8E93', available: false },
        ],
        specifications: {
            'Driver Size': '40mm Dynamic',
            'Frequency Response': '20Hz - 40kHz',
            'Impedance': '32 ohms',
            'Battery Life': '40 hours (ANC off), 30 hours (ANC on)',
            'Charging Time': '2 hours (Quick charge: 10min = 3hrs)',
            'Weight': '250g',
            'Connectivity': 'Bluetooth 5.3, 3.5mm jack',
            'Noise Cancellation': 'Hybrid ANC up to 30dB',
        },
        reviews: [
            {
                id: 1,
                user: 'Sarah Johnson',
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                rating: 5,
                date: '2025-01-10',
                title: 'Exceptional sound quality!',
                content: 'These headphones exceeded my expectations. The noise cancellation is incredible and the battery life is exactly as advertised. Perfect for long flights and daily commuting.',
                helpful: 24,
                verified: true,
            },
            {
                id: 2,
                user: 'Michael Chen',
                avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
                rating: 4,
                date: '2025-01-08',
                title: 'Great value for money',
                content: 'Solid build quality and great sound. The only minor issue is that they can feel a bit tight after extended use, but overall very satisfied with the purchase.',
                helpful: 18,
                verified: true,
            },
            {
                id: 3,
                user: 'Emily Rodriguez',
                avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
                rating: 5,
                date: '2025-01-05',
                title: 'Perfect for work from home',
                content: 'The noise cancellation is a game-changer for video calls. Crystal clear audio and the comfort is unmatched. Highly recommend for professionals.',
                helpful: 31,
                verified: true,
            },
        ],
        ratingBreakdown: {
            5: 68,
            4: 22,
            3: 7,
            2: 2,
            1: 1,
        },
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast({
                title: "Please select options",
                description: "Please select size and color before adding to cart.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Added to cart! 🛒",
            description: `${product.name} has been added to your cart.`,
        });
    };

    const handleBuyNow = () => {
        if (!selectedSize || !selectedColor) {
            toast({
                title: "Please select options",
                description: "Please select size and color before purchasing.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Redirecting to checkout...",
            description: "Taking you to secure checkout.",
        });
    };

    const handleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        toast({
            title: isWishlisted ? "Removed from wishlist 💔" : "Added to wishlist ❤️",
            description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
        });
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: product.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast({
                title: "Link copied!",
                description: "Product link has been copied to clipboard.",
            });
        }
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const filteredReviews = reviewFilter === 'all'
        ? product.reviews
        : product.reviews.filter(review => review.rating === parseInt(reviewFilter));

    return (
        <ThemeProvider>
            <ToastProvider>
                <div className="min-h-screen bg-background text-foreground">
                    <Header />
                    <main className="container mx-auto px-4 py-4 lg:py-8">
                        {/* Breadcrumb */}
                        <nav className="text-sm text-muted-foreground mb-6">
                            <div className="flex items-center space-x-2">
                                <Link href="/" className="hover:text-primary">Home</Link>
                                <span>/</span>
                                <Link href="/categories/electronics" className="hover:text-primary">Electronics</Link>
                                <span>/</span>
                                <span className="text-foreground">{product.name}</span>
                            </div>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                            {/* Product Images */}
                            <div className="space-y-4">
                                {/* Main Image */}
                                <div className="relative group">
                                    <div className="relative h-96 lg:h-[600px] overflow-hidden rounded-xl bg-secondary/10">
                                        <Image
                                            src={product.images[selectedImage]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            priority
                                        />

                                        {/* Image Navigation */}
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>

                                        {/* Zoom Button */}
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => setIsZoomed(true)}
                                        >
                                            <ZoomIn className="h-4 w-4" />
                                        </Button>

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex flex-col space-y-2">
                                            {product.badge && (
                                                <Badge className="bg-primary text-primary-foreground">
                                                    {product.badge}
                                                </Badge>
                                            )}
                                            <Badge className="bg-red-500 text-white">
                                                -{product.discount}%
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {product.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-colors ${selectedImage === index ? 'bg-white' : 'bg-white/50'
                                                    }`}
                                                onClick={() => setSelectedImage(index)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Thumbnail Images */}
                                <div className="flex space-x-2 overflow-x-auto pb-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-primary' : 'border-transparent'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${product.name} ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="space-y-6">
                                {/* Product Header */}
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Badge variant="outline">{product.category}</Badge>
                                        <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
                                    </div>
                                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
                                    <p className="text-muted-foreground mb-4">by {product.brand}</p>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < Math.floor(product.rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                            <span className="ml-2 font-medium">{product.rating}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            ({product.reviews.length} reviews)
                                        </span>
                                        <Button variant="link" className="p-0 h-auto text-primary">
                                            See all reviews
                                        </Button>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl font-bold text-primary">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-xl text-muted-foreground line-through">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                            Save ${(product.originalPrice! - product.price).toFixed(2)}
                                        </Badge>
                                    </div>

                                    {/* Limited Time Offer */}
                                    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Clock className="h-4 w-4 text-red-600" />
                                            <span className="text-sm font-medium text-red-600">Limited Time Offer</span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm">
                                            <span>Ends in:</span>
                                            <div className="flex space-x-2">
                                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-mono">
                                                    {timeLeft.hours.toString().padStart(2, '0')}h
                                                </div>
                                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-mono">
                                                    {timeLeft.minutes.toString().padStart(2, '0')}m
                                                </div>
                                                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-mono">
                                                    {timeLeft.seconds.toString().padStart(2, '0')}s
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Product Options */}
                                <div className="space-y-6">
                                    {/* Color Selection */}
                                    <div>
                                        <label className="text-sm font-medium mb-3 block">
                                            Color: {selectedColor && <span className="text-primary">{selectedColor}</span>}
                                        </label>
                                        <div className="flex space-x-3">
                                            {product.colors.map((color) => (
                                                <button
                                                    key={color.name}
                                                    onClick={() => color.available && setSelectedColor(color.name)}
                                                    disabled={!color.available}
                                                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${selectedColor === color.name
                                                        ? 'border-primary scale-110'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                        } ${!color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                    style={{ backgroundColor: color.value }}
                                                    title={color.name}
                                                >
                                                    {selectedColor === color.name && (
                                                        <Check className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                                    )}
                                                    {!color.available && (
                                                        <X className="h-4 w-4 text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size Selection */}
                                    <div>
                                        <label className="text-sm font-medium mb-3 block">
                                            Size: {selectedSize && <span className="text-primary">{selectedSize}</span>}
                                        </label>
                                        <div className="flex space-x-2">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`px-4 py-2 border rounded-lg transition-colors ${selectedSize === size
                                                        ? 'border-primary bg-primary text-primary-foreground'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div>
                                        <label className="text-sm font-medium mb-3 block">Quantity</label>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center border rounded-lg">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                    className="h-10 w-10"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span className="w-12 text-center font-medium">{quantity}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                                                    className="h-10 w-10"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {product.stockCount} items available
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Action Buttons */}
                                <div className="space-y-4">
                                    <div className="flex space-x-4">
                                        <Button onClick={handleBuyNow} size="lg" className="flex-1">
                                            Buy Now - ${(product.price * quantity).toFixed(2)}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            onClick={handleWishlist}
                                            className={`${isWishlisted ? 'text-red-500 border-red-500' : ''}`}
                                        >
                                            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                                        </Button>
                                        <Button variant="outline" size="lg" onClick={handleShare}>
                                            <Share2 className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <Button
                                        onClick={handleAddToCart}
                                        variant="outline"
                                        size="lg"
                                        className="w-full"
                                    >
                                        <ShoppingCart className="h-5 w-5 mr-2" />
                                        Add to Cart
                                    </Button>
                                </div>

                                <Separator />

                                {/* Trust Signals */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                                        <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium">Free Shipping</p>
                                            <p className="text-xs text-muted-foreground">On orders over $50</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                                        <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium">2-Year Warranty</p>
                                            <p className="text-xs text-muted-foreground">Full coverage</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                                        <RotateCcw className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium">30-Day Returns</p>
                                            <p className="text-xs text-muted-foreground">Easy returns</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Proof */}
                                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Users className="h-4 w-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-600">Popular Choice</span>
                                    </div>
                                    <p className="text-sm text-green-700 dark:text-green-300">
                                        147 people bought this in the last 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product Information Tabs */}
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
                                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                            </TabsList>

                            <TabsContent value="description" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <h4 className="font-semibold mb-4">Key Features:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {product.features.slice(0, showAllFeatures ? product.features.length : 4).map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {product.features.length > 4 && (
                                            <Button
                                                variant="link"
                                                onClick={() => setShowAllFeatures(!showAllFeatures)}
                                                className="mt-4 p-0"
                                            >
                                                {showAllFeatures ? 'Show Less' : `Show ${product.features.length - 4} More Features`}
                                                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showAllFeatures ? 'rotate-180' : ''}`} />
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="specifications" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <div key={key} className="flex justify-between py-3 border-b border-border">
                                                    <span className="font-medium text-muted-foreground">{key}</span>
                                                    <span className="font-medium">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-6">
                                <div className="space-y-6">
                                    {/* Review Summary */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <div className="text-center">
                                                    <div className="text-4xl font-bold mb-2">{product.rating}</div>
                                                    <div className="flex items-center justify-center space-x-1 mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`h-5 w-5 ${i < Math.floor(product.rating)
                                                                    ? 'fill-yellow-400 text-yellow-400'
                                                                    : 'text-gray-300'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="text-muted-foreground">Based on {product.reviews.length} reviews</p>
                                                </div>

                                                <div className="space-y-2">
                                                    {Object.entries(product.ratingBreakdown)
                                                        .reverse()
                                                        .map(([rating, count]) => {
                                                            const total = Object.values(product.ratingBreakdown).reduce((a, b) => Number(a) + Number(b), 0);
                                                            const percentage = Math.round((Number(count) / total) * 100);

                                                            return (
                                                                <div key={rating} className="flex items-center space-x-3">
                                                                    <span className="text-sm w-8">{rating}★</span>
                                                                    <Progress value={percentage} className="flex-1" />
                                                                    <span className="text-sm text-muted-foreground w-12">{percentage}%</span>
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Review Filters */}
                                    <div className="flex items-center space-x-4">
                                        <Select value={reviewFilter} onValueChange={setReviewFilter}>
                                            <SelectTrigger className="w-48">
                                                <Filter className="h-4 w-4 mr-2" />
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Reviews</SelectItem>
                                                <SelectItem value="5">5 Stars</SelectItem>
                                                <SelectItem value="4">4 Stars</SelectItem>
                                                <SelectItem value="3">3 Stars</SelectItem>
                                                <SelectItem value="2">2 Stars</SelectItem>
                                                <SelectItem value="1">1 Star</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <span className="text-sm text-muted-foreground">
                                            {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
                                        </span>
                                    </div>

                                    {/* Reviews List */}
                                    <div className="space-y-6">
                                        {filteredReviews.map((review) => (
                                            <Card key={review.id}>
                                                <CardContent className="p-6">
                                                    <div className="flex items-start space-x-4">
                                                        <Avatar>
                                                            <AvatarImage src={review.avatar} alt={review.user} />
                                                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <div className="flex items-center space-x-2 mb-2">
                                                                <h4 className="font-medium">{review.user}</h4>
                                                                {review.verified && (
                                                                    <Badge variant="outline" className="text-xs">
                                                                        <Check className="h-3 w-3 mr-1" />
                                                                        Verified Purchase
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center space-x-2 mb-2">
                                                                <div className="flex">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`h-4 w-4 ${i < review.rating
                                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                                : 'text-gray-300'
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-muted-foreground">{review.date}</span>
                                                            </div>
                                                            <h5 className="font-medium mb-2">{review.title}</h5>
                                                            <p className="text-muted-foreground mb-4">{review.content}</p>
                                                            <div className="flex items-center space-x-4">
                                                                <Button variant="ghost" size="sm">
                                                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                                                    Helpful ({review.helpful})
                                                                </Button>
                                                                <Button variant="ghost" size="sm">
                                                                    <ThumbsDown className="h-4 w-4 mr-1" />
                                                                    Not Helpful
                                                                </Button>
                                                                <Button variant="ghost" size="sm">
                                                                    <MessageCircle className="h-4 w-4 mr-1" />
                                                                    Reply
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Write Review */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">Rating</label>
                                                    <div className="flex space-x-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">Review Title</label>
                                                    <Input placeholder="Summarize your experience" />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">Your Review</label>
                                                    <Textarea
                                                        placeholder="Tell others about your experience with this product"
                                                        rows={4}
                                                    />
                                                </div>
                                                <Button>Submit Review</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="shipping" className="mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <Truck className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">Free Standard Shipping</p>
                                                            <p className="text-sm text-muted-foreground">5-7 business days • Orders over $50</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">Express Shipping</p>
                                                            <p className="text-sm text-muted-foreground">2-3 business days • $19.99</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <Award className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">Next Day Delivery</p>
                                                            <p className="text-sm text-muted-foreground">Order by 2 PM • $29.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold mb-4">Returns & Exchanges</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <RotateCcw className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">30-Day Returns</p>
                                                            <p className="text-sm text-muted-foreground">Free returns on all orders</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">Quality Guarantee</p>
                                                            <p className="text-sm text-muted-foreground">100% satisfaction guaranteed</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <Gift className="h-5 w-5 text-primary mt-0.5" />
                                                        <div>
                                                            <p className="font-medium">Gift Returns</p>
                                                            <p className="text-sm text-muted-foreground">Extended return period for gifts</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        {/* Related Products */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8">You might also like</h2>
                            <ProductGrid />
                        </section>
                    </main>
                    <Footer />
                </div>
            </ToastProvider>
        </ThemeProvider>
    );
}