import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Menu,
  Zap,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StreamLine</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                🚀 New: AI-Powered Automation
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Workflow
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Boost productivity by 300% with our AI-powered automation platform. Connect your tools, automate
                repetitive tasks, and focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
            <div className="relative">
              <Image
                src="/modern-dashboard.png"
                alt="StreamLine Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to automate your workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help teams of all sizes work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intelligent automation that learns from your patterns and suggests optimizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real-time collaboration tools that keep your team aligned and productive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Detailed insights and reporting to track performance and ROI.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by thousands of teams worldwide
            </h2>
            <p className="text-xl text-gray-600">See what our customers have to say about StreamLine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "StreamLine has completely transformed how our team works. We've saved 20+ hours per week on manual
                  tasks."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/professional-headshot.png"
                    alt="Sarah Chen"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-500">VP of Operations, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The AI automation features are incredible. It's like having a personal assistant for our entire
                  workflow."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/professional-male-headshot.png"
                    alt="Michael Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                    <p className="text-sm text-gray-500">CEO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Implementation was seamless and the ROI was immediate. Best investment we've made this year."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/professional-woman-headshot.png"
                    alt="Emily Johnson"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Emily Johnson</p>
                    <p className="text-sm text-gray-500">Director of IT, GlobalCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center">Starter</CardTitle>
                <CardDescription className="text-center">Perfect for small teams</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    100 automation runs/month
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Basic integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Email support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-purple-500 relative hover:border-purple-600 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-center">Professional</CardTitle>
                <CardDescription className="text-center">Best for growing businesses</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Up to 25 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    1,000 automation runs/month
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    AI automation features
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center">Enterprise</CardTitle>
                <CardDescription className="text-center">For large organizations</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Unlimited automation runs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Advanced security features
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to streamline your workflow?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already transformed their productivity with StreamLine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-purple-100 mt-4">14-day free trial • No credit card required • Setup in minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-400 mb-4">Streamline your workflow with AI-powered automation.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
